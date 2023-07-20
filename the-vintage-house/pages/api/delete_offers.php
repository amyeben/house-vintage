<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/sellers/purchasing/offers");
header("Access-Control-Allow-Headers: DELETE");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

$offerId = $_GET['id'];
echo $offerId ;


$query = "DELETE FROM offers WHERE id = $offerId";
$result = mysqli_query($conn, $query);

if ($result) {
    // La suppression s'est bien déroulée
    echo json_encode(['success' => true]);
} else {
    // Une erreur s'est produite lors de la suppression
    echo json_encode(['success' => false, 'message' => 'Failed to delete item.']);
}

