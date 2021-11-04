<?php
    error_reporting(0);
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	if(isset($_POST['customerDetailsCustomerFullName'])){
		
		$fullName = htmlentities($_POST['customerDetailsCustomerFullName']);
		$city = htmlentities($_POST['customerDetailsCustomerCity']);
		$district = htmlentities($_POST['customerDetailsCustomerDistrict']);
		
		if(isset($fullName)) {

			if($fullName == ''){
				
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Facility Code.</div>';
				exit();
			}

			$stockSql = 'SELECT facility_code FROM facility WHERE facility_code=:facility_code';
			$stockStatement = $conn->prepare($stockSql);
			$stockStatement->execute(['facility_code' => $facilityID]);
			if($stockStatement->rowCount() > 0){
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Facility already exists in our system. Please try adding another facility.</div>';
				exit();
			} else {
			
			$sql = 'INSERT INTO facility(facility_code, facility_name, facility_type) VALUES(:facility_code, :facility_name, :facility_type)';
			$stmt = $conn->prepare($sql);
			$stmt->execute(['facility_code' => $fullName, 'facility_name' => $city, 'facility_type' => $district]);
			echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Facility added to database</div>';
			
		    }
		} else {
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter all fields marked with a (*)</div>';
			exit();
		}
	}
?>