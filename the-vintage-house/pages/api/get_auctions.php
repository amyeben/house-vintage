<?php
header("Access-Control-Allow-Origin: http://localhost:3000/posts/customer/store");
header("Access-Control-Allow-Headers: GET, POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';

// Nouvelle requête pour obtenir l'auction_id pour l'article avec l'item_id spécifié
function getAuctionId($itemId) {
    global $conn;
    $sqlAuctionId = "SELECT id FROM auctions WHERE item_id = '$itemId' ORDER BY id DESC LIMIT 1";
    $resultAuctionId = $conn->query($sqlAuctionId);

    if ($resultAuctionId->num_rows > 0) {
        $rowAuctionId = $resultAuctionId->fetch_assoc();
        return $rowAuctionId['id'];
    } else {
        return -1;
    }
}

$sql = "SELECT * FROM items WHERE auction_items = true";
$result = $conn->query($sql);

$itemsTab = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $itemId = $row['id'];
        $auctionId = getAuctionId($itemId); // Appel de la fonction pour obtenir l'auction_id

        $sqlOffers = "SELECT MAX(price_offer) AS highest_offer, MAX(price_offer) AS last_offer
FROM offers_auctions
WHERE auction_id = $auctionId;"
;
        $resultOffers = $conn->query($sqlOffers);

        if ($resultOffers && $resultOffers->num_rows > 0) {
            $rowOffers = $resultOffers->fetch_assoc();
            $highestOffer = $rowOffers['highest_offer'];
            $lastOffer = $rowOffers['last_offer'];
        } else {
            $highestOffer = 0;
            $lastOffer = 0;
        }

        $items = array(
            'id' => $row['id'],
            'seller_id' => $row['seller_id'],
            'categorie' => $row['categorie'],
            'name' => $row['name'],
            'src_image' => $row['src_image'],
            'description' => $row['description'],
            'auction_items' => $row['auction_items'],
            'price_items' => $row['price_items'],
            'highest_offer' => $highestOffer,
            'last_offer' => $lastOffer,
            'auction_id' => $auctionId
        );

        $itemsTab[] = $items;
    }
}

echo json_encode($itemsTab);

?>
