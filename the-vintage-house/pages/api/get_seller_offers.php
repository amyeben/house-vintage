<?php

header("Access-Control-Allow-Origin: http://localhost:3000, http://localhost:3000/posts/seller/store");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$seller_id = $request->seller_id;

$sql = "SELECT o.*, c.email as customer_email, i.name as product_name 
        FROM offers o
        INNER JOIN customer c ON o.customer_id = c.id
        INNER JOIN items i ON o.item_id = i.id
        WHERE i.seller_id = '$seller_id'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $offers = array();

    while ($row = $result->fetch_assoc()) {
        $offers[] = $row;
    }

    echo json_encode($offers);
} else {
    echo json_encode(array());
}



