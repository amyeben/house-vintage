<?php
header("Access-Control-Allow-Origin: http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: GET, POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

if(
    $_SERVER["REQUEST_METHOD"] == "POST"
) {

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $customer_id = $request->customer_id;
    $item_id = $request->item_id;
    $number_offer = $request->number_offer;
    $quantity = $request->quantity;
    $timestamp = time();
    $currentDate = gmdate('Y-m-d', $timestamp);
    $price_offer = $request->price_offer;

    $sql = "SELECT COUNT(*) as nb FROM offers";
    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
    $id = $data['nb'] + 1;

    $sql = "INSERT INTO offers (id, customer_id, item_id, number_offer, quantity, date, price_offer) VALUES ('$id','$customer_id', '$item_id', '$number_offer', '$quantity', '$currentDate', '$price_offer')";
    $result = $conn->query($sql);

    echo json_encode(array(
        'success' => true
    ));
} else {
    echo json_encode(array(
        'error' => 'Invalid data'
    ));
}

$conn->close();
?>
