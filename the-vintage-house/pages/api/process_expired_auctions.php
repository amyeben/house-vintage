<?php
header("Access-Control-Allow-Origin: http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

// Function to check for expired auctions
function processExpiredAuctions() {
    global $conn;

    // Récupérer l'heure actuelle en utilisant gmdate
    $currentTime = gmdate("Y-m-d H:i:s");
    echo "Heure actuelle : " . $currentTime . PHP_EOL;

    // Requête pour trouver les enchères expirées
    $sqlExpiredAuctions = "SELECT * FROM auctions WHERE end_time <= '$currentTime'";
    $resultExpiredAuctions = $conn->query($sqlExpiredAuctions);

    if ($resultExpiredAuctions && $resultExpiredAuctions->num_rows > 0) {
        while ($rowAuction = $resultExpiredAuctions->fetch_assoc()) {
            $auctionId = $rowAuction['id'];

            // Query the offers_auctions table to find the highest bidder for the expired auction
            $sqlHighestBidder = "SELECT customer_id, MAX(price_offer) AS highest_offer FROM offers_auctions WHERE auction_id = '$auctionId' GROUP BY auction_id";
            $resultHighestBidder = $conn->query($sqlHighestBidder);
            echo $resultHighestBidder;

            if ($resultHighestBidder && $resultHighestBidder->num_rows > 0) {
                $rowHighestBidder = $resultHighestBidder->fetch_assoc();
                $customerId = $rowHighestBidder['customer_id'];
                $highestOffer = $rowHighestBidder['highest_offer'];

                echo "Auction ID : " . $auctionId . PHP_EOL;
                echo "Customer ID of the highest bidder : " . $customerId . PHP_EOL;
                echo "Highest offer : " . $highestOffer . PHP_EOL;

                // Delete the expired auction and related offers
                $sqlDeleteAuction = "DELETE FROM auctions WHERE id = '$auctionId'";
                $sqlDeleteOffers = "DELETE FROM offers_auctions WHERE auction_id = '$auctionId'";
                $conn->query($sqlDeleteAuction);
                $conn->query($sqlDeleteOffers);

                echo "Expired auction and related offers deleted." . PHP_EOL;
            }
        }
    } else {
        echo "No expired auctions found." . PHP_EOL;
    }
}

// Call the function to check for expired auctions
processExpiredAuctions();
