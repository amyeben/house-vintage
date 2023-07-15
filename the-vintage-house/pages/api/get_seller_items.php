<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/sellers/products");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $userId = $request->user_id;

    $sql = "SELECT * FROM items WHERE seller_id = $userId";
    $result = $conn->query($sql);

    $itemsTab = [];

    if ($result->num_rows > 0) {
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
    }

    echo json_encode($itemsTab);
} else {
    echo json_encode([]);
}
