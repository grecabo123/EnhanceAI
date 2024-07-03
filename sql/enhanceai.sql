-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2024 at 05:42 PM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enhanceai`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2014_10_12_000000_create_users_table', 2),
(8, '2024_03_21_121225_create_tbl_contact_table', 3),
(9, '2024_03_29_123632_create_tbl_logs_table', 4),
(10, '2024_04_05_122458_create_tbl_shop_register_table', 5),
(13, '2024_04_27_071634_create_tbl_product_design_table', 7),
(16, '2024_05_20_030215_create_tbl_income_table', 9),
(17, '2024_04_27_054819_create_tbl_product_table', 10),
(18, '2024_04_29_132450_create_tbl_order_table', 11),
(19, '2024_06_19_045301_create_tbl_order_status_table', 12);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'admin@gmail.com_Admin', '560d71065b076846cf5ac6e01912cece453db9a05304523c27dbd5756569ea84', '[\"server:admin\"]', '2024-06-29 08:44:36', '2024-06-29 08:22:09', '2024-06-29 08:44:36'),
(4, 'App\\Models\\User', 13, 'john@gmail.com_customer', '4a0179fae56e24de39e0662476f76fb4458609ac2f6ca1e2ba93d89632577230', '[\"server:customer\"]', '2024-07-03 07:41:43', '2024-07-03 07:35:30', '2024-07-03 07:41:43');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contact` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_upload` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_contact`
--

INSERT INTO `tbl_contact` (`id`, `contact`, `address`, `city`, `file_upload`, `user_fk`, `created_at`, `updated_at`) VALUES
(1, '09705351560', 'Iligan City', 'Iligan City', 'Upload/ID/Admin.jpg', 2, '2024-03-28 21:11:00', '2024-03-28 21:11:00'),
(6, '09705351561', 'San Migeuel', 'Iligan City', 'Upload/ID/Georgie Recabo.png', 9, '2024-06-08 00:14:27', '2024-06-08 00:14:27'),
(7, '09705351560', 'Iligan City Hall Buhanginan Hills, Palao, Iligan City Philippines 9200', 'Iligan City', 'Upload/ID/Daryl Nicole.png', 10, '2024-06-08 00:16:18', '2024-06-08 00:16:18'),
(8, '09705351561', 'Iligan City Hall Buhanginan Hills, Palao, Iligan City Philippines 9200', 'Iligan City', 'Upload/ID/Kate Alcazar.png', 11, '2024-06-08 00:19:41', '2024-06-08 00:19:41'),
(9, '09705351560', 'Iligan City Hall Buhanginan Hills, Palao, Iligan City Philippines 9200', 'Iligan City', 'Upload/ID/Shiela Arganda.png', 12, '2024-06-08 00:21:10', '2024-06-08 00:21:10'),
(10, '09705351561', 'Tambo Hwy, Hinaplanon, Iligan City', 'Iligan City', 'Upload/ID/John Carl.png', 13, '2024-06-08 06:32:46', '2024-06-08 06:32:46'),
(11, '09705351561', 'Roxas Avenue Villa Verde, Iligan City', 'Iligan City', 'Upload/ID/Hanzo.png', 14, '2024-06-08 07:45:37', '2024-06-08 07:45:37');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_income`
--

CREATE TABLE `tbl_income` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_fk` bigint(20) UNSIGNED DEFAULT NULL,
  `amount` double(10,2) NOT NULL,
  `image_gene` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_fk` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_income`
--

INSERT INTO `tbl_income` (`id`, `product_fk`, `amount`, `image_gene`, `user_fk`, `created_at`, `updated_at`) VALUES
(1, 12, 4323.00, NULL, 9, '2024-06-08 04:00:13', '2024-06-08 04:00:13'),
(2, 12, 2780.00, NULL, 9, '2024-06-08 07:14:36', '2024-06-08 07:14:36'),
(3, 15, 3640.00, NULL, 13, '2024-06-08 08:16:55', '2024-06-08 08:16:55'),
(4, 14, 1900.00, NULL, 14, '2024-06-18 21:39:33', '2024-06-18 21:39:33'),
(5, 15, 3600.00, NULL, 13, '2024-06-18 21:45:16', '2024-06-18 21:45:16'),
(6, 13, 1500.00, NULL, 13, '2024-06-18 22:15:58', '2024-06-18 22:15:58'),
(7, 15, 3600.00, NULL, 13, '2024-06-23 00:13:55', '2024-06-23 00:13:55'),
(8, 11, 3700.00, NULL, 9, '2024-06-27 06:39:57', '2024-06-27 06:39:57'),
(9, 15, 3725.00, NULL, 13, '2024-06-29 08:30:47', '2024-06-29 08:30:47'),
(10, 13, 2399.00, NULL, 13, '2024-07-03 07:35:50', '2024-07-03 07:35:50'),
(11, 15, 4000.00, NULL, 13, '2024-07-03 07:36:02', '2024-07-03 07:36:02');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_logs`
--

CREATE TABLE `tbl_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_logs`
--

INSERT INTO `tbl_logs` (`id`, `description`, `user_fk`, `created_at`, `updated_at`) VALUES
(16, 'Georgie Recabo Has been Approved', 2, '2024-06-08 00:21:42', '2024-06-08 00:21:42'),
(17, 'Daryl Nicole Has been Approved', 2, '2024-06-08 00:21:50', '2024-06-08 00:21:50'),
(18, 'Kate Alcazar Has been Approved', 2, '2024-06-08 00:21:58', '2024-06-08 00:21:58'),
(19, 'Shiela Arganda Has been Approved', 2, '2024-06-08 00:22:06', '2024-06-08 00:22:06'),
(20, 'Request Form to a Flower Shop Georgie Flower Shop', 9, '2024-06-08 00:32:25', '2024-06-08 00:32:25'),
(21, 'Your Invoice # 91396 ', 10, '2024-06-08 03:00:38', '2024-06-08 03:00:38'),
(22, 'Your Invoice # 72516 ', 10, '2024-06-08 03:36:14', '2024-06-08 03:36:14'),
(23, 'Your Invoice # 94839 ', 10, '2024-06-08 03:37:05', '2024-06-08 03:37:05'),
(24, 'Your Invoice # 46671 ', 10, '2024-06-08 03:38:53', '2024-06-08 03:38:53'),
(25, 'Your Invoice # 37856 ', 10, '2024-06-08 03:39:03', '2024-06-08 03:39:03'),
(26, 'Your Invoice # 63850 ', 10, '2024-06-08 03:43:40', '2024-06-08 03:43:40'),
(27, 'John Carl Has been Approved', 2, '2024-06-08 06:35:52', '2024-06-08 06:35:52'),
(28, 'Request Form to a Flower Shop John Carl Flower Shop', 13, '2024-06-08 06:50:20', '2024-06-08 06:50:20'),
(29, 'Request Form to a Flower Shop John Carl Flower Shop', 13, '2024-06-08 06:53:02', '2024-06-08 06:53:02'),
(30, 'Request Form to a Flower Shop John Carl Flower Shop', 13, '2024-06-08 06:54:09', '2024-06-08 06:54:09'),
(31, 'Your Invoice # 77656 ', 11, '2024-06-08 07:09:39', '2024-06-08 07:09:39'),
(32, 'Hanzo Has been Approved', 2, '2024-06-08 07:46:51', '2024-06-08 07:46:51'),
(33, 'Request Form to a Flower Shop Hanzo Flower Shop', 14, '2024-06-08 07:49:31', '2024-06-08 07:49:31'),
(34, 'Your Invoice # 54420 ', 14, '2024-06-08 08:03:46', '2024-06-08 08:03:46'),
(35, 'Your Invoice # 88977 ', 9, '2024-06-18 20:26:46', '2024-06-18 20:26:46'),
(36, 'Your Invoice # 14058 ', 9, '2024-06-18 20:33:36', '2024-06-18 20:33:36'),
(37, 'Your Order ID 58121649 ', 9, '2024-06-18 20:59:28', '2024-06-18 20:59:28'),
(38, 'Your Order ID 68572056 ', 9, '2024-06-18 21:26:52', '2024-06-18 21:26:52'),
(39, 'Your Order ID 30433260 ', 9, '2024-06-18 22:15:30', '2024-06-18 22:15:30'),
(40, 'Your Order ID 50812817 ', 9, '2024-06-18 22:53:30', '2024-06-18 22:53:30'),
(41, 'Your Order ID 45705549 ', 9, '2024-06-19 00:08:49', '2024-06-19 00:08:49'),
(42, 'Your Order ID 29283319 ', 14, '2024-06-19 08:33:57', '2024-06-19 08:33:57'),
(43, 'Your Order ID 74727092 ', 14, '2024-06-19 20:47:40', '2024-06-19 20:47:40'),
(44, 'Your Order ID 29915830 ', 14, '2024-06-27 06:32:41', '2024-06-27 06:32:41'),
(45, 'Your Order ID 25052949 ', 14, '2024-06-27 06:38:28', '2024-06-27 06:38:28'),
(46, 'Request Form to a Flower Shop Krystianne', 12, '2024-06-27 06:55:54', '2024-06-27 06:55:54'),
(47, 'Your Order ID 30698113 ', 14, '2024-06-29 08:27:01', '2024-06-29 08:27:01'),
(48, 'Your Order ID 99477282 ', 14, '2024-07-03 07:33:49', '2024-07-03 07:33:49'),
(49, 'Your Order ID 22593967 ', 14, '2024-07-03 07:34:07', '2024-07-03 07:34:07');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_order` int(11) NOT NULL DEFAULT '0',
  `from_user` bigint(20) UNSIGNED NOT NULL,
  `product_fk` bigint(20) UNSIGNED DEFAULT NULL,
  `file_attach` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_contact` bigint(20) DEFAULT NULL,
  `messages` longtext COLLATE utf8mb4_unicode_ci,
  `purchase_status` tinyint(4) NOT NULL DEFAULT '0',
  `order_date` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_order`
--

INSERT INTO `tbl_order` (`id`, `invoice_id`, `type_order`, `from_user`, `product_fk`, `file_attach`, `to_name`, `to_address`, `to_contact`, `messages`, `purchase_status`, `order_date`, `owner_fk`, `created_at`, `updated_at`) VALUES
(12, '58121649', 0, 9, 15, NULL, NULL, NULL, NULL, NULL, 2, '2024-06-19T04:56:43.326Z', 13, '2024-06-18 20:59:28', '2024-06-23 00:32:41'),
(13, '68572056', 0, 9, 14, NULL, NULL, NULL, NULL, NULL, 1, '2024-06-19T04:56:43.326Z', 14, '2024-06-18 21:26:52', '2024-06-18 21:39:33'),
(14, '30433260', 0, 9, 13, NULL, NULL, NULL, NULL, NULL, 2, '2024-06-21T06:10:15.676Z', 13, '2024-06-18 22:15:29', '2024-06-23 00:32:15'),
(16, '45705549', 0, 9, 15, NULL, NULL, NULL, NULL, 'Paki wrap', 1, '2024-06-26T08:08:37.434Z', 13, '2024-06-19 00:08:49', '2024-07-03 07:36:02'),
(18, '74727092', 0, 14, 15, NULL, NULL, NULL, NULL, NULL, 2, '2024-06-28T09:40:08.728Z', 13, '2024-06-19 20:47:40', '2024-06-23 00:31:39'),
(20, '25052949', 0, 14, 11, NULL, NULL, NULL, NULL, NULL, 2, '2024-07-17T02:30:14.618Z', 9, '2024-06-27 06:38:28', '2024-06-27 06:42:45'),
(21, '30698113', 0, 14, 15, NULL, NULL, NULL, NULL, NULL, 2, '2024-07-25T02:20:07.653Z', 13, '2024-06-29 08:27:01', '2024-06-29 08:33:17'),
(27, '13573706', 1, 14, NULL, 'Upload/ID/Georgie.jpg', 'Georgie', 'awdawd', 9324, 'ingani akong gusto,, and tawagi ko please', 0, 'Tue Jul 30 2024 23:28:43 GMT+0800 (Singapore Standard Time)', 13, '2024-07-03 07:29:08', '2024-07-03 07:29:08'),
(28, '14814838', 1, 14, NULL, 'Upload/ID/daw.jpg', 'daw', 'dawd', 343, 'dawdawd', 0, 'Wed Jul 31 2024 23:33:09 GMT+0800 (Singapore Standard Time)', 12, '2024-07-03 07:33:24', '2024-07-03 07:33:24'),
(29, '99477282', 0, 14, 11, NULL, NULL, NULL, NULL, 'daw', 0, '2024-07-31T15:33:31.819Z', 9, '2024-07-03 07:33:49', '2024-07-03 07:33:49'),
(30, '22593967', 0, 14, 13, NULL, NULL, NULL, NULL, 'dawd', 2, '2024-07-23T15:33:57.155Z', 13, '2024-07-03 07:34:07', '2024-07-03 07:41:38');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order_status`
--

CREATE TABLE `tbl_order_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_fk` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_order_status`
--

INSERT INTO `tbl_order_status` (`id`, `order_fk`, `description`, `created_at`, `updated_at`) VALUES
(1, 12, 'Order Product Successfully with Order ID 58121649', '2024-06-18 20:59:28', '2024-06-18 20:59:28'),
(2, 13, 'Order Product Successfully with Order ID 68572056', '2024-06-18 21:26:52', '2024-06-18 21:26:52'),
(3, 13, 'Your product order has been approved!', '2024-06-18 21:39:33', '2024-06-18 21:39:33'),
(4, 13, 'Your Product will deliver on  Jun 19 2024 12:56 pm', '2024-06-18 21:39:33', '2024-06-18 21:39:33'),
(5, 12, 'Your product order has been approved!', '2024-06-18 21:45:16', '2024-06-18 21:45:16'),
(6, 12, 'Your Product will deliver on  Jun 19 2024 12:56 pm', '2024-06-18 21:45:16', '2024-06-18 21:45:16'),
(7, 14, 'Order Product Successfully with Order ID 30433260', '2024-06-18 22:15:29', '2024-06-18 22:15:29'),
(8, 14, 'Your product order has been approved!', '2024-06-18 22:15:58', '2024-06-18 22:15:58'),
(9, 14, 'Your Product will deliver on  Jun 21 2024 02:10 pm', '2024-06-18 22:15:58', '2024-06-18 22:15:58'),
(11, 16, 'Order Product Successfully with Order ID 45705549', '2024-06-19 00:08:49', '2024-06-19 00:08:49'),
(13, 18, 'Order Product Successfully with Order ID 74727092', '2024-06-19 20:47:40', '2024-06-19 20:47:40'),
(14, 18, 'Your product order has been approved!', '2024-06-23 00:13:55', '2024-06-23 00:13:55'),
(15, 18, 'Your Product will deliver on  Jun 28 2024 05:40 pm', '2024-06-23 00:13:55', '2024-06-23 00:13:55'),
(17, 20, 'Order Product Successfully with Order ID 25052949', '2024-06-27 06:38:28', '2024-06-27 06:38:28'),
(18, 20, 'Your product order has been approved!', '2024-06-27 06:39:57', '2024-06-27 06:39:57'),
(19, 20, 'Your Product will deliver on  Jul 17 2024 10:30 am', '2024-06-27 06:39:57', '2024-06-27 06:39:57'),
(20, 21, 'Order Product Successfully with Order ID 30698113', '2024-06-29 08:27:01', '2024-06-29 08:27:01'),
(21, 21, 'Your product order has been approved!', '2024-06-29 08:30:47', '2024-06-29 08:30:47'),
(22, 21, 'Your Product will deliver on  Jul 25 2024 10:20 am', '2024-06-29 08:30:47', '2024-06-29 08:30:47'),
(23, 27, 'Order Product Successfully with Order ID 13573706', '2024-07-03 07:29:08', '2024-07-03 07:29:08'),
(24, 28, 'Order Product Successfully with Order ID 14814838', '2024-07-03 07:33:24', '2024-07-03 07:33:24'),
(25, 29, 'Order Product Successfully with Order ID 99477282', '2024-07-03 07:33:49', '2024-07-03 07:33:49'),
(26, 30, 'Order Product Successfully with Order ID 22593967', '2024-07-03 07:34:07', '2024-07-03 07:34:07'),
(27, 30, 'Your product order has been approved!', '2024-07-03 07:35:50', '2024-07-03 07:35:50'),
(28, 30, 'Your Product will deliver on  Jul 23 2024 11:33 pm', '2024-07-03 07:35:50', '2024-07-03 07:35:50'),
(29, 16, 'Your product order has been approved!', '2024-07-03 07:36:02', '2024-07-03 07:36:02'),
(30, 16, 'Your Product will deliver on  Jun 26 2024 04:08 pm', '2024-07-03 07:36:02', '2024-07-03 07:36:02');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `number_pcs` bigint(20) NOT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(10,2) NOT NULL,
  `file_product` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `user_fk`, `number_pcs`, `product_name`, `price`, `file_product`, `created_at`, `updated_at`) VALUES
(1, 9, 20, 'Blue  Flower', 400.00, 'Uploads/Flowers/Blue  Flower875.jpg', '2024-06-08 01:09:35', '2024-06-08 01:09:35'),
(2, 9, 200, 'Sun Flower', 200.00, 'Uploads/Flowers/Sun Flower339.jpg', '2024-06-08 01:11:40', '2024-06-08 01:11:40'),
(3, 9, 20, 'Tulips', 650.00, 'Uploads/Flowers/Tulips352.jpg', '2024-06-08 01:12:26', '2024-06-08 01:12:26'),
(4, 9, 15, 'Pink Roses', 200.00, 'Uploads/Flowers/Pink Roses879.jpg', '2024-06-08 01:12:51', '2024-06-08 01:12:51'),
(5, 9, 100, 'Red Roses', 25.00, 'Uploads/Flowers/Red Roses891.jpg', '2024-06-08 01:13:15', '2024-06-08 01:13:15'),
(6, 13, 100, 'Red Roses', 50.00, 'Uploads/Flowers/Red Roses279.jpg', '2024-06-08 07:00:49', '2024-06-08 07:00:49'),
(7, 13, 30, 'Sun Flower', 100.00, 'Uploads/Flowers/Sun Flower671.jpg', '2024-06-08 07:02:02', '2024-06-08 07:02:02'),
(8, 14, 30, 'Tulips', 580.00, 'Uploads/Flowers/Tulips577.jpg', '2024-06-08 07:54:15', '2024-06-08 07:54:15'),
(9, 14, 100, 'Red Roses', 60.00, 'Uploads/Flowers/Red Roses325.jpg', '2024-06-08 07:54:59', '2024-06-08 07:54:59'),
(10, 12, 20, 'Tulips', 80.00, 'Uploads/Flowers/Tulips714.jpg', '2024-06-27 06:58:08', '2024-06-27 06:58:08');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_design`
--

CREATE TABLE `tbl_product_design` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `price` double(10,2) NOT NULL,
  `file_product_design` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_product_design`
--

INSERT INTO `tbl_product_design` (`id`, `user_fk`, `status`, `product_name`, `description`, `price`, `file_product_design`, `created_at`, `updated_at`) VALUES
(11, 9, 1, 'Sun flower bouquet with blue flowers', NULL, 3500.00, 'Uploads/DesignProducts/Sun flower bouquet with blue flowers268.jpg', '2024-06-08 01:19:40', '2024-06-08 01:19:40'),
(12, 9, 1, 'Red Roses with sun flower', NULL, 2500.00, 'Uploads/DesignProducts/Red Roses with sun flower748.jpeg', '2024-06-08 02:19:00', '2024-06-08 02:19:00'),
(13, 13, 1, '12 Red roses', NULL, 1370.00, 'Uploads/DesignProducts/12 Red roses294.jpg', '2024-06-08 07:03:33', '2024-06-08 07:03:33'),
(14, 14, 1, 'Red Roses with sun flower', NULL, 1800.00, 'Uploads/DesignProducts/Red Roses with sun flower372.jpeg', '2024-06-08 07:57:08', '2024-06-08 07:57:08'),
(15, 13, 1, 'Tulips Bundle', NULL, 3500.00, 'Uploads/DesignProducts/Tulips Bundle269.jpg', '2024-06-08 07:58:41', '2024-06-08 07:58:41');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shop_register`
--

CREATE TABLE `tbl_shop_register` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `shop_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_logo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_permit` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_contact` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `shop_status` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_shop_register`
--

INSERT INTO `tbl_shop_register` (`id`, `shop_name`, `shop_logo`, `shop_city`, `shop_address`, `shop_permit`, `shop_contact`, `shop_description`, `user_fk`, `shop_status`, `created_at`, `updated_at`) VALUES
(6, 'Georgie Flower Shop', 'Upload/Files/Georgie Flower Shop.png', 'Iligan City', '10th east, tubod, iligan city', 'Upload/Files/Georgie Flower Shop.pdf', '09705351560', NULL, 9, 1, '2024-06-08 00:32:25', '2024-06-08 00:52:38'),
(9, 'John Carl Flower Shop', 'Upload/Files/John Carl Flower Shop.png', 'Iligan City', 'Tambo Hwy, Hinaplanon, Iligan City', 'Upload/Files/John Carl Flower Shop.pdf', '097434234234', NULL, 13, 1, '2024-06-08 06:54:09', '2024-06-08 06:57:22'),
(10, 'Hanzo Flower Shop', 'Upload/Files/Hanzo Flower Shop.jpg', 'Iligan City', 'Roxas Avenue Villa Verde, Iligan City', 'Upload/Files/Hanzo Flower Shop.pdf', '097434234234', NULL, 14, 1, '2024-06-08 07:49:31', '2024-06-08 07:51:08'),
(11, 'Krystianne', 'Upload/Files/Krystianne.jpg', 'Iligan City', '10th east, tubod, iligan city', 'Upload/Files/Krystianne.pdf', '09705351560', NULL, 12, 1, '2024-06-27 06:55:54', '2024-06-27 06:56:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `secret_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `status`, `email_verified_at`, `secret_key`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Admin', 'admin@gmail.com', 1, 1, NULL, 'admin123', '$2y$10$6f6Pt4lJB1CeEZOwEiZGeO7D0xunQfbG/2S7p5toNqLyxw4ipb6Ey', NULL, '2024-03-28 21:11:00', '2024-03-28 21:11:00'),
(9, 'Georgie Recabo', 'artamay1@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$0XA9FjEhUmcaG1e04ZEVE.odNPJ4T4FKM/8t76/TYLyg1.BTSrqT2', NULL, '2024-06-08 00:14:27', '2024-06-08 00:21:42'),
(10, 'Daryl Nicole', 'daryl@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$koKDDqCZ2RSkK.IWEBsPD.ZKRexm57DX6eJBNWkjJnoh2lD60Qh7i', NULL, '2024-06-08 00:16:18', '2024-06-17 06:25:23'),
(11, 'Kate Alcazar', 'kate@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$3yIKiHQd.o8gxsdbUZZSTudGdppZea.feeR851UTzsih6o7mbg7jK', NULL, '2024-06-08 00:19:41', '2024-06-08 00:21:58'),
(12, 'Shiela Arganda', 'shiela@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$GgYWrZVKghbi8Jnz3wPSrO1HfU9djn445XNemEF/.uqTaj645B5n.', NULL, '2024-06-08 00:21:10', '2024-06-17 06:25:52'),
(13, 'John Carl', 'john@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$6NvnUssbihXMadnexWC39e8glj0yChHC31lf9jAHHeRIOFXiFMraq', NULL, '2024-06-08 06:32:46', '2024-06-18 06:51:45'),
(14, 'Hanzo', 'hanzo@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$A7kO5WZtxtw5QJalPGT11eGGoiBBJAT9cNry3d/cbkG1ESn2mUrrm', NULL, '2024-06-08 07:45:37', '2024-06-29 08:23:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk` (`user_fk`);

--
-- Indexes for table `tbl_income`
--
ALTER TABLE `tbl_income`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_income_product_fk_foreign` (`product_fk`),
  ADD KEY `tbl_income_user_fk_foreign` (`user_fk`);

--
-- Indexes for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_logs_user_fk_foreign` (`user_fk`);

--
-- Indexes for table `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_order_from_user_foreign` (`from_user`),
  ADD KEY `tbl_order_product_fk_foreign` (`product_fk`),
  ADD KEY `tbl_order_owner_fk_foreign` (`owner_fk`);

--
-- Indexes for table `tbl_order_status`
--
ALTER TABLE `tbl_order_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_order_status_order_fk_foreign` (`order_fk`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_product_user_fk_foreign` (`user_fk`);

--
-- Indexes for table `tbl_product_design`
--
ALTER TABLE `tbl_product_design`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_product_design_user_fk_foreign` (`user_fk`);

--
-- Indexes for table `tbl_shop_register`
--
ALTER TABLE `tbl_shop_register`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_shop_register_user_fk_foreign` (`user_fk`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_income`
--
ALTER TABLE `tbl_income`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_order_status`
--
ALTER TABLE `tbl_order_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_product_design`
--
ALTER TABLE `tbl_product_design`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_shop_register`
--
ALTER TABLE `tbl_shop_register`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD CONSTRAINT `tbl_contact_ibfk_1` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_income`
--
ALTER TABLE `tbl_income`
  ADD CONSTRAINT `tbl_income_product_fk_foreign` FOREIGN KEY (`product_fk`) REFERENCES `tbl_product_design` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_income_user_fk_foreign` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  ADD CONSTRAINT `tbl_logs_user_fk_foreign` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD CONSTRAINT `tbl_order_from_user_foreign` FOREIGN KEY (`from_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_order_owner_fk_foreign` FOREIGN KEY (`owner_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_order_product_fk_foreign` FOREIGN KEY (`product_fk`) REFERENCES `tbl_product_design` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_order_status`
--
ALTER TABLE `tbl_order_status`
  ADD CONSTRAINT `tbl_order_status_order_fk_foreign` FOREIGN KEY (`order_fk`) REFERENCES `tbl_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD CONSTRAINT `tbl_product_user_fk_foreign` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_product_design`
--
ALTER TABLE `tbl_product_design`
  ADD CONSTRAINT `tbl_product_design_user_fk_foreign` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_shop_register`
--
ALTER TABLE `tbl_shop_register`
  ADD CONSTRAINT `tbl_shop_register_user_fk_foreign` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
