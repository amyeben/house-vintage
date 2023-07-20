<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/sellers/purchasing/auctions");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $sql = "SELECT COUNT(*) as nb FROM auctions";
    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
    $id = $data['nb'] + 1;

    $itemId = $request->itemId;
    $maxPrice = $request->maxPrice;
    $duration = $request->duration;
    $seller_id = $request->userId;
    $endTime = gmdate('Y-m-d H:i:s', strtotime("+$duration minutes +1 hour"));

    $sql = "INSERT INTO auctions (id, seller_id, item_id, max_price, start_time, end_time)
          VALUES ('$id', '$seller_id', '$itemId','$maxPrice', NOW(), '$endTime')";

    $sql = "UPDATE items SET auction_items = true WHERE id = $itemId";

    if ($conn->query($sql) === TRUE) {
        $response = array("success" => true);
        echo json_encode($response);
    } else {
        echo json_encode(array("error" => "Error creating auction: " . $conn->error));
    }
} else {
    echo json_encode(array("error" => "Invalid data check"));
}

$conn->close();
?>
