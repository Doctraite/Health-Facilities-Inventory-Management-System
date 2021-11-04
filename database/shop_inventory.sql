-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2021 at 09:37 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `deployment`
--

CREATE TABLE `deployment` (
  `deployment_ID` int(11) NOT NULL,
  `facility_name` varchar(255) NOT NULL,
  `itemNumber` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `saleDate` date NOT NULL,
  `building` varchar(100) NOT NULL,
  `room` varchar(100) NOT NULL,
  `person` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deployment`
--

INSERT INTO `deployment` (`deployment_ID`, `facility_name`, `itemNumber`, `fullName`, `description`, `saleDate`, `building`, `room`, `person`) VALUES
(8, 'Good Shepherd Public Health Centre', 'PC09XX5T', 'Zamokuhle Mhlanga', 'System Unit', '2021-09-06', 'VMMC Clinic', 'Ward Room 1', 'Marvis Dlamini'),
(9, 'Sithobela Rural Health Centre', 'PC09GGQ7', 'Zamokuhle Mhlanga', 'System Unit', '2021-09-01', 'Main Hospital Building', 'Reception Area', 'James Sihlongonyane'),
(10, 'Lomahasha Clinic', '604NTQDEF284', 'Ntsiki Dlamnini', 'Monitor', '2021-08-25', 'Main Clinic Building', 'Reception Area', 'Celumusa Shongwe');

-- --------------------------------------------------------

--
-- Table structure for table `facility`
--

CREATE TABLE `facility` (
  `facility_code` varchar(100) NOT NULL,
  `facility_name` varchar(100) NOT NULL,
  `facility_type` varchar(100) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `facility`
--

INSERT INTO `facility` (`facility_code`, `facility_name`, `facility_type`, `ID`) VALUES
('L001', 'Good Shepherd Hospital', 'Private Hospital', 0),
('L002', 'Good Shepherd Public Health Centre', 'Private Clinic', 0),
('L016', 'Sithobela Rural Health Centre', 'Public Hospital', 0),
('L028', 'Steki Nazarene Clinic', 'Nazarene Clinic', 0),
('L029', 'Shewula Nazarene Clinic', 'Nazarene Clinic', 0),
('L030', 'Ebenezer Clinic', 'Public Clinic', 0),
('L033', 'Lubuli Clinic', 'Public Clinic', 0),
('L037', 'Lomahasha Clinic', 'Public Hospital', 0),
('L040', 'Bholi Clinic', 'Public Hospital', 0),
('L045', 'Vuvulane Clinic', 'Public Clinic', 0),
('L054', 'Ndzevane Community Clinic', 'Public Clinic', 0),
('L075', 'Nkonjwa Clinic', 'Public Hospital', 0),
('L085', 'Nkalashane Community Clinic', 'Public Hospital', 0),
('L087', 'Tsambokhulu Clinic', 'Public Clinic', 0),
('L113', 'Hlane Clinic', 'Public Clinic', 0),
('L118', 'Gilgal Clinic', 'Public Clinic', 0),
('L135', 'Mananga Clinic', 'Public Hospital', 0),
('L140', 'Big Bend Prison Clinic', 'Correctional Clinic', 0),
('L152', 'Maloma Colliery Clinic', 'Private Clinic', 0),
('L156', 'Khuphuka Clinic', 'Public Clinic', 0),
('L182', 'Mambane Clinic', 'Public Clinic', 0);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `productID` int(11) NOT NULL,
  `itemNumber` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `cmis_code` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `imageURL` varchar(255) NOT NULL DEFAULT 'imageNotAvailable.jpg',
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`productID`, `itemNumber`, `itemName`, `cmis_code`, `stock`, `imageURL`, `status`, `description`) VALUES
(26, 'PC09XX5T', 'Lenovo', 'CMIS 110010', 1, '1626446761_Casino.png', 'Active', 'System Unit'),
(27, '605NTHMCY', 'LG', 'No CMIS code', 1, 'imageNotAvailable.jpg', 'Active', 'Monitor'),
(28, '198167', 'Lenovo', 'No CMIS code', 1, 'imageNotAvailable.jpg', 'Active', 'Keyboard'),
(29, 'PC09GGQ7', 'Lenovo', 'CMIS 110111', 1, 'imageNotAvailable.jpg', 'Active', 'System Unit'),
(30, '198661', 'Lenovo', 'No CMIS code', 1, 'imageNotAvailable.jpg', 'Active', 'Key Board'),
(31, '198230', 'Lenovo', 'No CMIS Code', 1, 'imageNotAvailable.jpg', 'Active', 'KeyBoard'),
(32, '5k802E2398B', 'Lenovo', 'No CMIS Code', 1, 'imageNotAvailable.jpg', 'Active', 'Mouse'),
(33, '604NTQDEF284', 'Lenovo', 'No CMIS Code', 1, '1630834886_Screenshot (6).png', 'Under Maintenance', 'Monitor'),
(34, 'PC09BBTX', 'Lenovo', 'CMIS 001101', 0, 'imageNotAvailable.jpg', 'Active', 'System Unit');

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `facility_name` varchar(255) NOT NULL,
  `deployment_ID` int(11) NOT NULL,
  `itemNumber` varchar(255) NOT NULL,
  `vendorID` int(11) NOT NULL,
  `vendorName` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `saleDate` date NOT NULL,
  `building` varchar(100) NOT NULL,
  `room` varchar(100) NOT NULL,
  `person` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `fullName`, `username`, `password`, `status`) VALUES
(8, 'Zamokuhle Mhlanga', 'administrator', '0192023a7bbd73250516f069df18b500', 'Active'),
(9, 'Ntsiki Dlamnini', 'Dlamini', '81dc9bdb52d04dc20036dbd8313ed055', 'Active'),
(10, 'Administrator', 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE `vendor` (
  `vendorID` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(30) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`vendorID`, `fullName`, `email`, `mobile`, `address`, `city`, `status`, `createdOn`) VALUES
(11, 'Nonsikelelo Dlamini', 'dlaminintsiki@gmail.com', 79335566, 'FEI Systems', 'Lubombo', 'Active', '2021-07-02 14:08:52'),
(12, 'Zamokuhle Mhlanga', 'mhlangazamokuhledoctor@gmail.com', 79353037, 'FEI Systems', 'Lubombo', 'Active', '2021-07-24 11:04:09'),
(13, 'Celumusa Gina', 'celmusagina@mail.com', 76232123, 'FEI Systems', 'Lubombo', 'Active', '2021-07-26 07:51:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `deployment`
--
ALTER TABLE `deployment`
  ADD PRIMARY KEY (`deployment_ID`),
  ADD UNIQUE KEY `itemNumber` (`itemNumber`);

--
-- Indexes for table `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`facility_code`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`deployment_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `vendor`
--
ALTER TABLE `vendor`
  ADD PRIMARY KEY (`vendorID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `deployment`
--
ALTER TABLE `deployment`
  MODIFY `deployment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `deployment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `vendorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
