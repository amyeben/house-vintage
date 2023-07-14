<?php


header("Access-Control-Allow-Origin: http://localhost:3000/suscribe, http://localhost:3000/posts/admin");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';
// SUSCRIBE



if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $firstName = $request->firstName;
    $lastName = $request->lastName;
    $address = $request->address;
    $username = $request->username;
    $password = $request->password;
    $usertype = $request->user;



    if($usertype == "CUSTOMER"){

        $sql = "SELECT count(*) as id FROM customer";
        $result = $conn->query($sql);
        $id = $result->fetch_assoc();
        $idCustomer = $id['id'] + 1;
        echo $idCustomer;

        $sql = "INSERT INTO customer (id, first_name, last_name, address, email, password) VALUES ('$idCustomer', '$firstName', '$lastName', '$address', '$username', '$password')";
        $result = $conn->query($sql);

        if ($result) {
            $response = array("success" => true, "user : $username" => "added successfully");
            echo json_encode($response);
        } else {
            // La requête a échoué
            die("Erreur lors de l'exécution de la requête : " . $conn->error);
        }
        exit();
    }else {
        $sql = "SELECT count(*) as id FROM seller";
        $result = $conn->query($sql);
        $id = $result->fetch_assoc();
        $idSeller = $id['id'] + 1;

        $sql = "INSERT INTO seller (id, first_name, last_name, address, email, password) VALUES ('$idSeller', '$firstName', '$lastName', '$address', '$username', '$password')";
        $result = $conn->query($sql);

        if ($result) {
            $response = array("success" => true, "user : $username" => "added successfully");
            echo json_encode($response);
        } else {
            // La requête a échoué
            die("Erreur lors de l'exécution de la requête : " . $conn->error);
        }
        exit();
    }





}

// Aucun utilisateur trouvé, définir un message d'erreur approprié
$errorMessage = "Erreur";
$response = array("success" => false, "message" => $errorMessage);

echo json_encode($response);