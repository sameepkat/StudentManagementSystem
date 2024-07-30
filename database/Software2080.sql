-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 28, 2024 at 01:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE DATABASE IF NOT EXISTS `Software2080` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Software2080`;

-- --------------------------------------------------------

--
-- Table structure for table `adminLogin`
--

CREATE TABLE `adminLogin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminLogin`
--

INSERT INTO `adminLogin` (`username`, `password`, `name`) VALUES
('aneal', 'aneal123', 'Anil Pariyar'),
('Bipana', 'Bipana_ale', 'Bipana Ale'),
('grishrana', 'grishrana', 'Grish Rana'),
('sameep', 'qwertyuiop', 'Sameep Kathayat'),
('suchita', 'suchita321', 'Suchita Baral');

-- --------------------------------------------------------

--
-- Table structure for table `FinalResult1stSem`
--

CREATE TABLE `FinalResult1stSem` (
  `RollNo` int(11) NOT NULL,
  `ExamRollNo` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Basic_Eng_Drawing` varchar(2) NOT NULL,
  `Calculus_I` varchar(2) NOT NULL,
  `Digital_Logic` varchar(2) NOT NULL,
  `Discrete_Struct` varchar(2) NOT NULL,
  `PST` varchar(2) NOT NULL,
  `Prog_C` varchar(2) NOT NULL,
  `Comp_Workshop` varchar(2) NOT NULL,
  `SGPA` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `FinalResult1stSem`
--

INSERT INTO `FinalResult1stSem` (`RollNo`, `ExamRollNo`, `Name`, `Basic_Eng_Drawing`, `Calculus_I`, `Digital_Logic`, `Discrete_Struct`, `PST`, `Prog_C`, `Comp_Workshop`, `SGPA`) VALUES
(1, 23180049, 'Abik Paudel', 'A-', 'F', 'B-', 'C', 'B-', 'B+', 'A', NULL),
(3, 23180050, 'Anil Pariyar', 'B', 'F', 'C+', 'F', 'C', 'C+', 'A-', NULL),
(4, 23180051, 'Ansarul Haq', 'A-', 'A', 'A', 'A-', 'A', 'A', 'A', 3.93),
(5, 23180052, 'Apekchha Poudel', 'A', 'F', 'B', 'F', 'C+', 'F', 'A', NULL),
(6, 23180053, 'Ashish Baral', 'B+', 'F', 'C', 'F', 'C', 'F', 'A', NULL),
(7, 23180054, 'Ashok Bohara', 'B-', 'C', 'C+', 'F', 'F', 'F', 'A', NULL),
(8, 23180055, 'Avishek Paudel', 'B+', 'F', 'F', 'F', 'C', 'F', 'A', NULL),
(9, 23180056, 'Ayush Acharya', 'A', 'A', 'A', 'A-', 'A-', 'A', 'A', 3.89),
(10, 23180057, 'Babin Tiwari', 'B', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(11, 23180058, 'Bibek Thapa', 'A', 'F', 'C+', 'F', 'F', 'C', 'A', NULL),
(12, 23180059, 'Bimal Dhungana', 'A', 'A', 'A', 'A-', 'B+', 'A', 'A', 3.82),
(13, 23180060, 'Bipana Ale', 'B', 'F', 'C+', 'F', 'B-', 'F', 'A', NULL),
(14, 23180061, 'Dipti Poudel', 'A', 'C', 'A-', 'B-', 'B-', 'B-', 'A', 2.91),
(15, 23180062, 'Diya Bhujel', 'B', 'F', 'C', 'F', 'C+', 'F', 'A', NULL),
(16, 23180063, 'Erik Timilsina', 'B+', 'C', 'C', 'C', 'C', 'C+', 'A', 2.25),
(17, 23180064, 'Grish Rana', 'A-', 'A', 'A-', 'B', 'A', 'A-', 'A', 3.70),
(18, 23180065, 'Koshis Ranabhat', 'A', 'F', 'C', 'C+', 'B+', 'F', 'A', NULL),
(19, 23180066, 'Manish Acharya', 'A-', 'F', 'B+', 'B-', 'B-', 'B+', 'A', NULL),
(20, 23180067, 'Nimesh Giri', 'B-', 'F', 'B+', 'B-', 'B-', 'C+', 'A', NULL),
(21, 23180068, 'Nirdosh Regami Magar', 'C', 'F', 'C+', 'C-', 'C', 'F', 'A', NULL),
(22, 23180094, 'Nishant Kumar Yadav', 'F', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(23, 23180069, 'Prabesh Khati', 'C-', 'F', 'F', 'C-', 'C', 'C', 'A', NULL),
(24, 23180070, 'Prabhat Mani Paudel', 'B-', 'F', 'F', 'F', 'C+', 'C+', 'A', NULL),
(25, 23180071, 'Pradip Thapa', 'A-', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(26, 23180072, 'Prakriti Adhikari', 'F', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(27, 23180073, 'Prastut Lamsal', 'B-', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(28, 23180074, 'Pratik Thapa', 'A-', 'C-', 'B', 'B', 'C+', 'C+', 'A', 2.62),
(29, 23180075, 'Prisha Chaulagain', 'F', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(30, 23180076, 'Raju Sarki', 'B', 'F', 'F', 'F', 'F', 'C+', 'A', NULL),
(32, 23180077, 'Rohan Dhakal', 'B', 'B', 'A-', 'B', 'B', 'B-', 'A', 3.13),
(33, 23180078, 'Rojina Tiwari', 'B+', 'B-', 'A-', 'B+', 'A-', 'B+', 'A', 3.38),
(34, 23180079, 'Roshan Thapa Chhetri', 'B-', 'F', 'F', 'C-', 'C+', 'F', 'A', NULL),
(35, 23180080, 'Sabin Tiwari', 'B', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(36, 23180081, 'Sameep Kathayat', 'B', 'B-', 'B+', 'A', 'A-', 'A-', 'A', 3.48),
(37, 23180082, 'Sanjana Neupane', 'C-', 'C-', 'F', 'F', 'B', 'F', 'A', NULL),
(38, 23180083, 'Shashwat Paudel', 'F', 'F', 'F', 'C-', 'F', 'F', 'A', NULL),
(39, 23180084, 'Saurav Raj Dhakal', 'F', 'F', 'F', 'F', 'C', 'C+', 'A', NULL),
(40, 23180085, 'Shreya Subedi', 'C-', 'F', 'C+', 'B', 'B', 'C+', 'A', NULL),
(41, 23180086, 'Siddhant Neupane', 'A-', 'C+', 'B+', 'B-', 'B', 'A-', 'A', 3.10),
(42, 23180087, 'Smriti Pandeya', 'B', 'D+', 'F', 'F', 'B+', 'C+', 'A', NULL),
(43, 23180088, 'Sneha Adhikari', 'A', 'C', 'F', 'B-', 'B', 'A', 'A', NULL),
(44, 23180089, 'Suchita Baral', 'B+', 'C+', 'A-', 'A-', 'B+', 'B+', 'A', 3.31),
(45, 23180090, 'Sujal Neupane', 'F', 'F', 'F', 'F', 'F', 'F', 'A', NULL),
(46, 23180091, 'Sushant Poudel', 'B-', 'C', 'B-', 'B-', 'C', 'B-', 'A', 2.53),
(47, 23180092, 'Sushant Thapa', 'B', 'B-', 'C', 'B', 'C+', 'F', 'A', NULL),
(48, 23180093, 'Ujjwal Pahari', 'A-', 'B', 'B-', 'B', 'B-', 'F', 'A', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `InternalResult1stSem`
--

CREATE TABLE `InternalResult1stSem` (
  `RollNo` int(11) NOT NULL,
  `ExamRollNo` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `PuRegNo` varchar(20) NOT NULL,
  `Basic_Eng_Drawing` int(11) NOT NULL,
  `Calculus_I` int(11) NOT NULL,
  `Digital_Logic` int(11) NOT NULL,
  `Discrete_Struct` int(11) NOT NULL,
  `PST` int(11) NOT NULL,
  `Prog_C` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `InternalResult1stSem`
--

INSERT INTO `InternalResult1stSem` (`RollNo`, `ExamRollNo`, `Name`, `PuRegNo`, `Basic_Eng_Drawing`, `Calculus_I`, `Digital_Logic`, `Discrete_Struct`, `PST`, `Prog_C`) VALUES
(1, 23180049, 'Abik Paudel', '2023-1-18-0001', 47, 31, 40, 34, 46, 43),
(3, 23180050, 'Anil Pariyar', '2023-1-18-0003', 42, 25, 45, 30, 40, 43),
(4, 23180051, 'Ansarul Haq', '2023-1-18-0004', 40, 49, 48, 47, 50, 50),
(5, 23180052, 'Apekchha Poudel', '2023-1-18-0005', 46, 24, 40, 34, 44, 44),
(6, 23180053, 'Ashish Baral', '2023-1-18-0006', 44, 23, 40, 40, 40, 30),
(7, 23180054, 'Ashok Bohara', '2023-1-18-0007', 40, 32, 45, 42, 41, 40),
(8, 23180055, 'Avishek Paudel', '2023-1-18-0008', 43, 24, 40, 34, 43, 43),
(9, 23180056, 'Ayush Acharya', '2023-1-18-0009', 47, 46, 48, 50, 50, 49),
(10, 23180057, 'Babin Tiwari', '2023-1-18-0010', 38, 30, 40, 34, 46, 41),
(11, 23180058, 'Bibek Thapa', '2023-1-18-0011', 49, 35, 40, 34, 47, 39),
(12, 23180059, 'Bimal Dhungana', '2023-1-18-0012', 48, 49, 48, 43, 50, 46),
(13, 23180060, 'Bipana Ale', '2023-1-18-0013', 41, 30, 43, 40, 44, 43),
(14, 23180061, 'Dipti Poudel', '2023-1-18-0014', 46, 44, 48, 50, 47, 45),
(15, 23180062, 'Diya Bhujel', '2023-1-18-0015', 42, 28, 43, 43, 45, 40),
(16, 23180063, 'Erik Timilsina', '2023-1-18-0016', 44, 28, 40, 42, 44, 40),
(17, 23180064, 'Grish Rana', '2023-1-18-0017', 47, 45, 48, 47, 48, 45),
(18, 23180065, 'Koshis Ranabhat', '2023-1-18-0018', 49, 30, 43, 46, 45, 45),
(19, 23180066, 'Manish Acharya', '2023-1-18-0019', 42, 45, 47, 45, 47, 45),
(20, 23180067, 'Nimesh Giri', '2023-1-18-0020', 37, 29, 47, 43, 46, 44),
(21, 23180068, 'Nirdosh Regami Magar', '2023-1-18-0021', 30, 29, 40, 34, 42, 43),
(22, 23180094, 'Nishant Kumar Yadhav', '2023-1-18-0194', 30, 23, 40, 34, 40, 40),
(23, 23180069, 'Prabesh Khati', '2023-1-18-0022', 30, 23, 40, 34, 41, 43),
(24, 23180070, 'Prabhat Mani Paudel', '2023-1-18-0023', 42, 27, 44, 39, 46, 43),
(25, 23180071, 'Pradip Thapa', '2023-1-18-0024', 44, 31, 40, 34, 44, 40),
(26, 23180072, 'Prakriti Adhikari', '2023-1-18-0025', 35, 26, 41, 38, 45, 44),
(27, 23180073, 'Prastut Lamsal', '2023-1-18-0026', 35, 25, 40, 37, 42, 41),
(28, 23180074, 'Pratlk Thapa', '2023-1-18-0027', 44, 25, 43, 50, 46, 45),
(29, 23180075, 'Prisha Chaulagain', '2023-1-18-0028', 29, 23, 36, 34, 40, 39),
(30, 23180076, 'Raju Sarki', '2023-1-18-0029', 41, 26, 46, 45, 41, 45),
(32, 23180077, 'Rohan Dhakal', '2023-1-18-0030', 40, 33, 46, 37, 44, 41),
(33, 23180078, 'Rojina Tiwari', '2023-1-18-0031', 43, 38, 46, 46, 45, 48),
(34, 23180079, 'Roshan Thapa Chhetri', '2023-1-18-0032', 35, 30, 40, 35, 41, 41),
(35, 23180080, 'Sabin Tiwari', '2023-1-18-0033', 37, 31, 40, 41, 44, 41),
(36, 23180081, 'Sameep Kathayat', '2023-1-18-0034', 39, 32, 46, 47, 46, 49),
(37, 23180082, 'Sanjana Neupane', '2023-1-18-0035', 30, 32, 45, 47, 46, 44),
(38, 23180083, 'Sashwat Paudel', '2023-1-18-0036', 23, 24, 40, 36, 41, 41),
(39, 23180084, 'Saurav Raj Dhakal', '2023-1-18-0037', 30, 26, 40, 35, 44, 45),
(40, 23180085, 'Shreya Subedi', '2023-1-18-0038', 31, 34, 46, 48, 48, 48),
(41, 23180086, 'Siddhant Neupane', '2023-1-18-0039', 43, 29, 47, 46, 46, 48),
(42, 23180087, 'Smriti Pandeya', '2023-1-18-0040', 41, 29, 46, 45, 45, 45),
(43, 23180088, 'Sneha Adhlkari', '2023-1-18-0041', 46, 34, 46, 43, 47, 48),
(44, 23180089, 'Suchita Baral', '2023-1-18-0042', 44, 31, 47, 48, 48, 48),
(45, 23180090, 'Sujal Neupane', '2023-1-18-0043', 39, 23, 41, 43, 47, 45),
(46, 23180091, 'Sushant Poudel', '2023-1-18-0044', 43, 32, 47, 44, 46, 45),
(47, 23180092, 'Sushant Thapa', '2023-1-18-0045', 39, 35, 46, 45, 47, 46),
(48, 23180093, 'Ujjwal Pahari', '2023-1-18-0046', 50, 37, 48, 44, 49, 45);

-- --------------------------------------------------------

--
-- Table structure for table `studentInfo`
--

CREATE TABLE `studentInfo` (
  `RollNo` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `ExamRollNo` int(11) NOT NULL,
  `PuRegNo` varchar(20) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `PhNo` bigint(20) DEFAULT NULL,
  `Sex` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentInfo`
--

INSERT INTO `studentInfo` (`RollNo`, `Name`, `ExamRollNo`, `PuRegNo`, `Email`, `Address`, `PhNo`, `Sex`) VALUES
(1, 'Abik Paudel', 23180049, '2023-1-18-0001', NULL, NULL, NULL, 'M'),
(3, 'Anil Pariyar', 23180050, '2023-1-18-0003', NULL, NULL, NULL, 'F'),
(4, 'Ansarul Haq', 23180051, '2023-1-18-0004', NULL, NULL, NULL, 'M'),
(5, 'Apekchha Poudel', 23180052, '2023-1-18-0005', NULL, NULL, NULL, 'F'),
(6, 'Ashish Baral', 23180053, '2023-1-18-0006', NULL, NULL, NULL, 'M'),
(7, 'Ashok Bohara', 23180054, '2023-1-18-0007', NULL, NULL, NULL, 'F'),
(8, 'Avishek Paudel', 23180055, '2023-1-18-0008', NULL, NULL, NULL, 'M'),
(9, 'Ayush Acharya', 23180056, '2023-1-18-0009', NULL, NULL, NULL, 'M'),
(10, 'Babin Tiwari', 23180057, '2023-1-18-0010', NULL, NULL, NULL, 'M'),
(11, 'Bibek Thapa', 23180058, '2023-1-18-0011', NULL, NULL, NULL, 'M'),
(12, 'Bimal Dhungana', 23180059, '2023-1-18-0012', NULL, NULL, NULL, 'M'),
(13, 'Bipana Ale', 23180060, '2023-1-18-0013', NULL, NULL, NULL, 'F'),
(14, 'Dipti Poudel', 23180061, '2023-1-18-0014', NULL, NULL, NULL, 'F'),
(15, 'Diya Bhujel', 23180062, '2023-1-18-0015', NULL, NULL, NULL, 'F'),
(16, 'Erik Timilsina', 23180063, '2023-1-18-0016', NULL, NULL, NULL, 'M'),
(17, 'Grish Rana', 23180064, '2023-1-18-0017', NULL, NULL, NULL, 'M'),
(18, 'Koshis Ranabhat', 23180065, '2023-1-18-0018', NULL, NULL, NULL, 'M'),
(19, 'Manish Acharya', 23180066, '2023-1-18-0019', NULL, NULL, NULL, 'M'),
(20, 'Nimesh Giri', 23180067, '2023-1-18-0020', NULL, NULL, NULL, 'M'),
(21, 'Nirdosh Regami Magar', 23180068, '2023-1-18-0021', NULL, NULL, NULL, 'M'),
(22, 'Nishant Kumar Yadav', 23180094, '2023-1-18-0194', NULL, NULL, NULL, 'M'),
(23, 'Prabesh Khati', 23180069, '2023-1-18-0022', NULL, NULL, NULL, 'M'),
(24, 'Prabhat Mani Paudel', 23180070, '2023-1-18-0023', NULL, NULL, NULL, 'M'),
(25, 'Pradip Thapa', 23180071, '2023-1-18-0024', NULL, NULL, NULL, 'M'),
(26, 'Prakriti Adhikari', 23180072, '2023-1-18-0025', NULL, NULL, NULL, 'F'),
(27, 'Prastut Lamsal', 23180073, '2023-1-18-0026', NULL, NULL, NULL, 'M'),
(28, 'Pratik Thapa', 23180074, '2023-1-18-0027', NULL, NULL, NULL, 'M'),
(29, 'Prisha Chaulagain', 23180075, '2023-1-18-0028', NULL, NULL, NULL, 'F'),
(30, 'Raju Sarki', 23180076, '2023-1-18-0029', NULL, NULL, NULL, 'M'),
(32, 'Rohan Dhakal', 23180077, '2023-1-18-0030', NULL, NULL, NULL, 'M'),
(33, 'Rojina Tiwari', 23180078, '2023-1-18-0031', NULL, NULL, NULL, 'F'),
(34, 'Roshan Thapa Chhetri', 23180079, '2023-1-18-0032', NULL, NULL, NULL, 'M'),
(35, 'Sabin Tiwari', 23180080, '2023-1-18-0033', NULL, NULL, NULL, 'M'),
(36, 'Sameep Kathayat', 23180081, '2023-1-18-0034', NULL, NULL, NULL, 'M'),
(37, 'Sanjana Neupane', 23180082, '2023-1-18-0035', NULL, NULL, NULL, 'F'),
(38, 'Sashwat Paudel', 23180083, '2023-1-18-0036', NULL, NULL, NULL, 'M'),
(39, 'Saurav Raj Dhakal', 23180084, '2023-1-18-0037', NULL, NULL, NULL, 'M'),
(40, 'Shreya Subedi', 23180085, '2023-1-18-0038', NULL, NULL, NULL, 'F'),
(41, 'Siddhant Neupane', 23180086, '2023-1-18-0039', NULL, NULL, NULL, 'M'),
(42, 'Smriti Pandeya', 23180087, '2023-1-18-0040', NULL, NULL, NULL, 'F'),
(43, 'Sneha Adhlkari', 23180088, '2023-1-18-0041', NULL, NULL, NULL, 'F'),
(44, 'Suchita Baral', 23180089, '2023-1-18-0042', NULL, NULL, NULL, 'F'),
(45, 'Sujal Neupane', 23180090, '2023-1-18-0043', NULL, NULL, NULL, 'M'),
(46, 'Sushant Poudel', 23180091, '2023-1-18-0044', NULL, NULL, NULL, 'M'),
(47, 'Sushant Thapa', 23180092, '2023-1-18-0045', NULL, NULL, NULL, 'M'),
(48, 'Ujjwal Pahari', 23180093, '2023-1-18-0046', NULL, NULL, NULL, 'M');

-- --------------------------------------------------------

--
-- Table structure for table `studentLogin`
--

CREATE TABLE `studentLogin` (
  `username` varchar(10) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentLogin`
--

INSERT INTO `studentLogin` (`username`, `Name`, `password`) VALUES
('soe6061', 'Abik Paudel', 'soe@6061'),
('soe5965', 'Anil Pariyar', 'soe@5965'),
('soe5893', 'Ansarul Haq', 'soe@5893'),
('soe5861', 'Apekchha Poudel', 'soe@5861'),
('soe5871', 'Ashish Baral', 'soe@5871'),
('soe5980', 'Ashok Bohara', 'soe@5980'),
('soe5864', 'Avishek Paudel', 'soe@5864'),
('soe5892', 'Ayush Acharya', 'soe@5892'),
('soe5937', 'Babin Tiwari', 'soe@5937'),
('soe5881', 'Bibek Thapa', 'soe@5881'),
('soe5976', 'Bimal Dhungana', 'soe@5976'),
('soe5685', 'Bipana Ale', 'soe@5685'),
('soe5683', 'Dipti Poudel', 'soe@5683'),
('soe5829', 'Diya Bhujel', 'soe@5829'),
('soe5866', 'Erik Timilsina', 'soe@5866'),
('soe5887', 'Grish Rana', 'soe@5887'),
('soe5869', 'Koshis Ranabhat', 'soe@5869'),
('soe5890', 'Manish Acharya', 'soe@5890'),
('soe5880', 'Nimesh Giri', 'soe@5880'),
('soe5860', 'Nirdosh Regami Magar', 'soe@5860'),
('soe5862', 'Nishant Kumar Yadhav', 'soe@5862'),
('soe5827', 'Prabesh Karki', 'soe@5827'),
('soe5868', 'Prabhat Mani Paudel', 'soe@5868'),
('soe6060', 'Pradip Thapa', 'soe@6060'),
('soe5878', 'Prakriti Adhikari', 'soe@5878'),
('soe5825', 'Prastut Lamsal', 'soe@5825'),
('soe5826', 'Pratik Thapa', 'soe@5826'),
('soe5884', 'Prisha Chaulagain', 'soe@5884'),
('soe5974', 'Raju Sarki', 'soe@5974'),
('soe5973', 'Rohan Dhakal', 'soe@5973'),
('soe5882', 'Rojina Tiwari', 'soe@5882'),
('soe5828', 'Roshan Thapa Chhetri', 'soe@5828'),
('soe5879', 'Sabin Tiwari', 'soe@5879'),
('soe5885', 'Sameep Kathayat', 'soe@5885'),
('soe5975', 'Sanjana Neupane', 'soe@5975'),
('soe5877', 'Sashwat Poudel', 'soe@5877'),
('soe5802', 'Saurav Raj Dhakal', 'soe@5802'),
('soe5978', 'Shreya Subedi', 'soe@5978'),
('soe5886', 'Siddhant Neupane', 'soe@5886'),
('soe5803', 'Smriti Pandeya', 'soe@5803'),
('soe5889', 'Sneha Adhikari', 'soe@5889'),
('soe5874', 'Suchita Baral', 'soe@5874'),
('soe5812', 'Sujal Neupane', 'soe@5812'),
('soe5865', 'Sushant Poudel', 'soe@5865'),
('soe5891', 'Sushant Thapa', 'soe@5891'),
('soe5883', 'Ujjwal Pahari', 'soe@5883');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminLogin`
--
ALTER TABLE `adminLogin`
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `password` (`password`);

--
-- Indexes for table `FinalResult1stSem`
--
ALTER TABLE `FinalResult1stSem`
  ADD PRIMARY KEY (`RollNo`),
  ADD UNIQUE KEY `ExamRollNo` (`ExamRollNo`);

--
-- Indexes for table `InternalResult1stSem`
--
ALTER TABLE `InternalResult1stSem`
  ADD PRIMARY KEY (`RollNo`),
  ADD UNIQUE KEY `ExamRollNo` (`ExamRollNo`);

--
-- Indexes for table `studentInfo`
--
ALTER TABLE `studentInfo`
  ADD PRIMARY KEY (`RollNo`),
  ADD UNIQUE KEY `ExamRollNo` (`ExamRollNo`),
  ADD UNIQUE KEY `PuRegNo` (`PuRegNo`);

--
-- Indexes for table `studentLogin`
--
ALTER TABLE `studentLogin`
  ADD UNIQUE KEY `password` (`Name`),
  ADD UNIQUE KEY `soeId` (`username`),
  ADD UNIQUE KEY `Password_2` (`password`);
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `1st sem final`
--

CREATE TABLE `1st sem final` (
  `"Exam RollNo."` varchar(8) DEFAULT NULL,
  `"Basic EngineeringDrawing"` varchar(3) DEFAULT NULL,
  `"Calculus I"` varchar(3) DEFAULT NULL,
  `"Digital Logic"` varchar(3) DEFAULT NULL,
  `"Discrete Structure"` varchar(8) DEFAULT NULL,
  `"Problem SolvingTechniques"` varchar(3) DEFAULT NULL,
  `"Programming in C"` varchar(3) DEFAULT NULL,
  `"ComputerWorkshop"` varchar(2) DEFAULT NULL,
  `"SGPA"` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
