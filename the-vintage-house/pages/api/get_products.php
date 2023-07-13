<?php



header("Access-Control-Allow-Origin: http://localhost:3000/posts/sellers/products");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

$sellerId = $_POST['id'];

$sql = "SELECT * FROM items WHERE seller_id = $sellerId";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    $items = array(
        'id' => $row['id'],
        'seller_id' => $row['seller_id'],
        'categorie' => $row['categorie'],
        'name' => $row['name'],
        'src_image' => $row['src_image'],
        'description' => $row['description'],
        'auction_items' => $row['auction_items'],
        'price_items' => $row['price_items']
    );

    $itemsTab[] = $items;
}

header('Content-Type: application/json');
echo json_encode($itemsTab);