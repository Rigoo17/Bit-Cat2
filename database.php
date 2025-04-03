<?php
$host = "localhost";
$user = "root";  // Change if you have a different username
$password = "@Strangememes01";  // Change if your MySQL has a password
$database = "ecommerce_db";

// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
