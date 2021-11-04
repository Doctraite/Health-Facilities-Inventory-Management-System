<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	$customerDetailsSearchSql = 'SELECT * FROM facility';
	$customerDetailsSearchStatement = $conn->prepare($customerDetailsSearchSql);
	$customerDetailsSearchStatement->execute();

	$output = '<table id="customerDetailsTable" class="table table-sm table-striped table-bordered table-hover" style="width:100%">
				<thead>
					<tr>
						<th>Facility Code</th>
						<th>Name of Facility</th>
						<th>Facility Type</th>
					</tr>
				</thead>
				<tbody>';
	
	// Create table rows from the selected data
	while($row = $customerDetailsSearchStatement->fetch(PDO::FETCH_ASSOC)){
		$output .= '<tr>' .
						'<td>' . $row['facility_code'] . '</td>' .
						'<td>' . $row['facility_name'] . '</td>' .
						'<td>' . $row['facility_type'] . '</td>' .
					'</tr>';
	}
	
	$customerDetailsSearchStatement->closeCursor();
	
	$output .= '</tbody>
					<tfoot>
						<tr>
						</tr>
					</tfoot>
				</table>';
	echo $output;
?>