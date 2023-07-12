<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/admin");
header("Access-Control-Allow-Headers: DELETE");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

$itemId = $_GET['id'];


$query = "DELETE FROM items WHERE id = $itemId";
$result = mysqli_query($conn, $query);

if ($result) {
    // La suppression s'est bien déroulée
    echo json_encode(['success' => true]);
} else {
    // Une erreur s'est produite lors de la suppression
    echo json_encode(['success' => false, 'message' => 'Failed to delete item.']);
}

