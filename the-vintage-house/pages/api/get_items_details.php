<?php
header("Access-Control-Allow-Origin: http://localhost:3000/posts/admin");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = "SELECT * FROM items";

    $result = mysqli_query($conn, $query);
    $data = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $item = [
            'id' => $row['id'],
            'seller_id' => $row['seller_id'],
            'categorie' => $row['categorie'],
            'name' => $row['name'],
            'src_image' => $row['src_image'],
            'description' => $row['description'],
            'auction_items' => $row['auction_items'],
            'price_items' => $row['price_items']
        ];

        $data[] = $item;
    }

    echo json_encode($data);
}
?>

