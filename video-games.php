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

// Fetch only 'videogames' category
$sql = "SELECT * FROM products WHERE category = 'videogames'";
$result = $conn->query($sql);

$videogames = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $videogames[] = $row;
    }
}

// Send JSON response
echo json_encode($videogames);

$conn->close();
?>
