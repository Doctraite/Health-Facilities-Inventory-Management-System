<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');

	if(isset($_POST['textBoxValue'])){
		$output = '';
		$customerIDString = '%' . htmlentities($_POST['textBoxValue']) . '%';
		
		$sql = 'SELECT facility_code FROM facility WHERE facility_code LIKE ?';
		$stmt = $conn->prepare($sql);
		$stmt->execute([$customerIDString]);

		if($stmt->rowCount() > 0){

			$output = '<ul class="list-unstyled suggestionsList" id="saleDetailsCustomerIDSuggestionsList">';
			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$output .= '<li>' . $row['facility_code'] . '</li>';
			}
			echo '</ul>';
		} else {
			$output = '';
		}
		$stmt->closeCursor();
		echo $output;
	}
?>