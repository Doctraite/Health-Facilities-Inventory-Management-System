<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');

	if(isset($_POST['facility_code'])){
		
		$customerID = htmlentities($_POST['facility_code']);
		
		$customerDetailsSql = 'SELECT * FROM facility WHERE facility_code = :facility_code';
		$customerDetailsStatement = $conn->prepare($customerDetailsSql);
		$customerDetailsStatement->execute(['facility_code' => $customerID]);

		if($customerDetailsStatement->rowCount() > 0) {
			$row = $customerDetailsStatement->fetch(PDO::FETCH_ASSOC);
			echo json_encode($row);
		}
		$customerDetailsStatement->closeCursor();
	}
?>