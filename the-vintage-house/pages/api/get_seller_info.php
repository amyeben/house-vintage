<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/sellers/myaccount");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $userId = $request->userId;

    // Get seller details
    $querySeller = "
        SELECT id, first_name, last_name, address, email, password
        FROM seller
        WHERE id = $userId
    ";

    $resultSeller = mysqli_query($conn, $querySeller);
    $sellerData = mysqli_fetch_assoc($resultSeller);

    // Get number of items
    $queryItems = "
        SELECT COUNT(id) AS items
        FROM items
        WHERE seller_id = $userId
    ";

    $resultItems = mysqli_query($conn, $queryItems);
    $itemsData = mysqli_fetch_assoc($resultItems);

    // Get number of sold products
    $querySoldProducts = "
        SELECT COUNT(DISTINCT item_id) AS soldProducts
        FROM purchases
        WHERE customer_id IN (
            SELECT id
            FROM seller
            WHERE id = $userId
        )
    ";

    $resultSoldProducts = mysqli_query($conn, $querySoldProducts);
    $soldProductsData = mysqli_fetch_assoc($resultSoldProducts);

    $response = [
        'firstName' => $sellerData['first_name'],
        'lastName' => $sellerData['last_name'],
        'email' => $sellerData['email'],
        'address' => $sellerData['address'],
        'items' => $itemsData['items'],
        'soldProducts' => $soldProductsData['soldProducts'],
    ];

    echo json_encode($response);
}
?>
