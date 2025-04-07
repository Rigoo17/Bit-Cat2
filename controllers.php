<?php
// Database connection
$servername = "localhost";
$username = "root"; // Change if needed
$password = "@Strangememes01"; // Change if needed
$database = "ecommerce_db"; // Ensure this matches your actual database name

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch only 'controllers' category
$sql = "SELECT * FROM products WHERE category = 'controllers'";
$result = $conn->query($sql);

$controllers = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $controllers[] = $row;
    }
}

// Send JSON response
echo json_encode($controllers);

$conn->close();
?>
