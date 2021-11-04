purchaseDetailsSearchTableCreatorFile = 'model/facility/itemDetailsSearchTableCreator.php';
customerDetailsSearchTableCreatorFile = 'model/customer/customerDetailsSearchTableCreator.php';
itemDetailsSearchTableCreatorFile = 'model/item/itemDetailsSearchTableCreator.php';
vendorDetailsSearchTableCreatorFile = 'model/vendor/vendorDetailsSearchTableCreator.php';
saleDetailsSearchTableCreatorFile = 'model/sale/saleDetailsSearchTableCreator.php';
purchaseReportsSearchTableCreatorFile = 'model/facility/itemReportsSearchTableCreator.php';
customerReportsSearchTableCreatorFile = 'model/customer/customerReportsSearchTableCreator.php';
itemReportsSearchTableCreatorFile = 'model/item/itemReportsSearchTableCreator.php';
vendorReportsSearchTableCreatorFile = 'model/vendor/vendorReportsSearchTableCreator.php';
saleReportsSearchTableCreatorFile = 'model/sale/saleReportsSearchTableCreator.php';
vendorLastInsertedIDFile = 'model/vendor/populateLastVendorID.php';
customerLastInsertedIDFile = 'model/customer/populateLastCustomerID.php';
purchaseLastInsertedIDFile = 'model/facility/populateLastProductID.php';
saleLastInsertedIDFile = 'model/sale/populateLastSaleIDForSaleTab.php';
itemLastInsertedIDFile = 'model/item/populateLastProductID.php';
showPurchaseIDSuggestionsFile = 'model/facility/showItemNumber.php';
showSaleIDSuggestionsFile = 'model/sale/showSaleIDs.php';
showVendorIDSuggestionsFile = 'model/vendor/showVendorIDs.php';
showCustomerIDSuggestionsFile = 'model/customer/showCustomerIDs.php';
showCustomerIDSuggestionsForSaleTabFile = 'model/customer/showCustomerIDsForSaleTab.php';
showItemNumberSuggestionsFile = 'model/item/showItemNumber.php';
showItemNumberSuggestionsForImageTabFile = 'model/item/showItemNumberForImageTab.php';
showItemNumberForPurchaseTabFile = 'model/item/showItemNumberForPurchaseTab.php';
showItemNumberForSaleTabFile = 'model/item/showItemNumberForSaleTab.php';
showItemNamesFile = 'model/item/showItemNames.php';
getItemStockFile = 'model/item/getItemStock.php';
getItemNameFile = 'model/item/getItemName.php';
updateImageFile = 'model/image/updateImage.php';
deleteImageFile = 'model/image/deleteImage.php';
purchaseFilteredReportCreatorFile = 'model/purchase/purchaseFilteredReportTableCreator.php';


$(document).ready(function(){

	$('.chosenSelect').chosen({ width: "100%"});
	$('.invTooltip').tooltip(); 
	$('#addCustomer').on('click', function(){
		addCustomer();
	});
	$('#addVendor').on('click', function(){
		addVendor();
	});
	$('#addItem').on('click', function(){
		bootbox.confirm('Equipment added to database.', function(result){
			if(result)
			{
		     addItem();
			}
		})
	});

	$('#updateItemDetailsButton').on('click', function(){
		bootbox.confirm('Equipment details updated.', function(result){
			if(result)
			{
		updateItem();
			}
		})
	});

	$('#updateCustomerDetailsButton').on('click', function(){
		updateCustomer();
	});

	$('#updateVendorDetailsButton').on('click', function(){
		updateVendor();
	});

	$('#itemDetailsItemName').keyup(function(){
		showSuggestions('itemDetailsItemName', showItemNamesFile, 'itemDetailsItemNameSuggestionsDiv');
	});
	
	$(document).on('click', '#itemDetailsItemNamesSuggestionsList li', function(){
		$('#itemDetailsItemName').val($(this).text());
		$('#itemDetailsItemNamesSuggestionsList').fadeOut();
	});

	$('#itemDetailsItemNumber').keyup(function(){
		showSuggestions('itemDetailsItemNumber', showItemNumberSuggestionsFile, 'itemDetailsItemNumberSuggestionsDiv');
	});
	

	$(document).on('click', '#itemDetailsItemNumberSuggestionsList li', function(){
		$('#itemDetailsItemNumber').val($(this).text());
		$('#itemDetailsItemNumberSuggestionsList').fadeOut();
		getItemDetailsToPopulate();
	});

	// Listen to item number text box in item image tab
	$('#itemImageItemNumber').keyup(function(){
		showSuggestions('itemImageItemNumber', showItemNumberSuggestionsForImageTabFile, 'itemImageItemNumberSuggestionsDiv');
	});
	
	// Remove the item numbers suggestions dropdown in the item image tab
	// when user selects an item from it
	$(document).on('click', '#itemImageItemNumberSuggestionsList li', function(){
		$('#itemImageItemNumber').val($(this).text());
		$('#itemImageItemNumberSuggestionsList').fadeOut();
		getItemName('itemImageItemNumber', getItemNameFile, 'itemImageItemName');
	});
	
	// Clear the image from item tab when Clear button is clicked
	$('#itemClear').on('click', function(){
		$('#imageContainer').empty();
	});

	
	// Listen to CustomerID text box in customer details tab
	$('#customerDetailsCustomerID').keyup(function(){
		showSuggestions('customerDetailsCustomerID', showCustomerIDSuggestionsFile, 'customerDetailsCustomerIDSuggestionsDiv');
	});
	
	$(document).on('click', '#customerDetailsCustomerIDSuggestionsList li', function(){
		$('#customerDetailsCustomerID').val($(this).text());
		$('#customerDetailsCustomerIDSuggestionsList').fadeOut();
		getCustomerDetailsToPopulate();
	});

	
	$('#deploymentID').keyup(function(){
		showSuggestions('deploymentID', showVendorIDSuggestionsFile, 'vendorDetailsVendorIDSuggestionsDiv');
	});

	$(document).on('click', '#vendorDetailsVendorIDSuggestionsList li', function(){
		$('#deploymentID').val($(this).text());
		$('#deploymentID').fadeOut();
		getVendorDetailsToPopulate();
	});

	$('#serialEquimentNumber').keyup(function(){
		showSuggestions('serialEquimentNumber', showSaleIDSuggestionsFile, 'saleDetailsSaleIDSuggestionsDiv');
	});

	// Listen to image update button
	$('#updateImageButton').on('click', function(){
		processImage('imageForm', updateImageFile, 'itemImageMessage');
	});
	
	// Listen to image delete button
	$('#deleteImageButton').on('click', function(){
		processImage('imageForm', deleteImageFile, 'itemImageMessage');
	});
	
	// Initiate datepickers
	$('.datepicker').datepicker({
		format: 'yyyy-mm-dd',
		todayHighlight: true,
		todayBtn: 'linked',
		orientation: 'bottom center'
	});
	
	// Close any suggestions lists from the page when a user clicks on the page
	$(document).on('click', function(){
		$('.suggestionsList').fadeOut();
	});

	// Load searchable datatables for facility, purchase, item, vendor, deployment
	searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
	searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
	searchTableCreator('customerDetailsTableDiv', customerDetailsSearchTableCreatorFile, 'customerDetailsTable');
	searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
	searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
	
	// Load searchable datatables for facility, purchase, item, vendor, deployment reports
	reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
	reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
	reportsTableCreator('customerReportsTableDiv', customerReportsSearchTableCreatorFile, 'customerReportsTable');
	reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
	reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
	
	// Initiate popovers
	$(document).on('mouseover', '.itemDetailsHover', function(){
		// Create item details popover boxes
		$('.itemDetailsHover').popover({
			container: 'body',
			title: 'Equipment Details',
			trigger: 'hover',
			html: true,
			placement: 'right',
			content: fetchData
		});
	});
	
	// Listen to refresh buttons
	$('#searchTablesRefresh, #reportsTablesRefresh').on('click', function(){
		searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
		searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
		searchTableCreator('customerDetailsTableDiv', customerDetailsSearchTableCreatorFile, 'customerDetailsTable');
		searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
		searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
		
		reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
		reportsTableCreator('customerReportsTableDiv', customerReportsSearchTableCreatorFile, 'customerReportsTable');
		reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
		reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
	});
	
});


// Function to fetch data to show in popovers
function fetchData(){
	var fetch_data = '';
	var element = $(this);
	var id = element.attr('id');
	
	$.ajax({
		url: 'model/item/getItemDetailsForPopover.php',
		method: 'POST',
		async: false,
		data: {id:id},
		success: function(data){
			fetch_data = data;
		}
	});
	return fetch_data;
}

// Function to call the script that process imageURL in DB
function processImage(imageFormID, scriptPath, messageDivID){
	var form = $('#' + imageFormID)[0];
	var formData = new FormData(form);
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: formData,
		contentType: false,
		processData: false,
		success: function(data){
			$('#' + messageDivID).html(data);
		}
	});
}

// Function to create searchable datatables for facility, item, deployment
function searchTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		// Initiate the Datatable plugin once the table is added to the DOM
		$(tableID).DataTable();
	});
}

function reportsTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		// Initiate the Datatable plugin once the table is added to the DOM
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				'csv', 'excel',
				{extend: 'pdf', orientation: 'landscape', pageSize: 'LEGAL'},
				'print'
			]
		});
	});
}

function reportsPurchaseTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		// Initiate the Datatable plugin once the table is added to the DOM
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				{extend: 'csv', footer: true, title: 'HMIS Inventory System List of Facilies'},
				{extend: 'excel', footer: true, title: 'HMIS Inventory System List of Facilies'},
				{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'HMIS Inventory System List of Facilies'},
				{extend: 'print', footer: true, title: 'HMIS Inventory System List of Facilies'},
			],
			"footerCallback": function ( row, data, start, end, display ) {
				var api = this.api(), data;
	 
				// Remove the formatting to get integer data for summation
				var intVal = function ( i ) {
					return typeof i === 'string' ?
						i.replace(/[\$,]/g, '')*1 :
						typeof i === 'number' ?
							i : 0;
				};
	 
				// Quantity total over all pages
				quantityTotal = api
					.column( 6 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				// Quantity for current page
				quantityFilteredTotal = api
					.column( 6, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price total over all pages
				unitPriceTotal = api
					.column( 7 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price for current page
				unitPriceFilteredTotal = api
					.column( 7, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
					
				// Full price total over all pages
				fullPriceTotal = api
					.column( 8 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Full price for current page
				fullPriceFilteredTotal = api
					.column( 8, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
			}
		});
	});
}

function customersPurchaseTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		// Initiate the Datatable plugin once the table is added to the DOM
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				{extend: 'csv', footer: true, title: 'HMIS Inventory System List of Facilies'},
				{extend: 'excel', footer: true, title: 'HMIS Inventory System List of Facilies'},
				{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'HMIS Inventory System List of Facilies'},
				{extend: 'print', footer: true, title: 'HMIS Inventory System List of Facilies'},
			],
			"footerCallback": function ( row, data, start, end, display ) {
				var api = this.api(), data;
	 
				// Remove the formatting to get integer data for summation
				var intVal = function ( i ) {
					return typeof i === 'string' ?
						i.replace(/[\$,]/g, '')*1 :
						typeof i === 'number' ?
							i : 0;
				};
	 
				// Quantity total over all pages
				quantityTotal = api
					.column( 6 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				// Quantity for current page
				quantityFilteredTotal = api
					.column( 6, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price total over all pages
				unitPriceTotal = api
					.column( 7 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price for current page
				unitPriceFilteredTotal = api
					.column( 7, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
					
				// Full price total over all pages
				fullPriceTotal = api
					.column( 8 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Full price for current page
				fullPriceFilteredTotal = api
					.column( 8, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
			}
		});
	});
}

// Function to create reports datatables for deployment
function reportsSaleTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		// Initiate the Datatable plugin once the table is added to the DOM
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				{extend: 'csv', footer: true, title: 'HMIS Inventory System List of Deployed Inventory'},
				{extend: 'excel', footer: true, title: 'HMIS Inventory System List of Deployed Inventory'},
				{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'HMIS Inventory System List of Deployed Inventory'},
				{extend: 'print', footer: true, title: 'HMIS Inventory System List of Deployed Inventory'},
			],
			"footerCallback": function ( row, data, start, end, display ) {
				var api = this.api(), data;
	 
				// Remove the formatting to get integer data for summation
				var intVal = function ( i ) {
					return typeof i === 'string' ?
						i.replace(/[\$,]/g, '')*1 :
						typeof i === 'number' ?
							i : 0;
				};
	 
				// Quantity Total over all pages
				quantityTotal = api
					.column( 7 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				// Quantity Total over this page
				quantityFilteredTotal = api
					.column( 7, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price Total over all pages
				unitPriceTotal = api
					.column( 8 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price total over current page
				unitPriceFilteredTotal = api
					.column( 8, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
					
				// Full price Total over all pages
				fullPriceTotal = api
					.column( 9 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Full price total over current page
				fullPriceFilteredTotal = api
					.column( 9, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
			}
		});
	});
}


// Function to create filtered datatable for deployment details with total values
function filteredSaleReportTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;

	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
			// Initiate the Datatable plugin once the table is added to the DOM
			$(tableID).DataTable({
				dom: 'lBfrtip',
				buttons: [
					'copy',
					{extend: 'csv', footer: true, title: 'Health Management Info System Inventory (Deployed Inventory)'},
					{extend: 'excel', footer: true, title: 'Health Management Info System Inventory'},
					{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Health Management Info System Inventory (Deployed Inventory)'},
					{extend: 'print', footer: true, title: 'Health Management Info System Inventory (Deployed Inventory)'},
				],
				"footerCallback": function ( row, data, start, end, display ) {
					var api = this.api(), data;
		 
					// Remove the formatting to get integer data for summation
					var intVal = function ( i ) {
						return typeof i === 'string' ?
							i.replace(/[\$,]/g, '')*1 :
							typeof i === 'number' ?
								i : 0;
					};
		 
					// Total over all pages
					quantityTotal = api
						.column( 7 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					// Total over this page
					quantityFilteredTotal = api
						.column( 7, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Total over all pages
					unitPriceTotal = api
						.column( 8 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Quantity total
					unitPriceFilteredTotal = api
						.column( 8, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
						
					// Full total over all pages
					fullPriceTotal = api
						.column( 9 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Full total over current page
					fullPriceFilteredTotal = api
						.column( 9, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					}
				});
			});
		}		


// Function to call the insertVendor.php script to insert employee data to db
function addVendor() {
	var $facilityName = $('#vendorDetailsVendorFullName').val();
	var $person = $('#vendorDetailsVendorEmail').val();
	var $serialNumber = $('#vendorDetailsVendorMobile').val();
	var $equipment = $('#vendorDetailsVendorPhone2').val();
	var $employeeName = $('#vendorDetailsVendorAddress').val();
	var $building = $('#vendorDetailsVendorAddress2').val();
	var $date = $('#vendorDetailsVendorCity').val();
	var $roomtype = $('#vendorDetailsVendorDistrict option:selected').text();
	var vendorDetailsStatus = $('#vendorDetailsStatus option:selected').text();
	
	$.ajax({
		url: 'model/vendor/insertVendor.php',
		method: 'POST',
		data: {
			$facilityName:$facilityName,
			$person:$person,
			$serialNumber:$serialNumber,
			$equipment:$equipment,
			$employeeName:$employeeName,
			$building:$building,
			$date:$date,
			$roomtype:$roomtype,

		},
		success: function(data){
			$('#deploymentDetailsMessage').fadeIn();
			$('#deploymentDetailsMessage').html(data);
		},
		complete: function(data){
			populateLastInsertedID(vendorLastInsertedIDFile, 'deploymentID');
			searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
			reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
			$('#purchaseDetailsVendorName').load('model/vendor/getVendorNames.php');
		}
	});
}

// Function to call the insertItem.php script to insert item data to db
function addItem() {
	var itemDetailsItemNumber = $('#itemDetailsItemNumber').val();
	var itemDetailsItemName = $('#itemDetailsItemName').val();
	var itemDetailsDiscount = $('#itemDetailsDiscount').val();
	var itemDetailsQuantity = $('#itemDetailsQuantity').val();
	var itemDetailsUnitPrice = $('#itemDetailsUnitPrice').val();
	var itemDetailsStatus = $('#itemDetailsStatus').val();
	var itemDetailsDescription = $('#itemDetailsDescription').val();
	
	$.ajax({
		url: 'model/item/insertItem.php',
		method: 'POST',
		data: {
			itemDetailsItemNumber:itemDetailsItemNumber,
			itemDetailsItemName:itemDetailsItemName,
			itemDetailsDiscount:itemDetailsDiscount,
			itemDetailsQuantity:itemDetailsQuantity,
			itemDetailsUnitPrice:itemDetailsUnitPrice,
			itemDetailsStatus:itemDetailsStatus,
			itemDetailsDescription:itemDetailsDescription,
		},
		success: function(data){
			$('#itemDetailsMessage').fadeIn();
			$('#itemDetailsMessage').html(data);
		},
		complete: function(){
			populateLastInsertedID(itemLastInsertedIDFile, 'itemDetailsProductID');
			getItemStockToPopulate('itemDetailsItemNumber', getItemStockFile, itemDetailsTotalStock);
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		}
	});
}

// Function to send itemNumber so that item details can be pulled from db
// to be displayed on item details tab
function getItemDetailsToPopulate(){
	// Get the itemNumber entered in the text box
	var itemNumber = $('#itemDetailsItemNumber').val();
	var defaultImgUrl = 'data/item_images/imageNotAvailable.jpg';
	var defaultImageData = '<img class="img-fluid" src="data/item_images/imageNotAvailable.jpg">';
	// Call the populateItemDetails.php script to get item details
	// relevant to the itemNumber which the user entered
	$.ajax({
		url: 'model/item/populateItemDetails.php',
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			//$('#itemDetailsItemNumber').val(data.itemNumber);
			$('#itemDetailsProductID').val(data.productID);
			$('#itemDetailsItemName').val(data.itemName);
			$('#itemDetailsDiscount').val(data.discount);
			$('#itemDetailsTotalStock').val(data.stock);
			$('#itemDetailsUnitPrice').val(data.unitPrice);
			$('#itemDetailsDescription').val(data.description);
			$('#itemDetailsStatus').val(data.status).trigger("chosen:updated");
			newImgUrl = 'data/item_images/' + data.itemNumber + '/' + data.imageURL;
			// Set the item image
			if(data.imageURL == 'imageNotAvailable.jpg' || data.imageURL == ''){
				$('#imageContainer').html(defaultImageData);
			} else {
				$('#imageContainer').html('<img class="img-fluid" src="' + newImgUrl + '">');
			}
		}
	});
}

function getItemName(itemNumberTextBoxID, scriptPath, itemNameTextbox){
	// Get the itemNumber entered in the text box
	var itemNumber = $('#' + itemNumberTextBoxID).val();
	// Call the script to get item details
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#' + itemNameTextbox).val(data.itemName);
		},
		error: function (xhr, ajaxOptions, thrownError) {
      }
	});
}

function getItemStockToPopulate(itemNumberTextbox, scriptPath, stockTextbox){
	// Get the itemNumber entered in the text box
	var itemNumber = $('#' + itemNumberTextbox).val();	
	// Call the script to get stock details
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#' + stockTextbox).val(data.stock);
		},
		error: function (xhr, ajaxOptions, thrownError) {
        //alert(xhr.status);
        //alert(thrownError);
		//console.warn(xhr.responseText)
      }
	});
}

// Function to populate last inserted ID
function populateLastInsertedID(scriptPath, textBoxID){
	$.ajax({
		url: scriptPath,
		method: 'POST',
		dataType: 'json',
		success: function(data){
			$('#' + textBoxID).val(data);
		}
	});
}

// Function to show suggestions
function showSuggestions(textBoxID, scriptPath, suggestionsDivID){
	// Get the value entered by the user
	var textBoxValue = $('#' + textBoxID).val();
	
	if(textBoxValue != ''){
		$.ajax({
			url: scriptPath,
			method: 'POST',
			data: {textBoxValue:textBoxValue},
			success: function(data){
				$('#' + suggestionsDivID).fadeIn();
				$('#' + suggestionsDivID).html(data);
			}
		});
	}
}
function getCustomerDetailsToPopulate(){
	// Get the customerID entered in the text box
	var customerDetailsCustomerID = $('#customerDetailsCustomerID').val();
	
	$.ajax({
		url: 'model/customer/populateCustomerDetails.php',
		method: 'POST',
		data: {customerID:customerDetailsCustomerID},
		dataType: 'json',
		success: function(data){
			//$('#customerDetailsCustomerID').val(data.customerID);
			$('#customerDetailsCustomerFullName').val(data.fullName);
			$('#customerDetailsCustomerMobile').val(data.mobile);
			$('#customerDetailsCustomerPhone2').val(data.phone2);
			$('#customerDetailsCustomerEmail').val(data.email);
			$('#customerDetailsCustomerAddress').val(data.address);
			$('#customerDetailsCustomerAddress2').val(data.address2);
			$('#customerDetailsCustomerCity').val(data.city);
			$('#customerDetailsCustomerDistrict').val(data.district).trigger("chosen:updated");
			$('#customerDetailsStatus').val(data.status).trigger("chosen:updated");
		}
	});
}

function getCustomerDetailsToPopulateSaleTab(){
	// Get the customerID entered in the text box
	var customerDetailsCustomerID = $('#saleDetailsCustomerID').val();
	
	$.ajax({
		url: 'model/customer/populateCustomerDetails.php',
		method: 'POST',
		data: {vendorID:customerDetailsCustomerID},
		dataType: 'json',
		success: function(data){
			//$('#saleDetailsCustomerID').val(data.customerID);
			$('#saleDetailsCustomerName').val(data.fullName);
		}
	});
}

function getVendorDetailsToPopulate(){
	
	var vendorDetailsVendorID = $('#vendorDetailsVendorID').val();
	$.ajax({
		url: 'model/vendor/populateVendorDetails.php',
		method: 'POST',
		data: {vendorDetailsVendorID:vendorDetailsVendorID},
		dataType: 'json',
		success: function(data){
			//$('#vendorDetailsVendorID').val(data.vendorID);
			$('#vendorDetailsVendorFullName').val(data.fullName);
			$('#vendorDetailsVendorMobile').val(data.mobile);
			$('#vendorDetailsVendorEmail').val(data.email);
			$('#vendorDetailsVendorAddress').val(data.address);
			$('#vendorDetailsVendorCity').val(data.city);
			$('#vendorDetailsVendorDistrict').val(data.district).trigger("chosen:updated");
			$('#vendorDetailsStatus').val(data.status).trigger("chosen:updated");
		}
	});
}

// Function to send deployment_ID so that deployment details can be pulled from db
// to be displayed on deployment details tab
function getSaleDetailsToPopulate(){
	// Get the deployment_ID entered in the text box
	var saleDetailsSaleID = $('#saleDetailsSaleID').val();
	
	// Call the populateSaleDetails.php script to get item details
	// relevant to the itemNumber which the user entered
	$.ajax({
		url: 'model/sale/populateSaleDetails.php',
		method: 'POST',
		data: {saleDetailsSaleID:saleDetailsSaleID},
		dataType: 'json',
		success: function(data){
			$('#saleDetailsSaleID').val(data.deployment_ID);
			$('#saleDetailsItemNumber').val(data.itemNumber);
		///	$('#saleDetailsCustomerID').val(data.vendorID);
			$('#saleDetailsCustomerName').val(data.vendorName);
			$('#saleDetailsItemName').val(data.itemName);
			$('#saleDetailsSaleDate').val(data.saleDate);
			$('#saleDetailsDiscount').val(data.building);
			$('#saleDetailsQuantity').val(data.room);
			$('#saleDetailsUnitPrice').val(data.person);
		},
		complete: function(){
			calculateTotalInSaleTab();
			getItemStockToPopulate('saleDetailsItemNumber', getItemStockFile, 'saleDetailsTotalStock');
		}
	});
}

// Function to call the upateItemDetails.php script to UPDATE item data in db
function updateItem() {
	var itemDetailsItemNumber = $('#itemDetailsItemNumber').val();
	var itemDetailsItemName = $('#itemDetailsItemName').val();
	var itemDetailsDiscount = $('#itemDetailsDiscount').val();
	var itemDetailsQuantity = $('#itemDetailsQuantity').val();
	var itemDetailsUnitPrice = $('#itemDetailsUnitPrice').val();
	var itemDetailsStatus = $('#itemDetailsStatus').val();
	var itemDetailsDescription = $('#itemDetailsDescription').val();
	
	$.ajax({
		url: 'model/item/updateItemDetails.php',
		method: 'POST',
		data: {
			itemNumber:itemDetailsItemNumber,
			itemDetailsItemName:itemDetailsItemName,
			itemDetailsDiscount:itemDetailsDiscount,
			itemDetailsQuantity:itemDetailsQuantity,
			itemDetailsUnitPrice:itemDetailsUnitPrice,
			itemDetailsStatus:itemDetailsStatus,
			itemDetailsDescription:itemDetailsDescription,
		},
		success: function(data){
			var result = $.parseJSON(data);
			$('#itemDetailsMessage').fadeIn();
			$('#itemDetailsMessage').html(result.alertMessage);
			if(result.newStock != null){
				$('#itemDetailsTotalStock').val(result.newStock);
			}
		},
		complete: function(){
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');			
			searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
			searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
			reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
			reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
		}
	});
}

// Function to call the upateVendorDetails.php script to UPDATE vendor data in db
function updateVendor() {
	var vendorDetailsVendorID = $('#vendorDetailsVendorID').val();
	var vendorDetailsVendorFullName = $('#vendorDetailsVendorFullName').val();
	var vendorDetailsVendorMobile = $('#vendorDetailsVendorMobile').val();
	var vendorDetailsVendorPhone2 = $('#vendorDetailsVendorPhone2').val();
	var vendorDetailsVendorAddress = $('#vendorDetailsVendorAddress').val();
	var vendorDetailsVendorEmail = $('#vendorDetailsVendorEmail').val();
	var vendorDetailsVendorAddress2 = $('#vendorDetailsVendorAddress2').val();
	var vendorDetailsVendorCity = $('#vendorDetailsVendorCity').val();
	var vendorDetailsVendorDistrict = $('#vendorDetailsVendorDistrict').val();
	var vendorDetailsStatus = $('#vendorDetailsStatus option:selected').text();	
	$.ajax({
		url: 'model/vendor/updateVendorDetails.php',
		method: 'POST',
		data: {
			vendorDetailsVendorID:vendorDetailsVendorID,
			vendorDetailsVendorFullName:vendorDetailsVendorFullName,
			vendorDetailsVendorMobile:vendorDetailsVendorMobile,
			vendorDetailsVendorPhone2:vendorDetailsVendorPhone2,
			vendorDetailsVendorAddress:vendorDetailsVendorAddress,
			vendorDetailsVendorEmail:vendorDetailsVendorEmail,
			vendorDetailsVendorAddress2:vendorDetailsVendorAddress2,
			vendorDetailsVendorCity:vendorDetailsVendorCity,
			vendorDetailsVendorDistrict:vendorDetailsVendorDistrict,
			vendorDetailsStatus:vendorDetailsStatus,
		},
		success: function(data){
			$('#vendorDetailsMessage').fadeIn();
			$('#vendorDetailsMessage').html(data);
		},
		complete: function(){
			searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
			searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
			reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
			reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
		}
	});
}