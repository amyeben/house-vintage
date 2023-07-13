<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db_connection.php';

function getCategoryImagePath($category)
{
    switch ($category) {
        case "clothing":
            return "/../public/img/imgClothing/";
        case "accessories":
            return "/../public/img/imgAccessories/";
        case "footwear":
            return "/../public/img/imgFootwear/";
        case "books":
            return "/../public/img/imgBooksAndMagasine/";
        case "electronics":
            return "/../public/img/imgElectronics/";
        default:
            return "";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $category = $request->category;
    $image = $request->image;
    $description = $request->description;
    $name = $request->name;
    $price = $request->price;
    $seller_id = $request->userId;

    $sql = "SELECT count(*) as products FROM items";
    $result = $conn->query($sql);
    $products = $result->fetch_assoc();
    $idProducts = $products['products'] + 1;

    $auction = "0";

    $imagePath = getCategoryImagePath($category) . $image;

    $query = "INSERT INTO items (id, seller_id, categorie, name, src_image, description, auction_items, price_items) VALUES ('$idProducts', '$seller_id', '$category', '$name', '$imagePath', '$description', '$auction', '$price')";
    $result = mysqli_query($conn, $query);

    if ($result) {
        // L'insertion s'est bien déroulée
        echo json_encode(['success' => true]);
    } else {
        // Une erreur s'est produite lors de l'insertion
        echo json_encode(['success' => false, 'message' => mysqli_error($conn)]);
    }
}
