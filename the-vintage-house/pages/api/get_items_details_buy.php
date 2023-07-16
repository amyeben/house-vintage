<?php

header("Access-Control-Allow-Origin: http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $itemId = $request->item_id;

    function getItemDetailsFromDatabase($conn, $itemId)
    {
        $itemDetails = array();

        // Query to get the item details from the database based on the item ID
        $sql = "SELECT name, price_items, description, src_image FROM items WHERE id = $itemId";
        $result = $conn->query($sql);

        if ($result) {
            $itemDetails = $result->fetch_assoc();
            $result->close();
        } else {
            echo "ERROR";
        }

        return $itemDetails;
    }

    // Fetch item details from the database
    $itemDetails = getItemDetailsFromDatabase($conn, $itemId);

    echo json_encode($itemDetails);
}
?>
