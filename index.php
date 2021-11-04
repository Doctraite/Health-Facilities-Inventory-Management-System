<?php
	session_start();
	//Redirect the user to login page if he/she is not logged in.
	if(!isset($_SESSION['loggedIn'])){
		header('Location: login.php');
		exit();
	}
	
	require_once('db.php');
	require('inc/welcome.html');
?>
<body id="element" style="background-color:#0094ff; padding-top:60px;">
<div style="width:95%; margin:auto;">

<div class="row">
	<div class="col-md-8" style="padding-left: 10px; padding-right: 20px;">
		<h1 style="font-size:40px; color:#ffffff; display: inline;">HMIS INVENTORY SYSTEM<span style="font-size:24px;">       version 1.0.0</span></h1>
	    <a class="btn btn-default btn-sm" style="margin-left: 1em;" target="_blank" href="release-notes.php">Current System Updates</a>
		<hr />
		<p class="text-info" style="color: #ffffff; font-size:20px;">
			Health Management Information System (HMIS) Inventory System
			is a system that can be used to store, update details of the inventory 
			such as (system units, monitors, servers, networking devices, UPSs Multipliers etc)
			brought from the Client Management Service CMS warehouse &amp; deployed in all the 
			facilities or clinics &amp; hospitals in all four regions in the Kingdom of Eswatini.
		</p>
		<hr />
		<p class="text-info" style="color: #ffffff; font-size:20px;">
		This system assists in the capturing of inventory deployed in every facility &amp; then 
		produce reports of the inventory deployed per facility. This system makes the 
		process of capturing inventory to be efficient and less time consuming as was the case with the
		previous method of recordinng inventory from facility level... 
        </p>
		
		<hr />
		
		<div class="panel panel-default">
			<div class="panel-body">
				<div style="display: flex; flex-direction: row ; align-items: stretch; justify-content: space-between; flex-wrap: nowrap;">
					<div style="text-align: left; flex-basis: 25%;"><img alt="Ministry of Health logo" src="Images/MoH-square.png" /></div>
					<div style="text-align: center;"><img alt="USAID logo" src="Images/USAID-square.png" /></div>
					<div style="text-align: center;"><img alt="PEPFAR logo" src="Images/PEPFAR-square.png" /></div>
					<div style="text-align: center;"><img alt="HMIS logo" src="Images/hmis-square.png" /></div>
					<div style="text-align: center;"><img alt="FEI logo" src="Images/fei-square.png" /></div>
				</div>
			</div>
		</div>
	</div>

<div class="col-md-4">
<form action="/" method="post">
<input name="__RequestVerificationToken" type="hidden" value="uhkd3P3fZ3QVqDyuGWs9lYXeILdrRHX0hc0KJ5yoj78_4N895Nz8fn39VK7661EiYw5MJcVwTQZWRiFBXU2Dx2dUVQzRiFpJCOsAn-wdXO01" />                    <div class="panel panel-default" style="margin-top:10px;">
				<div class="panel-body" style="padding-left:40px; padding-right:40px; border-radius:10px;">
					<h4>Inventory Management System</h4>
					<hr />

					<br />
					<div class="form">
					<br />
						<br />
						<br />
						<br />
						<div class="form-group-lg">
						    <a href="dashboard.php" class="btn btn-default btn-lg btn-block" target="_blank">
								<i class="glyphicon glyphicon-user"></i>&nbsp;NAVIGATE TO DASHBOARD
							</a>
							<br />
							<a href="model/login/logout.php" class="btn btn-warning btn-lg btn-block">
								<i class="glyphicon glyphicon-user"></i>&nbsp;SYSTEM LOGOUT
							</a>
						</div><br />
						<br />
						<br />
						<br />
						<br />
						<hr />
						<br />
						<br />
					</div>
				</div>
			</div>
</form>            </div>
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
				<span style="font-size:13px;" class="text-primary">Copyright &copy; Health Management Information System <?php echo date('Y'); ?></span>
                <br />
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
window.CMIS_IsDebug = false;
window.CMIS_AppVersion = "2.9.0.30813";
</script>

<script src="/Scripts/require.js"></script>

<script type="text/javascript"
	data-path="/"
	src="/Scripts/config.js"></script>
	<?php
	//require 'inc/footer.php';
?>
  </body>
</html>
