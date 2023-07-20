<?php
header("Access-Control-Allow-Origin: http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

if(
    $_SERVER["REQUEST_METHOD"] == "POST"
) {


    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $customer_id = $request->customer_id;
    $auction_id = $request->auction_id;
    $quantity = $request->quantity;
    $timestamp = time();
    $currentDate = gmdate('Y-m-d', $timestamp);
    $price_offer = $request->price_offer;

    $sql = "SELECT COUNT(*) as nb FROM offers_auctions";
    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
    $id = $data['nb'] + 1;

    $sql = "INSERT INTO offers_auctions (id, customer_id, auction_id, quantity, price_offer, date) VALUES ('$id','$customer_id', '$auction_id',  '$quantity',  '$price_offer', '$currentDate')";
    $result = $conn->query($sql);

    if ($conn->query($sql) === TRUE) {
        $response = array("success" => true);
        echo json_encode($response);
    } else {
        echo json_encode(array("error" => "Error creating auction: " . $conn->error));
    }
} else {
    echo json_encode(array("error" => "Invalid data check"));
}
?>
