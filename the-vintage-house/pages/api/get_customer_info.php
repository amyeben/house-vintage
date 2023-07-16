<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/customer/myaccount");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");

include 'db_connection.php';

$customerId = $_GET['id'];

// Query to get customer's information from the 'customer' table
$customerQuery = "SELECT * FROM customer WHERE id = $customerId";
$customerResult = $conn->query($customerQuery);

if ($customerResult->num_rows > 0) {
    $customerInfo = $customerResult->fetch_assoc();

    // Query to get the count of offers from the 'offers' table for the customer
    $offersQuery = "SELECT COUNT(*) AS offers_count FROM offers WHERE customer_id = $customerId";
    $offersResult = $conn->query($offersQuery);
    $offersCount = $offersResult->fetch_assoc()['offers_count'];

    // Query to get the count of purchases from the 'purchases' table for the customer
    $purchasesQuery = "SELECT COUNT(*) AS purchases_count FROM purchases WHERE customer_id = $customerId";
    $purchasesResult = $conn->query($purchasesQuery);
    $purchasesCount = $purchasesResult->fetch_assoc()['purchases_count'];

    // Query to get the count of auctions from the 'offers_auctions' table for the customer
    $auctionsQuery = "SELECT COUNT(*) AS auctions_count FROM offers_auctions WHERE customer_id = $customerId";
    $auctionsResult = $conn->query($auctionsQuery);
    $auctionsCount = $auctionsResult->fetch_assoc()['auctions_count'];

    // Create an array with the customer's information and counts
    $customerData = array(
        "last_name" => $customerInfo['last_name'],
        "first_name" => $customerInfo['first_name'],
        "email" => $customerInfo['email'],
        "address" => $customerInfo['address'],
        "offers_count" => $offersCount,
        "purchases_count" => $purchasesCount,
        "auctions_count" => $auctionsCount
    );

    // Convert the array to JSON format and send the response
    header('Content-Type: application/json');
    echo json_encode($customerData);
} else {
    // Customer not found
    echo "Customer not found.";
}

// Close the connection
$conn->close();

