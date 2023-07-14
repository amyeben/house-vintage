<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $userId = $request->userId;

    $query = "
        SELECT COUNT(id) AS articles
        FROM items
        WHERE seller_id = $userId
    ";

    $result = mysqli_query($conn, $query);
    $data = mysqli_fetch_assoc($result);

    if ($data) {
        $articles = $data['articles'];
        echo json_encode(['articles' => $articles]);
    } else {
        echo json_encode(['articles' => 0]);
    }
}
?>
