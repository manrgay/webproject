-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for signup
CREATE DATABASE IF NOT EXISTS `signup` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `signup`;

-- Dumping structure for table signup.list
CREATE TABLE IF NOT EXISTS `list` (
  `nameveg` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `data` varchar(255) NOT NULL,
  `img` varchar(50) NOT NULL,
  `id_veg` int(50) NOT NULL,
  PRIMARY KEY (`id_veg`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table signup.list: ~0 rows (approximately)

-- Dumping structure for table signup.login
CREATE TABLE IF NOT EXISTS `login` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table signup.login: ~2 rows (approximately)
REPLACE INTO `login` (`id`, `name`, `lastname`, `email`, `username`, `password`) VALUES
	(13, 'armza', 'lnw', 'arm69@gmail.com', 'qw123', '4c9d4914f727114e49e936c86aba34ec'),
	(14, 'arm', 'sew', 'arm@gmail.com', 'qwe123', '200820e3227815ed1756a6b531e7e0d2'),
	(15, 'qwe', 'qweq', 'armwe@gmail.com', 'arm123', '11147e13fdcf6887968e9ed6f2d21e3b');

-- Dumping structure for table signup.money
CREATE TABLE IF NOT EXISTS `money` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table signup.money: ~2 rows (approximately)
REPLACE INTO `money` (`id`, `name`, `address`, `phone`, `pic`) VALUES
	(1, 'John Doe', 'asdad', '0983231212', NULL),
	(2, 'ponlawat', '1233', '0973159335', NULL);

-- Dumping structure for table signup.record
CREATE TABLE IF NOT EXISTS `record` (
  `nameveg` varchar(255) NOT NULL,
  `price` int(50) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table signup.record: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
