<?php
include 'database.php'; // Include database connection

header('Content-Type: application/json');

$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($action == 'getProducts') {
    $sql = "SELECT * FROM products";
    $result = $conn->query($sql);

    $products = [];
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    echo json_encode($products);
} else {
    echo json_encode(["message" => "Invalid action"]);
}
?>
