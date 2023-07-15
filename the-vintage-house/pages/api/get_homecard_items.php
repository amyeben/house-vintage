<?php

header("Access-Control-Allow-Origin: http://localhost:3000, http://localhost:3000/posts/customer");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sqlFirstTen = "SELECT * FROM items ORDER BY id ASC LIMIT 10";
    $resultFirstTen = $conn->query($sqlFirstTen);

    $firstTenItems = array();
    while ($rowFirstTen = $resultFirstTen->fetch_assoc()) {
        $firstTenItems[] = $rowFirstTen;
    }

    $sqlLastTen = "SELECT * FROM items ORDER BY id DESC LIMIT 10";
    $resultLastTen = $conn->query($sqlLastTen);

    $lastTenItems = array();
    while ($rowLastTen = $resultLastTen->fetch_assoc()) {
        $lastTenItems[] = $rowLastTen;
    }

    $response = array(
        'firstTenItems' => $firstTenItems,
        'lastTenItems' => $lastTenItems
    );

    echo json_encode($response);
} else {
    echo json_encode([]);
}
?>
