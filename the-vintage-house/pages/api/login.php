<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:3000/login");
header("Access-Control-Allow-Headers: POST");
header("Access-Control-Allow-Methods: Content-Type");

include 'db_connection.php';
// LOGIN

// Vérifier si l'utilisateur a soumis le formulaire de connexion
if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;

    // Vérifier dans la table "seller"
    $sql = "SELECT id, email, password FROM seller WHERE email = '$email'";
    $result = $conn->query($sql);
    $seller = $result->fetch_assoc();

// Vérifier dans la table "customer" si l'utilisateur n'a pas été trouvé dans la table "seller"
    if (!$seller) {
        $sql = "SELECT id, email, password FROM customer WHERE email = '$email'";
        $result = $conn->query($sql);
        $customer = $result->fetch_assoc();
    }

// Vérifier dans la table "admin" si l'utilisateur n'a pas été trouvé dans la table "seller" ou "customer"
    if (!$seller && !$customer) {
        $sql = "SELECT id, email, password FROM admin WHERE email = '$email'";
        $result = $conn->query($sql);
        $admin = $result->fetch_assoc();
    }


    // Vérifier si l'utilisateur a été trouvé et si le mot de passe est correct
    if ($seller && $seller['password']) {
        // Démarrer la session et enregistrer les informations de l'utilisateur dans la session
        $_SESSION["user_id"] = $seller["id"];
        $_SESSION["user_type"] = "seller";

        // Enregistrer les informations de la session dans la base de données
        $sessionId = session_id();
        $expiryTime = time() + (10 * 60);
        $userId = $seller["id"];

        $expiryTime = date('Y-m-d H:i:s', $expiryTime);

        $sql = "INSERT INTO sessions (session_id, expiry_timestamp, user_id, user_type) VALUES ('$sessionId', '$expiryTime', '$userId', 'seller')";
        $result = $conn->query($sql);

        if ($result) {
            $response = array("success" => true, "user_type" => "seller", "user_id" => $userId);
            echo json_encode($response);
        } else {
            // La requête a échoué
            die("Erreur lors de l'exécution de la requête : " . $conn->error);
        }

        exit();
    }
    elseif ($customer && $customer['password']) {
        // Démarrer la session et enregistrer les informations de l'utilisateur dans la session
        $_SESSION["user_id"] = $customer["id"];
        $_SESSION["user_type"] = "customer";

        // Enregistrer les informations de la session dans la base de données
        $sessionId = session_id();
        $expiryTime = time() + (10 * 60);
        $userId = $customer["id"];

        $expiryTime = date('Y-m-d H:i:s', $expiryTime);

        $sql = "INSERT INTO sessions (session_id, expiry_timestamp, user_id, user_type) VALUES ('$sessionId', '$expiryTime', '$userId', 'customer')";
        $result = $conn->query($sql);

        if ($result) {
            $response = array("success" => true, "user_type" => "customer", "user_id" => $userId);
            echo json_encode($response);
        } else {
            // La requête a échoué
            die("Erreur lors de l'exécution de la requête : " . $conn->error);
        }

        exit();
    } elseif ($admin && $admin['password']) {
        // Démarrer la session et enregistrer les informations de l'utilisateur dans la session
        $_SESSION["user_id"] = $admin["id"];
        $_SESSION["user_type"] = "admin";
        $userType = "admin";

        // Enregistrer les informations de la session dans la base de données
        $sessionId = session_id();
        $expiryTime = time() + (10 * 60);
        $userId = $admin["id"];

        $expiryTime = date('Y-m-d H:i:s', $expiryTime);

        $sql = "INSERT INTO sessions (session_id, expiry_timestamp, user_id, user_type) VALUES ('$sessionId', '$expiryTime', '$userId', '$userType')";
        $result = $conn->query($sql);

        if ($result) {
            $response = array("success" => true, "user_type" => "admin", "user_id" => $userId);
            echo json_encode($response);
        } else {
            // La requête a échoué
            die("Erreur lors de l'exécution de la requête : " . $conn->error);
        }

        exit();

        } else {
        // Identifiants invalides, renvoyer une réponse JSON appropriée
        $response = array("success" => false, "message" => "Identifiants invalides");
        echo json_encode($response);
        exit();
        }

}

// Aucun utilisateur trouvé, définir un message d'erreur approprié
$errorMessage = "Aucun utilisateur correspondant n'a été trouvé !";
$response = array("success" => false, "message" => $errorMessage);

echo json_encode($response);
exit();
