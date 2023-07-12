<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "the_vintage_house";
$dbhost = 8888;

// Créez une nouvelle connexion
$conn = new mysqli($servername, $username, $password, $dbname, $dbhost);

// Vérifiez la connexion
if ($conn->connect_error) {
    die("Échec de la connexion à la base de données : " . $conn->connect_error);
}
?>
