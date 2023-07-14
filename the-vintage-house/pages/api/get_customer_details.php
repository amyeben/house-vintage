<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);


    $userId = $request->userId;



    $query = "
        SELECT
            COUNT(DISTINCT p.id) AS purchases,
            COUNT(DISTINCT o.id) AS offers
        FROM
            customer AS c
        LEFT JOIN
            purchases AS p ON c.id = p.customer_id
        LEFT JOIN
            offers AS o ON c.id = o.customer_id
        WHERE
            c.id = $userId
    ";

    $result = mysqli_query($conn, $query);
    $data = mysqli_fetch_assoc($result);

    if ($data) {
        $purchases = $data['purchases'];
        $offers = $data['offers'];
        echo json_encode(['purchases' => $purchases, 'offers' => $offers]);
    } else {
        echo json_encode(['purchases' => 0, 'offers' => 0]);
    }
}
