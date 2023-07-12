<?php


header("Access-Control-Allow-Origin: http://localhost:3000/suscribe");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';
// SUSCRIBE

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);



}

// Aucun utilisateur trouvé, définir un message d'erreur approprié
$errorMessage = "Erreur";
$response = array("success" => false, "message" => $errorMessage);

echo json_encode($response);