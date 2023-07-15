<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/admin");
header("Access-Control-Allow-Headers: GET, POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';


$sql = "SELECT * FROM items";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {

    $auctions = "NO";
    if ($row['auction_items'] !== "0") {
        $auctions = "YES";
    }

    $items = array(
        'id' => $row['id'],
        'seller_id' => $row['seller_id'],
        'categorie' => $row['categorie'],
        'name' => $row['name'],
        'src_image' => $row['src_image'],
        'description' => $row['description'],
        'auction_items' => $auctions,
        'price_items' => $row['price_items']
    );

    $itemsTab[] = $items;
}

header('Content-Type: application/json');
echo json_encode($itemsTab);
