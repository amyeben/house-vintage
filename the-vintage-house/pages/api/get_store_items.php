<?php

header("Access-Control-Allow-Origin: http://localhost:3000, http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: GET");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

$categories = ['books', 'clothing', 'accessories', 'footwear', 'electronics'];

$sortedProducts = array();

foreach ($categories as $category) {
    $query = "SELECT * FROM items WHERE categorie = '$category'";
    $result = mysqli_query($conn, $query);

    $categoryProducts = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $categoryProducts[] = $row;
    }

    $sortedProducts[$category] = $categoryProducts;
}

$jsonData = json_encode($sortedProducts);

echo $jsonData;
?>
