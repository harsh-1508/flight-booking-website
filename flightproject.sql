-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 06, 2024 at 05:50 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flightproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `name` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`name`, `password`) VALUES
('harsh', 'harsh@1508');

-- --------------------------------------------------------

--
-- Table structure for table `airline`
--

DROP TABLE IF EXISTS `airline`;
CREATE TABLE IF NOT EXISTS `airline` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `seat` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `airline`
--

INSERT INTO `airline` (`id`, `name`, `seat`) VALUES
(101, 'indigo', 180),
(102, 'AirIndia', 220),
(103, 'SpiceJet', 160),
(104, 'Delta Air Line', 132),
(105, 'GoFirst', 120),
(106, 'AmericaAirLine', 190);

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `bookingid` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(30) NOT NULL,
  `fid` int NOT NULL,
  `passanger` int NOT NULL,
  `class` varchar(30) NOT NULL,
  `price` int NOT NULL,
  `cost` int NOT NULL,
  `action` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`bookingid`),
  KEY `fid` (`fid`),
  KEY `userid` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`bookingid`, `userid`, `fid`, `passanger`, `class`, `price`, `cost`, `action`) VALUES
(107, 'vidhi', 104, 2, 'Business', 20000, 14000, 'Approve'),
(109, 'tejal', 203, 3, 'Economy', 60000, 52500, 'Approve'),
(122, 'vidhi', 302, 1, 'Economy', 60000, 55000, 'Approve'),
(123, 'baldev', 101, 2, 'Business', 12000, 6000, NULL),
(124, 'harsh', 101, 2, 'Business', 12000, 6000, 'Approve'),
(126, 'Shubham ', 102, 1, 'Business', 16000, 8000, 'Approve'),
(127, 'tejal', 501, 1, 'Economy', 120000, 100000, 'Approve');

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
CREATE TABLE IF NOT EXISTS `flight` (
  `fid` int NOT NULL,
  `airlineid` int NOT NULL,
  `fname` varchar(50) NOT NULL,
  `depart` date NOT NULL,
  `return` date DEFAULT NULL,
  `departure` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `arrival` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `eprice` int NOT NULL,
  `ecost` int NOT NULL,
  `bprice` int NOT NULL,
  `bcost` int NOT NULL,
  `seat` int NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`fid`),
  KEY `airlineid` (`airlineid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`fid`, `airlineid`, `fname`, `depart`, `return`, `departure`, `arrival`, `eprice`, `ecost`, `bprice`, `bcost`, `seat`, `status`) VALUES
(101, 105, 'GF5654', '2024-04-08', '0000-00-00', 'NewDelhi', 'Mumbai', 4000, 2000, 6000, 3000, 41, NULL),
(102, 102, 'AI1023', '2024-04-09', '2024-04-13', 'NewDelhi', 'Chennai', 10000, 5000, 16000, 8000, 48, NULL),
(103, 101, 'IG1212', '2024-04-09', '0000-00-00', 'Mumbai', 'NewDelhi', 3500, 2000, 4000, 2500, 50, NULL),
(104, 101, 'IG2425', '2024-04-08', '2024-04-09', 'Mumbai', 'Chennai', 8000, 5000, 10000, 7000, 66, NULL),
(201, 104, 'DA7295', '2024-04-08', '2024-04-19', 'NewDelhi', 'Dubai', 30000, 26000, 35000, 30000, 80, NULL),
(202, 103, 'SJ3587', '2024-04-08', '0000-00-00', 'Mumbai', 'Dubai', 15000, 5000, 17000, 6000, 80, NULL),
(203, 101, 'IG1212', '2024-04-10', '0000-00-00', 'Chennai', 'Dubai', 20000, 17500, 21000, 18000, 67, NULL),
(301, 102, 'AI4580', '2024-04-08', '2024-04-18', 'NewDelhi', 'London', 100000, 60000, 120000, 65000, 60, NULL),
(302, 101, 'IG2425', '2024-04-08', '0000-00-00', 'Mumbai', 'London', 60000, 55000, 72000, 57000, 69, NULL),
(401, 102, 'AI1023', '2024-04-16', '2024-04-29', 'NewDelhi', 'Toronto', 150000, 125000, 180000, 165000, 50, NULL),
(402, 104, 'DA8574', '2024-04-09', '0000-00-00', 'Mumbai', 'Toronto', 120000, 100000, 130000, 105000, 80, NULL),
(501, 104, 'DA7295', '2024-04-08', '0000-00-00', 'Mumbai', 'Ottawa', 120000, 100000, 130000, 105000, 78, NULL),
(601, 103, 'SJ8574', '2024-04-09', '0000-00-00', 'NewDelhi', 'Denver', 150000, 130000, 160000, 135000, 90, NULL),
(602, 106, 'AL1067', '2024-04-10', '0000-00-00', 'Mumbai', 'Denver', 145000, 135000, 150000, 145000, 100, NULL),
(701, 105, 'GF2583', '2024-04-08', '0000-00-00', 'Chennai', 'SanFrancisco', 150000, 140000, 165000, 152000, 100, NULL),
(702, 102, 'AI4580', '2024-04-09', '0000-00-00', 'Mumbai', 'SanFrancisco', 155000, 135000, 165000, 152000, 60, NULL),
(801, 106, 'AL1875', '2024-04-08', '0000-00-00', 'NewDelhi', 'Washington', 187000, 165000, 200000, 172000, 100, NULL),
(802, 106, 'AL1067', '2024-04-19', '0000-00-00', 'Mumbai', 'Washington', 135000, 115000, 150000, 130000, 100, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `flight_mst`
--

DROP TABLE IF EXISTS `flight_mst`;
CREATE TABLE IF NOT EXISTS `flight_mst` (
  `planeid` int NOT NULL,
  `flightname` varchar(30) NOT NULL,
  `airlineid` int NOT NULL,
  `seat` int NOT NULL,
  PRIMARY KEY (`planeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `flight_mst`
--

INSERT INTO `flight_mst` (`planeid`, `flightname`, `airlineid`, `seat`) VALUES
(101, 'IG1212', 101, 50),
(102, 'IG2425', 101, 70),
(201, 'AI1023', 102, 50),
(202, 'AI4580', 102, 60),
(301, 'SJ3587', 103, 80),
(302, 'SJ8574', 103, 90),
(401, 'DA7295', 104, 80),
(402, 'DA8574', 104, 80),
(501, 'GF5654', 105, 50),
(502, 'GF2583', 105, 100),
(601, 'AL1067', 106, 100),
(602, 'AL1875', 106, 50);

-- --------------------------------------------------------

--
-- Table structure for table `passenger`
--

DROP TABLE IF EXISTS `passenger`;
CREATE TABLE IF NOT EXISTS `passenger` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(30) NOT NULL,
  `fid` int NOT NULL,
  `passangername` varchar(30) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `age` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `flightid` (`fid`),
  KEY `userid` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=227 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `passenger`
--

INSERT INTO `passenger` (`id`, `userid`, `fid`, `passangername`, `gender`, `age`, `price`) VALUES
(197, 'vidhi', 104, 'vidhi', 'Female', 'adult', 10000),
(198, 'vidhi', 104, 'neha', 'Female', 'adult', 10000),
(200, 'tejal', 203, 'tejal', 'Female', 'adult', 20000),
(201, 'tejal', 203, 'bipasha', 'Female', 'adult', 20000),
(204, 'tejal', 203, 'rutu', 'Female', 'adult', 20000),
(217, 'vidhi', 302, 'vidhi', 'Female', 'adult', 60000),
(220, 'baldev', 101, 'ansh', 'Male', 'adult', 6000),
(221, 'baldev', 101, 'baldev', 'Male', 'adult', 6000),
(222, 'harsh', 101, 'harsh', 'Male', 'adult', 6000),
(223, 'harsh', 101, 'kelvina', 'Female', 'adult', 6000),
(225, 'Shubham ', 102, 'shubham', 'Male', 'adult', 16000),
(226, 'tejal', 501, 'tejal', 'Female', 'adult', 120000);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `userid` varchar(30) NOT NULL,
  `cardno` varchar(16) NOT NULL,
  `cardholdername` varchar(30) NOT NULL,
  `cvv` int NOT NULL,
  `expdate` varchar(30) NOT NULL,
  `amount` int NOT NULL,
  `fid` int NOT NULL,
  KEY `userid` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`userid`, `cardno`, `cardholdername`, `cvv`, `expdate`, `amount`, `fid`) VALUES
('tejal', '7845120365892354', 'tejal m', 333, '2024-10', 60000, 203),
('vidhi', '8512457898562345', 'vidhi', 154, '2024-07', 20000, 104),
('vidhi', '7845124578457878', 'vidhi', 547, '2024-12', 60000, 302),
('baldev', '4578125689745124', 'baldev', 124, '2024-12', 12000, 101),
('harsh', '8457987454789564', 'harsh', 854, '2024-11', 12000, 101),
('Shubham ', '7845781245784512', 'Shubham ', 123, '2024-12', 16000, 102),
('tejal', '7845124578451245', 'tejal', 454, '2024-04', 120000, 501);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
CREATE TABLE IF NOT EXISTS `registration` (
  `userid` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `mobileno` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`userid`, `password`, `mobileno`, `email`) VALUES
('baldev', 'baldev@123', '917383468576', 'm.baldev2003@gmail.com'),
('harsh', 'harsh@123', '919727346516', 'harshpatel150804@gmail.com'),
('kelvin', '1234', '91972734651', 'kelvina12@gmail.com'),
('Shubham ', 'shubham@123', '919537679416', 'dalbeherashubham@gmail.com'),
('tejal', 'tejal@123', '918238226677', 'tejalmahida9@gmail.com'),
('vidhi', 'vidhi@123', '919664616412', 'vmpatel2712@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
CREATE TABLE IF NOT EXISTS `seats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fid` varchar(30) NOT NULL,
  `userid` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `seat_number` varchar(10) NOT NULL,
  `occupied` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `fid`, `userid`, `seat_number`, `occupied`) VALUES
(41, '101', '', 'A1', 0),
(42, '101', 'baldev', 'A2', 1),
(43, '101', '', 'A3', 0),
(44, '101', '', 'B1', 0),
(45, '101', 'baldev', 'B2', 1),
(46, '101', '', 'B3', 0),
(47, '101', 'harsh', 'C1', 1),
(48, '101', 'harsh', 'C2', 1),
(49, '101', '', 'C3', 0),
(50, '102', '', 'A1', 0),
(51, '102', 'Shubham ', 'A2', 1),
(52, '102', '', 'A3', 0),
(53, '102', '', 'B1', 0),
(54, '102', '', 'B2', 0),
(55, '102', '', 'B3', 0),
(56, '102', '', 'C1', 0),
(57, '102', '', 'C2', 0),
(58, '102', '', 'C3', 0),
(59, '103', '', 'A1', 0),
(60, '103', '', 'A2', 0),
(61, '103', '', 'A3', 0),
(62, '103', '', 'B1', 0),
(63, '103', '', 'B2', 0),
(64, '103', '', 'B3', 0),
(65, '103', '', 'C1', 0),
(66, '103', '', 'C2', 0),
(67, '103', '', 'C3', 0),
(68, '104', 'vidhi', 'A1', 1),
(69, '104', 'vidhi', 'A2', 1),
(70, '104', '', 'A3', 0),
(71, '104', '', 'B1', 0),
(72, '104', '', 'B2', 0),
(73, '104', '', 'B3', 0),
(74, '104', '', 'C1', 0),
(75, '104', '', 'C2', 0),
(76, '104', '', 'C3', 0),
(77, '105', '', 'A1', 0),
(78, '105', '', 'A2', 0),
(79, '105', '', 'A3', 0),
(80, '105', '', 'B1', 0),
(81, '105', '', 'B2', 0),
(82, '105', '', 'B3', 0),
(83, '105', '', 'C1', 0),
(84, '105', '', 'C2', 0),
(85, '105', '', 'C3', 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `fid` FOREIGN KEY (`fid`) REFERENCES `flight` (`fid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `registration` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `airlineid` FOREIGN KEY (`airlineid`) REFERENCES `airline` (`id`);

--
-- Constraints for table `passenger`
--
ALTER TABLE `passenger`
  ADD CONSTRAINT `flightid` FOREIGN KEY (`fid`) REFERENCES `flight` (`fid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `uid` FOREIGN KEY (`userid`) REFERENCES `registration` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `registration` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
