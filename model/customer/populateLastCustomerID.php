<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	$sql = "SELECT MAX(facility_code) FROM facility";
	$stmt = $conn->prepare($sql);
	$stmt->execute();
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	
	echo $row['MAX(facility_code)'];
	$stmt->closeCursor();
?>