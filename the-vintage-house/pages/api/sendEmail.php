<?php

header("Access-Control-Allow-Origin: http://localhost:3000, http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: GET, POST, OPTIONS");
header("Access-Control-Allow-Methods: Content-Type, Authorization");
header("Access-Controol-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] ===  'OPTIONS'){
    header("HTTP/1.1 200 OK");
    exit();
}

include 'db_connection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['cartItems']) || !isset($data['totalPrice']) || !isset($data['cardInfo'])) {
        http_response_code(400);
        exit('Paramètres manquants dans la requête.');
    }


    //$parsed_json = json_decode($cartItems = $data['cartItems'],true);

    $cartItems = $data['cartItems'];
    $totalPrice = $data['totalPrice'];
    //$cardInfo = $data['cardInfo'];
    $user_id = $data['user_id'];
    $timestamp = time();
    $currentDate = gmdate('Y-m-d H:i:s', $timestamp);



    foreach ($cartItems as $cartItem) {

        $sql = "SELECT COUNT(*) as nb FROM purchases";
        $result = $conn->query($sql);
        $data = $result->fetch_assoc();
        $id = $data['nb'] + 1;

        $item_id = $cartItem['item'];
        $sql = "INSERT INTO purchases (id, item_id, customer_id, price, created_at) VALUES ('$id','$item_id', '$user_id', '$totalPrice','$currentDate')";
        $result = $conn->query($sql);

        if ($result) {
            $response = array("success" => true);
            echo json_encode($response);
        } else {
            die("Erreur lors de l'exécution de la requête : " . $conn->error);
        }

    }

    $mailUsername = 'ebenamy95@gmail.com';
    $mailPassword = 'mimi95190';
    $mailHost = 'smtp.gmail.com';
    $mailPort = 465;

    $recipientEmail = 'ebenamy12@yahoo.fr';

    $emailContent = "Order Details:\n" . json_encode($cartItems, JSON_PRETTY_PRINT) . "\n\nTotal Price: " . number_format($totalPrice, 2) . " £\n\nCard Info:\n" . json_encode($cardInfo, JSON_PRETTY_PRINT);

    $headers = "From: $mailUsername" . "\r\n" .
        "Reply-To: $mailUsername" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if (mail($recipientEmail, 'Order Details', $emailContent, $headers)) {
        http_response_code(200);
        exit('Email envoyé avec succès !');
    } else {
        http_response_code(500);
        exit('Erreur lors de l\'envoi de l\'email.');
    }
} else {
    http_response_code(405);
    exit('Méthode non autorisée.');
}

