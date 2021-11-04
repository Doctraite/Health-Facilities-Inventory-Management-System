<?php

$dbHost =  "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "shop_inventory";


$conn = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

if($conn->connect_error)
{
    die("Connection Failed: " .$conn->connect_error);
}

?>