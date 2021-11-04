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
        $serialNumber = $_REQUEST['saleDetailsItemNumber'];
		$facilityName = $_REQUEST['saleDetailsFacilityName'];
		$personPresent = $_REQUEST['saleDetailsPersonName'];
		$vendorName = $_REQUEST['saleDetailsCustomerName'];
		$equipmentmName = $_REQUEST['saleDetailsItemName'];
		$deploymentDate = $_REQUEST['saleDetailsSaleDate'];
		$buildinngName = $_REQUEST['saleDetailsDiscount'];
		$roomType = $_REQUEST['saleDetailsQuantity'];

    $insertDeploymentSql = "INSERT INTO deployment
                            VALUES('$facilityName', '$serialNumber', '$vendorName', '$itemName', '$saleDate','$buildinngName', '$roomType', '$personPresent')";

    if($insertDeploymentSql)
    {
        $msg="Equipment Deployed Successfully!!";
        echo "<script type='text/javascript'>alert('$msg');</script>";
        header('Location:./index.php');
    }
    else
    {
       $errormsg="Something went wrong, Try again";
        echo "<script type='text/javascript'>alert('$errormsg');</script>";
    }




?>