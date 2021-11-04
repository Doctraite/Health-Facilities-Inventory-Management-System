<?php
	session_start();
	// Redirect the user to login page if he/she is not logged in.
	if(!isset($_SESSION['loggedIn'])){
		header('Location: login.php');
		exit();
	}
	
	require_once('db.php');
	require('inc/head.html');
?>
<?php //include_once('include/banner.php'); ?>

  <body>

  <?php
	require 'inc/navigation.php';
?>
    <!-- Page Content -->
    <div class="container-fluid">
	  <div class="row">
		<div class="col-lg-2">
		<div class="card card-outline-secondary my-4">
	     <div class="card-header">NAVIGATION BAR</div>
		<h1 class="my-4"></h1>
			<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			<span class="glyphicon glyphicon-plus-sign"></span>
			 <a class="nav-link" id="v-pills-customer-tab" data-toggle="pill" href="#v-pills-customer" role="tab" aria-controls="v-pills-customer" aria-selected="false">WELCOME</a>
			 <a class="nav-link active" id="v-pills-item-tab" data-toggle="pill" href="#v-pills-item" role="tab" aria-controls="v-pills-item" aria-selected="true">ADD INVENTORY</a>
			 <!--a class="nav-link" id="v-pills-customer-tab" data-toggle="pill" href="#v-pills-customer" role="tab" aria-controls="v-pills-customer" aria-selected="false">ADD FACILITY</a-->
			 <a class="nav-link" id="v-pills-vendor-tab" data-toggle="pill" href="#v-pills-vendor" role="tab" aria-controls="v-pills-vendor" aria-selected="false">DEPLOY EQUIPMENT</a>
			<!--a class="nav-link" id="v-pills-sale-tab" href="deployment.php"  aria-controls="" aria-selected="false">DEPLOY EQUIPMENT</a-->
			  <!--a class="nav-link" id="v-pills-sale-tab" data-toggle="pill" href="#v-pills-sale" role="tab" aria-controls="v-pills-sale" aria-selected="false">DEPLOY EQUIPMENT</a-->
			  <a class="nav-link" id="v-pills-search-tab" data-toggle="pill" href="#v-pills-search" role="tab" aria-controls="v-pills-search" aria-selected="false">SEARCH</a>
			  <a class="nav-link" id="v-pills-reports-tab" data-toggle="pill" href="#v-pills-reports" role="tab" aria-controls="v-pills-reports" aria-selected="false">REPORTS</a>
			</div>
			</div>
		</div>


        <!--SECTION FOR ADDING INVENTORY OR EQUIPMENT INTO THE HMIS SYSTEM-->
		 <div class="col-lg-10">	
			<div class="tab-content" id="v-pills-tabContent">
			<div class="tab-pane fade show active" id="v-pills-item" role="tabpanel" aria-labelledby="v-pills-item-tab">
			<div class="card card-outline-secondary my-4">
				  <div class="card-header">EQUIPMENT DETAILS</div>
				  <div class="card-body">
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#itemDetailsTab">Add Equipment</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#itemImageTab">Upload Equipment Image</a>
						</li>
					</ul>
					<div class="tab-content">
						<div id="itemDetailsTab" class="container-fluid tab-pane active">
							<br>
							<div id="itemDetailsMessage"></div>
							<form>
							  <div class="form-row">
								<div class="form-group col-md-6" style="display:inline-block">
								  <label for="itemDetailsItemNumber">Serial Number<span class="requiredIcon">*</span></label>
								  <input type="text" class="form-control" name="itemDetailsItemNumber" id="itemDetailsItemNumber" autocomplete="off">
								  <div id="itemDetailsItemNumberSuggestionsDiv" class="customListDivWidth"></div>
								</div>
								<div class="form-group col-md-3">
								  <label for="itemDetailsProductID">Equipment ID</label>
								  <input class="form-control invTooltip" type="number" readonly  id="itemDetailsProductID" name="itemDetailsProductID" title="This will be auto-generated when you add a new item">
								</div>
							  </div>
							  <div class="form-row">
								  <div class="form-group col-md-6">
									<label for="itemDetailsItemName">Equipment Brand<span class="requiredIcon">*</span></label>
									<input type="text" class="form-control" name="itemDetailsItemName" id="itemDetailsItemName" autocomplete="off">
									<div id="itemDetailsItemNameSuggestionsDiv" class="customListDivWidth"></div>
								  </div>
								  <div class="form-group col-md-3">
									<label for="itemDetailsStatus">Status</label>
									<select id="itemDetailsStatus" name="itemDetailsStatus" class="form-control chosenSelect">
										<?php include('inc/statusList.html'); ?>
									</select>
								  </div>
							  </div>
							  <div class="form-row">
								<div class="form-group col-md-6" style="display:inline-block">
								  <!-- <label for="itemDetailsDescription">Description</label> -->
								  <textarea rows="4" class="form-control" placeholder="Device Type or Description" name="itemDetailsDescription" id="itemDetailsDescription"></textarea>
								</div>
							  </div>
							  <div class="form-row">
								<div class="form-group col-md-6">
								  <label for="itemDetailsDiscount">CMIS Code</label>
								  <input type="text" class="form-control"  placeholder="Enter cmis code if available" name="itemDetailsDiscount" id="itemDetailsDiscount">
								</div>
								<div class="form-group col-md-3">
								  <label for="itemDetailsQuantity">Counts Device Type</span></label>
								  <input type="number" class="form-control invTooltip" value="1" name="itemDetailsQuantity" id="itemDetailsQuantity" readonly title="This counts the device type automatically">
								 </div>
                                 </div>
								 <div class="form-row">
								 </div>
								<div class="form-row">
								<div class="form-group col-md-3">
								</div>
								<div class="form-group col-md-3">
								</div>
								<div class="form-group col-md-3">
								</div>
								<div class="form-group col-md-6">
									<div id="imageContainer"></div>
								</div>
							  </div>
							  <button type="button" id="addItem" class="btn btn-success">Add Equipment</button>
							  <button type="button" id="updateItemDetailsButton" class="btn btn-primary">Update</button>
							  <button type="reset" class="btn" id="itemClear">Clear</button>
							</form>
						</div>

						<div id="itemImageTab" class="container-fluid tab-pane fade">
							<br>
							<div id="itemImageMessage"></div>
							<p>You can upload an image for a particular equipment using this section.</p> 
							<p>Please make sure the equipment is already added to database before uploading the image.</p>
							<br>							
							<form name="imageForm" id="imageForm" method="post">
							  <div class="form-row">
								<div class="form-group col-md-3" style="display:inline-block">
								  <label for="itemImageItemNumber">Serial Number<span class="requiredIcon">*</span></label>
								  <input type="text" class="form-control" name="itemImageItemNumber" id="itemImageItemNumber" autocomplete="off">
								  <div id="itemImageItemNumberSuggestionsDiv" class="customListDivWidth"></div>
								</div>
								<div class="form-group col-md-4">
									<label for="itemImageItemName">Equipment Brand</label>
									<input type="text" class="form-control" name="itemImageItemName" id="itemImageItemName" readonly>
								</div>
							  </div>
							  <br>
							  <div class="form-row">
								  <div class="form-group col-md-7">
									<label for="itemImageFile">Select Image ( <span class="blueText">jpg</span>, <span class="blueText">jpeg</span>, <span class="blueText">gif</span>, <span class="blueText">png</span> only )</label>
									<input type="file" class="form-control-file btn btn-dark" id="itemImageFile" name="itemImageFile">
								  </div>
							  </div>
							  <br>
							  <button type="button" id="updateImageButton" class="btn btn-primary">Upload Image</button>
							  <button type="button" id="deleteImageButton" class="btn btn-danger">Delete Image</button>
							  <button type="reset" class="btn">Clear</button>
							</form>
						</div>
					</div>
				  </div> 
				</div>
			  </div>
			  <!--END OF SECTION FOR ADDING INVENTORY OR EQUIPMENT INTO THE HMIS SYSTEM-->


              <!--SECTION FOR ADDING FACILITIES INTO THE HMIS SYSTEM-->
			  <!--div class="tab-pane fade" id="v-pills-purchase" role="tabpanel" aria-labelledby="v-pills-purchase-tab">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">FACILITY DETAILS</div>
				  <div class="card-body">
					<div id="purchaseDetailsMessage"></div>
					<form>
					  <div class="form-row">
						<div class="form-group col-md-8">
						  <label for="purchaseDetailsItemNumber">Facility Code<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="facilityDetailsItemNumber" name="facilityDetailsItemNumber" autocomplete="off">
						  <div id="purchaseDetailsItemNumberSuggestionsDiv" class="customListDivWidth"></div>
						</div>
					  </div>
					  <div class="form-row"> 
						  <div class="form-group col-md-4">
							<label for="purchaseDetailsItemName">Name of Facility<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control invTooltip" id="facilityDetailsItemName" name="facilityDetailsItemName">
						  </div>
						  <div class="form-group col-md-4">
							<label for="customerDetailsfacility">Facility Type<span class="requiredIcon">*</span></label>
							<select id="customerDetailsfacility" name="customerDetailsfacility" class="form-control chosenSelect">
							<?php include('inc/type.html'); ?>
							</select>
						  </div>
					  </div>
					  <button type="button" id="addPurchase" class="btn btn-success">Add Facility</button>
					  <button type="button" id="updatePurchaseDetailsButton" class="btn btn-primary">Update</button>
					  <button type="reset" class="btn">Clear</button>
					</form>
				  </div> 
				</div>
			  </div-->
			  <!--END OF SECTION FOR ADDING FACILITIES INTO THE HMIS SYSTEM-->
					  

             <!--SECTION FOR ADDING EMPLOYEE DETAILS INTO THE HMIS SYSTEM-->
			  <div class="tab-pane fade" id="v-pills-vendor" role="tabpanel" aria-labelledby="v-pills-vendor-tab">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">INVENTORY DEPLOYMENT DETAILS</div>
				  <div class="card-body">
				  <!-- Div to show the ajax message from validations/db submission -->
				  <div id="deploymentDetailsMessage"></div>
					 <form> 
					  <div class="form-row">
						<div class="form-group col-md-4">
						  <label for="facilityName">Facility Name<span class="requiredIcon">*</span></label>
						  <select id="facilityName" name="facilityName" class="form-control chosenSelect">
						  <option disabled selected>Select Facility Name</option>  
						  <?php

							   $records = mysqli_query($conn, "SELECT facility_name From facility");  // Use select query here 
					   
							   while($data = mysqli_fetch_array($records))
							   {
								   echo "<option value='". $data['facility_name'] ."'>" .$data['facility_name'] ."</option>";  // displaying data in option menu
							   }	
						   ?>  
						</select>
						</div>
						<div class="form-group col-md-4">
							<label for="facilityContactPerson">Facility Contact Person</label>
							<input type="text" class="form-control invTooltip" id="facilityContactPerson" name="facilityContactPerson" placeholder="">
						</div>
						 <div class="form-group col-md-4">
							<label for="deploymentID">Deployment ID</label>
							<input type="text" class="form-control invTooltip" id="deploymentID" name="deploymentID" title="This will be auto-generated when you have deployed inventory" autocomplete="off">
							<div id="vendorDetailsVendorIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
					  </div>
					  <div class="form-row">
						  <div class="form-group col-md-4">
							<label for="serialEquimentNumber">Serial Number of Equipment<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control" id="serialEquimentNumber" name="serialEquimentNumber" autocomplete="on">
						  <div id="saleDetailsItemNumberSuggestionsDiv" class="customListDivWidth"></div>
						  </div>
						  <div class="form-group col-md-4">
						<label for="nameOfEquipment">Name of Equipment<span class="requiredIcon">*</span></label>
						<input type="text" class="form-control invTooltip" id="nameOfEquipment" name="nameOfEquipment" readonly title="This will be auto-filled when you enter the serial number">
					  </div>
					  <div class="form-group col-md-4">
							<label for="employeeName">Employee Name (CMIS Personnel Present)</label>
							<select id="employeeName" name="employeeName" class="form-control chosenSelect">
						  <option disabled selected>Select Employee Name</option>  
						  <?php
						       
							   $records = mysqli_query($conn, "SELECT fullName From user");  // Use select query here 
					   
							   while($data = mysqli_fetch_array($records))
							   {
								   echo "<option value='". $data['fullName'] ."'>" .$data['fullName'] ."</option>";  // displaying data in option menu
							   }	
						   ?>  
						</select>
						</div>
					  </div>
					  <div class="form-row">
						<div class="form-group col-md-4">
						  <label for="deploymentDate">Deployment Date</label>
						  <input type="text" class="form-control datepicker" id="deploymentDate" value="Enter deployment date" name="deploymentDate" readonly>
						</div>
						<div class="form-group col-md-4">
							<label for="vendorDetailsStatus">Building<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control invTooltip" id="vendorDetailsStatus" name="vendorDetailsStatus" placeholder="">
						  </div>
						  <div class="form-group col-md-4">
							  <label for="roomType">Room Type<span class="requiredIcon">*</span></label>
							  <input type="text" class="form-control invTooltip" id="roomType"  name="roomType" placeholder="">
						  </div>
					  </div>					  
					  <button type="button" id="addVendor" name="addVendor" class="btn btn-success">Deploy Inventory</button>
					  <button type="button" id="updateVendorDetailsButton" class="btn btn-primary">Update</button>
					  <button type="reset" class="btn">Clear</button>
					 </form>
				  </div> 
				</div>
			  </div>
			  <!--END OF SECTION FOR ADDING EMPLOYEE DETAILS INTO THE HMIS SYSTEM-->
			    

			  <!--SECTION FOR DEPLOYING INVENTORY OR EQUIPMENT INTO THE HMIS LUBOMBO REGION FACILITIES-->
			  <!--div class="tab-pane fade" id="v-pills-sale" role="tabpanel" aria-labelledby="v-pills-sale-tab">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">INVENTORY DEPLOYMENT DETAILS</div>
				  <div class="card-body">
					<div id="saleDetailsMessage"></div>
					<form>
					<div class="form-row">
					<div class="form-group col-md-5">
						  <label for="saleDetailsTotalStock">Facility Name</label>
						  <select id="saleDetailsTotalStock" name="saleDetailsTotalStock" class="form-control chosenSelect">
						  <option disabled selected>Select Facility Name</option>  
						  <?php

							   $records = mysqli_query($conn, "SELECT facility_name From facility");  // Use select query here 
					   
							   while($data = mysqli_fetch_array($records))
							   {
								   echo "<option value='". $data['facility_name'] ."'>" .$data['facility_name'] ."</option>";  // displaying data in option menu
							   }	
						   ?>  
						</select>
						</div>
						<div class="form-group col-md-5">
							<label for="saleDetailsUnitPrice">Facility Contact Person</label>
							<input type="text" class="form-control invTooltip" id="saleDetailsUnitPrice" name="saleDetailsUnitPrice" placeholder="">
						  </div>
						  <div class="form-group col-md-1">
							<label for="saleDetailsSaleID">Deploy ID</label>
							<input type="text" class="form-control invTooltip" id="saleDetailsSaleID" name="saleDetailsSaleID" autocomplete="off" title="This will be auto-generated when you deploy equipment">
							<div id="saleDetailsSaleIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
					</div>
					
					  <div class="form-row">
						<div class="form-group col-md-5">
						  <label for="saleDetailsItemNumber">Serial Number of Equipment<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="saleDetailsItemNumber" name="saleDetailsItemNumber" autocomplete="on">
						  <div id="saleDetailsItemNumberSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						<div class="form-group col-md-5">
						<label for="saleDetailsCustomerName">Employee Name (CMIS Personnel Present)</label>
						  <select id="saleDetailsCustomerName" name="saleDetailsCustomerName" class="form-control chosenSelect">
						  <option disabled selected>Select Employee Name</option>  
						  <?php
						       
							   $records = mysqli_query($conn, "SELECT fullName From user");  // Use select query here 
					   
							   while($data = mysqli_fetch_array($records))
							   {
								   echo "<option value='". $data['fullName'] ."'>" .$data['fullName'] ."</option>";  // displaying data in option menu
							   }	
						   ?>  
						</select>
						</div>
					  </div>
					  <div class="form-row">
						  <div class="form-group col-md-5">
							<label for="saleDetailsItemName">Name of Equipment</label>
							<input type="text" class="form-control invTooltip" id="saleDetailsItemName" name="saleDetailsItemName" readonly title="This will be auto-filled when you enter the serial number above">
						  </div>
						  <div class="form-group col-md-5">
							  <label for="saleDetailsSaleDate">Deployement Date<span class="requiredIcon">*</span></label>
							  <input type="text" class="form-control datepicker" id="saleDetailsSaleDate" value="Enter deployment date" name="saleDetailsSaleDate" readonly>
						  </div>
					  </div>
					  <div class="form-row">
						  <div class="form-group col-md-5">
							<label for="saleDetailsDiscount">Building<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control invTooltip" id="saleDetailsDiscount" name="saleDetailsDiscount" placeholder="">
						  </div>
						  <div class="form-group col-md-5">
							  <label for="saleDetailsQuantity">Room Type<span class="requiredIcon">*</span></label>
							  <input type="text" class="form-control invTooltip" id="saleDetailsQuantity"  name="saleDetailsQuantity" placeholder="">
						  </div>
					  </div>
					  <div class="form-row">
						  </div>
					  <div class="form-row">
						  <div class="form-group col-md-3">
							<div id="saleDetailsImageContainer"></div>
						  </div>
					 </div>
					  <button type="button" id="addSaleButton" name="addSaleButton" class="btn btn-success">Deploy Equipment</button>
					  <button type="button" id="updateSaleDetailsButton" class="btn btn-primary">Update</button>
					  <button type="reset" id="saleClear" class="btn">Clear</button>
					</form>
				  </div> 
				</div>
			  </div-->
			  <!--END OF SECTION FOR DEPLOYING INVENTORY OR EQUIPMENT INTO THE HMIS LUBOMBO REGION FACILITIES-->

			  
			  <div class="tab-pane fade" id="v-pills-search" role="tabpanel" aria-labelledby="v-pills-search-tab">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">SEARCH INVENTORY SECTION<button id="searchTablesRefresh" name="searchTablesRefresh" class="btn btn-warning float-right btn-sm">Refresh</button></div>
				  <div class="card-body">										
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#itemSearchTab">List of Inventory</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#customerSearchTab">List of Facilities</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#vendorSearchTab">List of Deployed Inventory</a>
						</li>
					</ul>
  


					<!-- Tab panes -->
					<div class="tab-content">
						<div id="itemSearchTab" class="container-fluid tab-pane active">
						  <br>
						  <p>Use the grid below to search all details of inventory</p>
							<div class="table-responsive" id="itemDetailsTableDiv"></div>
						</div>
						<div id="customerSearchTab" class="container-fluid tab-pane fade">
							<br>
							<p>Use the grid below to search facility details</p>
							<div class="table-responsive" id="customerDetailsTableDiv"></div>
						</div>
						<div id="vendorSearchTab" class="container-fluid tab-pane fade">
							<br>
							<p>Use the grid below to search details of inventory deployments</p>
							<div class="table-responsive" id="vendorDetailsTableDiv"></div>
						</div>
					</div>
				  </div> 
				</div>
			  </div>


			  <div class="tab-pane fade" id="v-pills-reports" role="tabpanel" aria-labelledby="v-pills-reports-tab">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">INVENTORY REPORTS SECTION<button id="reportsTablesRefresh" name="reportsTablesRefresh" class="btn btn-warning float-right btn-sm">Refresh</button></div>
				  <div class="card-body">										
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#itemReportsTab">List of Inventory Available</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#customerReportsTab">List of Facilities</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#vendorReportsTab">List of Inventory Deployed</a>
						</li>
					</ul>
  
					<!-- Tab panes for reports sections -->
					<div class="tab-content">
						<div id="itemReportsTab" class="container-fluid tab-pane active">
							<br>
							<p>Use the grid below to get reports for Equipments</p>
							<div class="table-responsive" id="itemReportsTableDiv"></div>
						</div>
						<div id="customerReportsTab" class="container-fluid tab-pane fade">
							<br>
							<p>Use the grid below to get reports for Facilities</p>
							<div class="table-responsive" id="customerReportsTableDiv"></div>
						</div>
						<div id="vendorReportsTab" class="container-fluid tab-pane fade">
							<br>
							<p>Use the grid below to get reports for deployed inventory</p>
							<div class="table-responsive" id="vendorReportsTableDiv"></div>
						</div>
					</div>
				  </div> 
				</div>
			  </div>
			</div>
		 </div>
	  </div>
    </div>
	<div class="navbar navbar-default navbar-fixed-bottom" style="background-color: white !important; background-image: none; padding: .25em 0;">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-5" style="height: 100%;">
                    <div style="display: flex; flex-direction: row; align-items: flex-start; justify-content: space-between; flex-wrap: nowrap; flex-flow: row; height: 3em;">
                        <div style="height: 100%; text-align: left; flex-basis: 25%"><img style="height: 100%;" alt="Ministry of Health logo" src="Images/MoH-square.png" /></div>
                        <div style="height: 100%;"><img style="height: 100%;" alt="USAID logo" src="Images/USAID-square.png" /></div>
                        <div style="height: 100%;"><img style="height: 100%;" alt="PEPFAR logo" src="Images/PEPFAR-square.png" /></div>
                        <div style="height: 100%;"><img style="height: 100%;" alt="HMIS logo" src="Images/hmis-square.png" /></div>
                        <div style="height: 100%;"><img style="height: 100%;" alt="FEI logo" src="Images/fei-square.png" /></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-2">
                </div>
                <div class="col-md-4  col-sm-5 pull-right">
                        <span style="font-size:10px;" class="text-primary"><i class="glyphicon glyphicon-earphone"></i>&nbsp;&nbsp;</span>
                        <br />

                </div>
            </div>
        </div>
    </div>
<?php
	require 'inc/footer.php';
?>

  </body>
</html>
