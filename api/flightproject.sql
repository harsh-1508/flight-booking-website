-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: flightproject
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `name` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('harsh','harsh@1508');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `airline`
--

DROP TABLE IF EXISTS `airline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airline` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `seat` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airline`
--

LOCK TABLES `airline` WRITE;
/*!40000 ALTER TABLE `airline` DISABLE KEYS */;
INSERT INTO `airline` VALUES (101,'indigo',180),(102,'AirIndia',220),(103,'SpiceJet',160),(104,'Delta Air Line',132),(105,'GoFirst',120),(106,'AmericaAirLine',190);
/*!40000 ALTER TABLE `airline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
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
  KEY `userid` (`userid`),
  CONSTRAINT `fid` FOREIGN KEY (`fid`) REFERENCES `flight` (`fid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `registration` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (107,'vidhi',104,2,'Business',20000,14000,'Approve'),(109,'tejal',203,3,'Economy',60000,52500,'Approve'),(122,'vidhi',302,1,'Economy',60000,55000,'Approve'),(126,'Shubham ',102,1,'Business',16000,8000,'Approve'),(127,'tejal',501,1,'Economy',120000,100000,'Approve'),(131,'baldev',101,2,'Business',12000,6000,NULL),(135,'harsh',100,2,'Business',18000,11000,'Approve');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight` (
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
  KEY `airlineid` (`airlineid`),
  CONSTRAINT `airlineid` FOREIGN KEY (`airlineid`) REFERENCES `airline` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (100,105,'GF5654','2025-02-12','2025-02-15','Chennai','Mumbai',7500,4500,9000,5500,48,'Arrived'),(101,105,'GF5654','2025-02-28','0000-00-00','NewDelhi','Mumbai',4000,2000,6000,3000,37,NULL),(102,102,'AI1023','2025-02-25','2025-04-13','NewDelhi','Chennai',10000,5000,16000,8000,42,NULL),(103,101,'IG1212','2025-02-25','0000-00-00','Mumbai','NewDelhi',3500,2000,4000,2500,49,NULL),(104,101,'IG2425','2025-02-25','2025-04-09','Mumbai','Chennai',8000,5000,10000,7000,66,NULL),(201,104,'DA7295','2025-02-25','2025-04-19','NewDelhi','Dubai',30000,26000,35000,30000,80,NULL),(202,103,'SJ3587','2025-02-25','0000-00-00','Mumbai','Dubai',15000,5000,17000,6000,80,NULL),(203,101,'IG1212','2025-02-25','0000-00-00','Chennai','Dubai',20000,17500,21000,18000,67,NULL),(301,102,'AI4580','2025-02-25','2025-04-18','NewDelhi','London',100000,60000,120000,65000,60,NULL),(302,101,'IG2425','2025-02-25','0000-00-00','Mumbai','London',60000,55000,72000,57000,69,NULL),(401,102,'AI1023','2025-02-25','2025-04-29','NewDelhi','Toronto',150000,125000,180000,165000,50,NULL),(402,104,'DA8574','2025-02-25','0000-00-00','Mumbai','Toronto',120000,100000,130000,105000,80,NULL),(501,104,'DA7295','2025-02-25','0000-00-00','Mumbai','Ottawa',120000,100000,130000,105000,78,NULL),(601,103,'SJ8574','2025-02-25','0000-00-00','NewDelhi','Denver',150000,130000,160000,135000,90,NULL),(602,106,'AL1067','2025-02-25','0000-00-00','Mumbai','Denver',145000,135000,150000,145000,100,NULL),(701,105,'GF2583','2025-02-25','0000-00-00','Chennai','SanFrancisco',150000,140000,165000,152000,100,NULL),(702,102,'AI4580','2025-02-25','0000-00-00','Mumbai','SanFrancisco',155000,135000,165000,152000,60,NULL),(801,106,'AL1875','2025-02-25','0000-00-00','NewDelhi','Washington',187000,165000,200000,172000,100,NULL),(802,106,'AL1067','2025-02-27','0000-00-00','Mumbai','Washington',135000,115000,150000,130000,100,NULL);
/*!40000 ALTER TABLE `flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight_mst`
--

DROP TABLE IF EXISTS `flight_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight_mst` (
  `planeid` int NOT NULL,
  `flightname` varchar(30) NOT NULL,
  `airlineid` int NOT NULL,
  `seat` int NOT NULL,
  PRIMARY KEY (`planeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight_mst`
--

LOCK TABLES `flight_mst` WRITE;
/*!40000 ALTER TABLE `flight_mst` DISABLE KEYS */;
INSERT INTO `flight_mst` VALUES (101,'IG1212',101,50),(102,'IG2425',101,70),(201,'AI1023',102,50),(202,'AI4580',102,60),(301,'SJ3587',103,80),(302,'SJ8574',103,90),(401,'DA7295',104,80),(402,'DA8574',104,80),(501,'GF5654',105,50),(502,'GF2583',105,100),(601,'AL1067',106,100),(602,'AL1875',106,50);
/*!40000 ALTER TABLE `flight_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passenger`
--

DROP TABLE IF EXISTS `passenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passenger` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(30) NOT NULL,
  `fid` int NOT NULL,
  `passangername` varchar(30) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `age` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `flightid` (`fid`),
  KEY `userid` (`userid`),
  CONSTRAINT `flightid` FOREIGN KEY (`fid`) REFERENCES `flight` (`fid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uid` FOREIGN KEY (`userid`) REFERENCES `registration` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passenger`
--

LOCK TABLES `passenger` WRITE;
/*!40000 ALTER TABLE `passenger` DISABLE KEYS */;
INSERT INTO `passenger` VALUES (197,'vidhi',104,'vidhi','Female','adult',10000),(198,'vidhi',104,'neha','Female','adult',10000),(200,'tejal',203,'tejal','Female','adult',20000),(201,'tejal',203,'bipasha','Female','adult',20000),(204,'tejal',203,'rutu','Female','adult',20000),(217,'vidhi',302,'vidhi','Female','adult',60000),(222,'harsh',101,'harsh','Male','adult',6000),(223,'harsh',101,'kelvina','Female','adult',6000),(225,'Shubham ',102,'shubham','Male','adult',16000),(226,'tejal',501,'tejal','Female','adult',120000),(230,'harsh',102,'ansh','Male','adult',16000),(231,'harsh',102,'vidhi','Female','adult',16000),(232,'baldev',101,'baldev','Male','adult',6000),(233,'baldev',101,'neha','Female','adult',6000),(243,'harsh',100,'harsh','Male','adult',9000),(244,'harsh',100,'NISTHA','Female','adult',9000);
/*!40000 ALTER TABLE `passenger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `userid` varchar(30) NOT NULL,
  `cardno` varchar(16) NOT NULL,
  `cardholdername` varchar(30) NOT NULL,
  `cvv` int NOT NULL,
  `expdate` varchar(30) NOT NULL,
  `amount` int NOT NULL,
  `fid` int NOT NULL,
  KEY `userid` (`userid`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `registration` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES ('tejal','7845120365892354','tejal m',333,'2024-10',60000,203),('vidhi','8512457898562345','vidhi',154,'2024-07',20000,104),('vidhi','7845124578457878','vidhi',547,'2024-12',60000,302),('Shubham ','7845781245784512','Shubham ',123,'2024-12',16000,102),('tejal','7845124578451245','tejal',454,'2024-04',120000,501),('baldev','7845124578451245','baldev',252,'2024-12',12000,101),('harsh','8585858545454545','harsh',225,'2025-07',18000,100);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `userid` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `mobileno` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES ('baldev','1234','917383468576','m.baldev2003@gmail.com'),('harsh','harsh@123','919727346516','harshpatel150804@gmail.com'),('kush','1234','919925136671','kushbpatel02@gmail.com'),('naman','123','918585858585','naman2103@gmail.com'),('Shubham ','shubham@123','919537679416','dalbeherashubham@gmail.com'),('tejal','tejal@123','918238226677','tejalmahida9@gmail.com'),('vidhi','vidhi@123','919664616412','vmpatel2712@gmail.com');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fid` varchar(30) NOT NULL,
  `userid` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `seat_number` varchar(10) NOT NULL,
  `occupied` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
INSERT INTO `seats` VALUES (1,'100','','A1',0),(3,'100','','A2',0),(4,'100','','A3',0),(5,'100','','B1',0),(6,'100','','B2',0),(7,'100','','B3',0),(11,'100','','C1',0),(12,'100','harsh','C2',1),(13,'100','harsh','C3',1),(41,'101','','A1',0),(42,'101','baldev','A2',1),(43,'101','baldev','A3',1),(44,'101','','B1',0),(45,'101','','B2',0),(46,'101','','B3',0),(49,'101','','C1',0),(50,'101','','C2',0),(51,'101','','C3',0),(52,'102','','A1',0),(53,'102','Shubham ','A2',1),(55,'102','','A3',0),(56,'102','','B1',0),(58,'102','','B2',0),(59,'102','','B3',0),(60,'102','','C1',0),(61,'102','','C2',0),(62,'102','','C3',0),(63,'103','','A1',0),(64,'103','','A2',0),(65,'103','','A3',0),(66,'103','','B1',0),(67,'103','','B2',0),(68,'103','','B3',0),(69,'103','','C1',0),(70,'103','','C2',0),(71,'103','','C3',0),(72,'104','vidhi','A1',1),(73,'104','vidhi','A2',1),(74,'104','','A3',0),(75,'104','','B1',0),(76,'104','','B2',0),(77,'104','','B3',0),(78,'104','','C1',0),(79,'104','','C2',0),(80,'104','','C3',0),(81,'105','','A1',0),(82,'105','','A2',0),(83,'105','','A3',0),(84,'105','','B1',0),(85,'105','','B2',0),(86,'105','','B3',0),(87,'105','','C1',0),(88,'105','','C2',0),(89,'105','','C3',0);
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-12 18:33:24
