<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	if(isset($_POST['customerDetailsCustomerFullName'])){
		
		$customerDetailsCustomerID = htmlentities($_POST['customerDetailsCustomerFullName']);
		
		if(!empty($customerDetailsCustomerID)){
			
			$customerDetailsCustomerID = filter_var($customerDetailsCustomerID, FILTER_SANITIZE_STRING);

			$customerSql = 'SELECT facility_code FROM facility WHERE facility_code=:facility_code';
			$customerStatement = $conn->prepare($customerSql);
			$customerStatement->execute(['facility_code' => $customerDetailsCustomerID]);
			
			if($customerStatement->rowCount() > 0){
		
				$deleteCustomerSql = 'DELETE FROM facility WHERE facility_code=:facility_code';
				$deleteCustomerStatement = $conn->prepare($deleteCustomerSql);
				$deleteCustomerStatement->execute(['facility_code' => $customerDetailsCustomerID]);

				echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Facility deleted.</div>';
				exit();
				
			} else {
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Facility does not exist in our system. Therefore, can\'t delete.</div>';
				exit();
			}
			
		} else {
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter the Facility Code</div>';
			exit();
		}
	}
?>