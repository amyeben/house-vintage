<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/sellers/purchasing/offers");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$offerId = $request->offerId;
$offerPrice = $request->offerPrice;
$email = $request->email;

// Get the customer ID based on the provided email
$sql = "SELECT id FROM customer WHERE email = '$email'";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
$id_customer = $data['id'];

$timestamp = time();
$currentDate = gmdate('Y-m-d', $timestamp);

// Get the current number of purchases and calculate the new purchase ID
$sql = "SELECT COUNT(*) as nb FROM purchases";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
$id = $data['nb'] + 1;

// Insert the purchase record into the 'purchases' table
$sql = "INSERT INTO purchases (id, item_id, customer_id, price, created_at) 
        VALUES ('$id', '$offerId', '$id_customer', '$offerPrice', '$currentDate')";
$result = $conn->query($sql);

if ($result) {
    // If the insertion was successful, send a success response
    $response = array("success" => true);
    echo json_encode($response);
} else {
    // If there was an error in the SQL query, output the error message
    die("Erreur lors de l'exécution de la requête : " . $conn->error);
}
