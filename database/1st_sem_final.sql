-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2024 at 12:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `1st sem final`
--

CREATE TABLE `1st sem final` (
  `Exam RollNo` varchar(8) DEFAULT NULL,
  `Basic EngineeringDrawing` varchar(3) DEFAULT NULL,
  `Calculus I` varchar(3) DEFAULT NULL,
  `Digital Logic` varchar(3) DEFAULT NULL,
  `Discrete Structure` varchar(8) DEFAULT NULL,
  `Problem SolvingTechniques` varchar(3) DEFAULT NULL,
  `Programming in C` varchar(3) DEFAULT NULL,
  `ComputerWorkshop` varchar(2) DEFAULT NULL,
  `SGPA` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `1st sem final`
--

INSERT INTO `1st sem final` (`Exam RollNo`, `Basic EngineeringDrawing`, `Calculus I`, `Digital Logic`, `Discrete Structure`, `Problem SolvingTechniques`, `Programming in C`, `ComputerWorkshop`, `SGPA`) VALUES
('23180041', 'A-', 'C+', 'B+', 'B+', 'A-', 'B-', 'A', '3.1'),
('23180042', 'D+', 'Abs', 'Abs', 'F', 'Abs', 'Abs', 'B+', '-'),
('23180043', 'A-', 'C-', 'B-', 'B+', 'B+', 'A-', 'A', '3.0'),
('23180044', 'B', 'F', 'F', 'Expelled', 'F', 'B-', 'A', '-'),
('23180045', 'B', 'F', 'F', 'F', 'C', 'F', 'A', '-'),
('23180046', 'B+', 'C+', 'F', 'C+', 'B+', 'B-', 'A', '-'),
('23180047', 'B+', 'C', 'F', 'C+', 'B-', 'A-', 'A', '-'),
('23180049', 'A-', 'F', 'B-', 'C', 'B-', 'B+', 'A', '-'),
('23180050', 'B', 'F', 'C+', 'F', 'C', 'C+', 'A-', '-'),
('23180051', 'A-', 'A', 'A', 'A-', 'A', 'A', 'A', '3.9'),
('23180052', 'A', 'F', 'B', 'F', 'C+', 'F', 'A', '-'),
('23180053', 'B+', 'F', 'C', 'F', 'C', 'F', 'A', '-'),
('23180054', 'B-', 'C', 'C+', 'F', 'F', 'F', 'A', '-'),
('23180055', 'B+', 'F', 'F', 'F', 'C', 'F', 'A', '-'),
('23180056', 'A', 'A', 'A', 'A-', 'A-', 'A', 'A', '3.8'),
('23180057', 'B', 'F', 'F', 'F', 'F', 'F', 'A', '-'),
('23180058', 'A', 'F', 'C+', 'F', 'F', 'C', 'A', '-'),
('23180059', 'A', 'A', 'A', 'A-', 'B+', 'A', 'A', '3.8'),
('23180060', 'B', 'F', 'C+', 'F', 'B-', 'F', 'A', '-'),
('23180061', 'A', 'C', 'A-', 'B-', 'B-', 'B-', 'A', '2.9'),
('23180062', 'B', 'F', 'C', 'F', 'C+', 'F', 'A', '-'),
('23180063', 'B+', 'C', 'C', 'C', 'C', 'C+', 'A', '2.2'),
('23180064', 'A-', 'A', 'A-', 'B', 'A', 'A-', 'A', '3.7'),
('23180065', 'A', 'F', 'C', 'C+', 'B+', 'F', 'A', '-'),
('23180066', 'A-', 'F', 'B+', 'B-', 'B-', 'B+', 'A', '-'),
('23180067', 'B-', 'F', 'B+', 'B-', 'B-', 'C+', 'A', '-'),
('23180068', 'C', 'F', 'C+', 'C-', 'C', 'F', 'A', '-'),
('23180069', 'C-', 'F', 'F', 'C-', 'C', 'C', 'A', '-'),
('23180070', 'B-', 'F', 'F', 'F', 'C+', 'C+', 'A', '-'),
('23180071', 'A-', 'F', 'F', 'F', 'F', 'F', 'A', '-'),
('23180072', 'F', 'F', 'F', 'F', 'F', 'F', 'A', '-'),
('23180073', 'B-', 'F', 'F', 'F', 'F', 'F', 'A', '-'),
('23180074', 'A-', 'C-', 'B', 'B', 'C+', 'C+', 'A', '2.6'),
('23180075', 'F', 'F', 'F', 'F', 'F', 'F', 'A', '-'),
('23180076', 'B', 'F', 'F', 'F', 'F', 'C+', 'A', '-'),
('23180077', 'B', 'B', 'A-', 'B', 'B', 'B-', 'A', '3.1'),
('23180078', 'B+', 'B-', 'A-', 'B+', 'A-', 'B+', 'A', '3.3'),
('23180079', 'B-', 'F', 'F', 'C-', 'C+', 'F', 'A', ''),
('23180080', 'B', 'F', 'F', 'F', 'F', 'F', 'A', '-'),
('23180081', 'B', 'B-', 'B+', 'A', 'A-', 'A-', 'A', '3.4'),
('23180082', 'C-', 'C-', 'F', 'F', 'B', 'F', 'A', '-'),
('23180083', 'F', 'F', 'F', 'C-', 'F', 'F', 'A', '-'),
('23180084', 'F', 'F', 'F', 'F', 'C', 'C+', 'A', '-'),
('23180085', 'C-', 'F', 'C+', 'B', 'B', 'C+', 'A', '-'),
('23180086', 'A-', 'C+', 'B+', 'B-', 'B', 'A-', 'A', '3.1'),
('23180087', 'B', 'D+', 'F', 'F', 'B+', 'C+', 'A', '-'),
('23180088', 'A', 'C', 'F', 'B-', 'B', 'A', 'A', '-'),
('23180089', 'B+', 'C+', 'A-', 'A-', 'B+', 'B+', 'A', '3.3'),
('23180090', 'F', 'F', 'F', 'F', 'F', 'F', 'A', '-'),
('23180091', 'B-', 'C', 'B-', 'B-', 'C', 'B-', 'A', '2.5'),
('23180092', 'B', 'B-', 'C', 'B', 'C+', 'F', 'A', '-'),
('23180093', 'A-', 'B', 'B-', 'B', 'B-', 'F', 'A', '-'),
('23180094', 'F', 'F', 'F', 'F', 'F', 'F', 'A', '-');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
