<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');

	if(isset($_POST['customerDetailsCustomerFullName'])) {
		
		$customerDetailsCustomerFullName = htmlentities($_POST['customerDetailsCustomerFullName']);
		$customerDetailsCustomerCity = htmlentities($_POST['customerDetailsCustomerCity']);
		$customerDetailsCustomerDistrict = htmlentities($_POST['customerDetailsCustomerDistrict']);
		
		if(isset($customerDetailsCustomerFullName)) {
			

			if(empty($customerDetailsCustomerFullName)){
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter the Facility code to update that facility.</div>';
				exit();
			}
			
			$customerIDSelectSql = 'SELECT * FROM facility WHERE facility_code = :customerDetailsCustomerFullName';
			$customerIDSelectStatement = $conn->prepare($customerIDSelectSql);
			$customerIDSelectStatement->execute(['facility_code' => $customerDetailsCustomerFullName, 'facility_name' => $customerDetailsCustomerCity, 'facility_type' => $customerDetailsCustomerDistrict]);
			
			if($customerIDSelectStatement->rowCount() > 0) {
				

				$updateCustomerDetailsSql = 'UPDATE facility SET facility_name = :facility_name, facility_type = :facility_type WHERE facility_code = :facility_code';
				$updateCustomerDetailsStatement = $conn->prepare($updateCustomerDetailsSql);
				$updateCustomerDetailsStatement->execute(['facility_name' => $customerDetailsCustomerCity, 'facility_type' => $customerDetailsCustomerDistrict, 'facility_code' => $customerDetailsCustomerFullName]);
				
				echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Facility details updated.</div>';
				exit();
			} else {
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Facility Code does not exist in our system. Therefore, update not possible.</div>';
				exit();
			}
			
		} else {
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter all fields marked with a (*)</div>';
			exit();
		}
	}
?>