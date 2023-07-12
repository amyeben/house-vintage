<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/admin");
header("Access-Control-Allow-Headers: GET");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

$sql = "SELECT * FROM customer";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    $customer = array(
        'id' => $row['id'],
        'firstname' => $row['first_name'],
        'lastname' => $row['last_name'],
        'address' => $row['address'],
        'email' => $row['email'],
        'password' => $row['password']
    );

    $customers[] = $customer;
}

header('Content-Type: application/json');
echo json_encode($customers);

