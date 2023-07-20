<?php
header("Access-Control-Allow-Origin: http://localhost:3000, http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: GET, POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the data sent via POST
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $customer_id = $request->customer_id;
    $item_id = $request->item_id;

    // Check the number of existing offers for the specific customer and item
    $sql = "SELECT COUNT(*) as num_offers FROM offers WHERE customer_id = $customer_id AND item_id = $item_id";
    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
    $num_offers = $data['num_offers'];

    // Check if the number of offers is equal to 5
    $offer_limit_reached = $num_offers >= 5;

    // Check if there is an offer with number_offer equal to 5 for the specific item
    $sql = "SELECT COUNT(*) as num_offers2 FROM offers WHERE number_offer = 5 AND item_id = $item_id";
    $result = $conn->query($sql);
    $data2 = $result->fetch_assoc();
    $num_offers2 = $data2['num_offers2'];

    $offer_limit_reached2 = $num_offers2 > 0;

    // Send the response as JSON
    echo json_encode(array(
        'offer_limit_reached' => $offer_limit_reached,
        'offer_limit_reached2' => $offer_limit_reached2,
        'number_of_offers' => $num_offers
    ));
} else {
    // If the request method is not POST, send an error response
    echo json_encode(array(
        'error' => 'Invalid data check'
    ));
}

$conn->close();
?>
