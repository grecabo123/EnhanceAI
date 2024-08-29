-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 29, 2024 at 02:11 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

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
(6, 'App\\Models\\User', 9, 'artamay1@gmail.com_customer', 'e64a43c2e75666bde981ac306e0779ead03c3b4ae51b6fd267fe805e8067ca06', '[\"server:customer\"]', '2024-07-30 00:51:56', '2024-07-17 23:54:49', '2024-07-30 00:51:56'),
(20, 'App\\Models\\User', 16, 'nidapaculba@gmail.com_customer', 'e18c68627b0a5a6187721bb51c7c17d68d54c6bd1997c9c2ab34eba04cb4e540', '[\"server:customer\"]', '2024-08-17 01:48:53', '2024-08-17 01:47:29', '2024-08-17 01:48:53'),
(29, 'App\\Models\\User', 20, 'raufbalt@gmail.com_customer', 'dca0edd511e78c8642387e407a4f43003b358fc53b2e24bdab01e6925edf319e', '[\"server:customer\"]', '2024-08-21 10:30:07', '2024-08-21 10:29:58', '2024-08-21 10:30:07'),
(30, 'App\\Models\\User', 15, 'nestor@gmail.com_customer', '6bbc1cedfb56b2094c5d02487a325ed40ebabe678efcdc3b04d24891521c13f5', '[\"server:customer\"]', '2024-08-21 21:17:23', '2024-08-21 21:16:55', '2024-08-21 21:17:23');

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
(11, '09705351561', 'Roxas Avenue Villa Verde, Iligan City', 'Iligan City', 'Upload/ID/Hanzo.png', 14, '2024-06-08 07:45:37', '2024-06-08 07:45:37'),
(12, '09272776779', 'Poblacion', 'Iligan City', 'Upload/ID/nestor.jpeg', 15, '2024-08-04 21:32:35', '2024-08-04 21:32:35'),
(13, '09531879164', 'Villaverde', 'Iligan City', 'Upload/ID/Nida Lyn Paculba.jpg', 16, '2024-08-06 23:31:48', '2024-08-06 23:31:48'),
(14, '09350761924', 'Poblacion', 'Iligan City', 'Upload/ID/ranilo areja navales.jpg', 17, '2024-08-15 12:18:32', '2024-08-15 12:18:32'),
(15, '09280182934', 'Luinab', 'Iligan City', 'Upload/ID/Jasfer Levin Eltanal.jpg', 18, '2024-08-15 12:50:51', '2024-08-15 12:50:51'),
(16, '09552095379', 'Del Carmen', 'Iligan City', 'Upload/ID/Kathlyne Carpentero.jpg', 19, '2024-08-15 12:52:18', '2024-08-15 12:52:18'),
(17, '09279188120', 'Luinab', 'Iligan City', 'Upload/ID/Abdul Rauf Balt.jpg', 20, '2024-08-15 12:53:49', '2024-08-15 12:53:49'),
(18, '09272776779', 'Steeltown', 'Iligan City', 'Upload/ID/Darlyn Grace Barbon.jpg', 21, '2024-08-15 21:39:31', '2024-08-15 21:39:31'),
(19, '09350761924', 'Tambacan', 'Iligan City', 'Upload/ID/anne marie christine redoblado.jpg', 22, '2024-08-15 21:56:08', '2024-08-15 21:56:08'),
(20, '09280182934', 'Santiago', 'Iligan City', 'Upload/ID/reham ayonan.jpg', 23, '2024-08-15 22:03:44', '2024-08-15 22:03:44'),
(21, '09531879164', 'baraas', 'Iligan City', 'Upload/ID/kenno rey tabamo.jpg', 24, '2024-08-15 22:07:14', '2024-08-15 22:07:14'),
(22, '09350761924', 'Tubod', 'Iligan City', 'Upload/ID/maria jamaica consenillo.jpg', 25, '2024-08-15 22:10:07', '2024-08-15 22:10:07'),
(23, '09350761924', 'Mahayahay', 'Iligan City', 'Upload/ID/johairah sansarona.jpg', 26, '2024-08-15 22:11:15', '2024-08-15 22:11:15'),
(24, '09280182934', 'Luinab', 'Iligan City', 'Upload/ID/safiyya ramos.jpg', 27, '2024-08-15 22:12:09', '2024-08-15 22:12:09'),
(25, '09531879164', 'Pala-o', 'Iligan City', 'Upload/ID/sohaine dekire.jpg', 28, '2024-08-15 22:13:04', '2024-08-15 22:13:04'),
(26, '09531879164', 'Pala-o', 'Iligan City', 'Upload/ID/maia norvymel pangatungan.jpg', 29, '2024-08-15 22:14:20', '2024-08-15 22:14:20'),
(27, '09280182934', 'Mahayahay', 'Iligan City', 'Upload/ID/norhanifah dipatuan.jpg', 30, '2024-08-15 22:16:09', '2024-08-15 22:16:09'),
(28, '09280182934', 'Poblacion', 'Iligan City', 'Upload/ID/norjana sarip.jpg', 31, '2024-08-15 22:17:24', '2024-08-15 22:17:24'),
(29, '09280182934', 'tipanoy', 'Iligan City', 'Upload/ID/sydney colobio.jpg', 32, '2024-08-15 22:18:39', '2024-08-15 22:18:39'),
(30, '09280182934', 'bagong silang', 'Iligan City', 'Upload/ID/mark delacoste.jpg', 33, '2024-08-15 22:19:44', '2024-08-15 22:19:44'),
(31, '09273687912', 'Palao', 'Iligan City', 'Upload/ID/rey.jpg', 34, '2024-08-21 10:16:22', '2024-08-21 10:16:22');

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
(9, 11, 3500.00, NULL, 9, '2024-07-17 23:57:44', '2024-07-17 23:57:44'),
(10, 16, 400.00, NULL, 15, '2024-08-07 02:31:13', '2024-08-07 02:31:13');

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
(47, 'Your Order ID 55572730 ', 14, '2024-07-17 23:52:37', '2024-07-17 23:52:37'),
(48, 'nestor Has been Approved', 2, '2024-08-05 01:55:31', '2024-08-05 01:55:31'),
(49, 'Request Form to a Flower Shop JK Flower Shoppe', 15, '2024-08-05 02:10:21', '2024-08-05 02:10:21'),
(50, 'Red Roses Updated Data', 15, '2024-08-05 02:41:24', '2024-08-05 02:41:24'),
(51, 'Nida Lyn Paculba Has been Approved', 2, '2024-08-06 23:34:03', '2024-08-06 23:34:03'),
(52, 'Request Form to a Flower Shop Paculba Flowershop', 16, '2024-08-07 00:28:45', '2024-08-07 00:28:45'),
(53, 'Your Order ID 33488690 ', 14, '2024-08-07 02:29:45', '2024-08-07 02:29:45'),
(54, 'ranilo areja navales Has been Approved', 2, '2024-08-15 12:21:24', '2024-08-15 12:21:24'),
(55, 'Request Form to a Flower Shop Gloy\'s Flower Shop', 17, '2024-08-15 12:28:05', '2024-08-15 12:28:05'),
(56, 'Jasfer Levin Eltanal Has been Approved', 2, '2024-08-15 12:54:55', '2024-08-15 12:54:55'),
(57, 'Kathlyne Carpentero Has been Approved', 2, '2024-08-15 12:55:08', '2024-08-15 12:55:08'),
(58, 'Abdul Rauf Balt Has been Approved', 2, '2024-08-15 12:55:21', '2024-08-15 12:55:21'),
(59, 'Darlyn Grace Barbon Has been Approved', 2, '2024-08-15 22:26:16', '2024-08-15 22:26:16'),
(60, 'anne marie christine redoblado Has been Approved', 2, '2024-08-15 22:36:12', '2024-08-15 22:36:12'),
(61, 'anne marie christine redoblado Has been Approved', 2, '2024-08-15 22:36:14', '2024-08-15 22:36:14'),
(62, 'anne marie christine redoblado Has been Approved', 2, '2024-08-15 22:36:14', '2024-08-15 22:36:14'),
(63, 'anne marie christine redoblado Has been Approved', 2, '2024-08-15 22:36:18', '2024-08-15 22:36:18'),
(64, 'anne marie christine redoblado Has been Approved', 2, '2024-08-15 22:36:54', '2024-08-15 22:36:54'),
(65, 'reham ayonan Has been Approved', 2, '2024-08-15 22:38:44', '2024-08-15 22:38:44'),
(66, 'reham ayonan Has been Approved', 2, '2024-08-15 22:40:52', '2024-08-15 22:40:52'),
(67, 'kenno rey tabamo Has been Approved', 2, '2024-08-15 22:41:22', '2024-08-15 22:41:22'),
(68, 'kenno rey tabamo Has been Approved', 2, '2024-08-15 22:41:25', '2024-08-15 22:41:25'),
(69, 'maria jamaica consenillo Has been Approved', 2, '2024-08-15 22:41:43', '2024-08-15 22:41:43'),
(70, 'johairah sansarona Has been Approved', 2, '2024-08-15 22:41:56', '2024-08-15 22:41:56'),
(71, 'safiyya ramos Has been Approved', 2, '2024-08-15 22:42:11', '2024-08-15 22:42:11'),
(72, 'safiyya ramos Has been Approved', 2, '2024-08-15 22:42:21', '2024-08-15 22:42:21'),
(73, 'safiyya ramos Has been Approved', 2, '2024-08-15 22:42:22', '2024-08-15 22:42:22'),
(74, 'sohaine dekire Has been Approved', 2, '2024-08-15 22:42:55', '2024-08-15 22:42:55'),
(75, 'maia norvymel pangatungan Has been Approved', 2, '2024-08-15 22:43:09', '2024-08-15 22:43:09'),
(76, 'norhanifah dipatuan Has been Approved', 2, '2024-08-15 22:43:36', '2024-08-15 22:43:36'),
(77, 'norjana sarip Has been Approved', 2, '2024-08-15 22:43:56', '2024-08-15 22:43:56'),
(78, 'sydney colobio Has been Approved', 2, '2024-08-15 22:44:09', '2024-08-15 22:44:09'),
(79, 'mark delacoste Has been Approved', 2, '2024-08-15 22:44:34', '2024-08-15 22:44:34'),
(80, 'Red Roses Updated Data', 15, '2024-08-16 21:27:05', '2024-08-16 21:27:05'),
(81, 'Your Order ID 40379510 ', 14, '2024-08-17 01:46:02', '2024-08-17 01:46:02'),
(82, 'rey Has been Approved', 2, '2024-08-21 10:17:34', '2024-08-21 10:17:34'),
(83, 'Request Form to a Flower Shop M-M Gifts & Flowershop Supplies', 34, '2024-08-21 10:21:05', '2024-08-21 10:21:05');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
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

INSERT INTO `tbl_order` (`id`, `invoice_id`, `from_user`, `product_fk`, `file_attach`, `to_name`, `to_address`, `to_contact`, `messages`, `purchase_status`, `order_date`, `owner_fk`, `created_at`, `updated_at`) VALUES
(12, '58121649', 9, 15, NULL, NULL, NULL, NULL, NULL, 2, '2024-06-19T04:56:43.326Z', 13, '2024-06-18 20:59:28', '2024-06-23 00:32:41'),
(13, '68572056', 9, 14, NULL, NULL, NULL, NULL, NULL, 1, '2024-06-19T04:56:43.326Z', 14, '2024-06-18 21:26:52', '2024-06-18 21:39:33'),
(14, '30433260', 9, 13, NULL, NULL, NULL, NULL, NULL, 2, '2024-06-21T06:10:15.676Z', 13, '2024-06-18 22:15:29', '2024-06-23 00:32:15'),
(16, '45705549', 9, 15, NULL, NULL, NULL, NULL, 'Paki wrap', 0, '2024-06-26T08:08:37.434Z', 13, '2024-06-19 00:08:49', '2024-06-19 00:08:49'),
(17, '29283319', 14, 13, NULL, NULL, NULL, NULL, NULL, 0, '2024-06-27T04:33:38.998Z', 13, '2024-06-19 08:33:57', '2024-06-19 08:33:57'),
(18, '74727092', 14, 15, NULL, NULL, NULL, NULL, NULL, 2, '2024-06-28T09:40:08.728Z', 13, '2024-06-19 20:47:40', '2024-06-23 00:31:39'),
(20, '25052949', 14, 11, NULL, NULL, NULL, NULL, NULL, 2, '2024-07-17T02:30:14.618Z', 9, '2024-06-27 06:38:28', '2024-06-27 06:42:45'),
(21, '55572730', 14, 11, NULL, 'pocs', 'iligan city', 7676756, NULL, 1, '2024-07-20T07:40:37.811Z', 9, '2024-07-17 23:52:37', '2024-07-17 23:57:44'),
(22, '33488690', 14, 16, NULL, 'nestor', 'Poblacion', NULL, NULL, 1, '2024-08-09T10:28:22.203Z', 15, '2024-08-07 02:29:45', '2024-08-07 02:31:13'),
(23, '40379510', 14, 38, NULL, NULL, NULL, NULL, NULL, 0, '2024-08-21T09:38:17.517Z', 16, '2024-08-17 01:46:00', '2024-08-17 01:46:00');

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
(12, 17, 'Order Product Successfully with Order ID 29283319', '2024-06-19 08:33:57', '2024-06-19 08:33:57'),
(13, 18, 'Order Product Successfully with Order ID 74727092', '2024-06-19 20:47:40', '2024-06-19 20:47:40'),
(14, 18, 'Your product order has been approved!', '2024-06-23 00:13:55', '2024-06-23 00:13:55'),
(15, 18, 'Your Product will deliver on  Jun 28 2024 05:40 pm', '2024-06-23 00:13:55', '2024-06-23 00:13:55'),
(17, 20, 'Order Product Successfully with Order ID 25052949', '2024-06-27 06:38:28', '2024-06-27 06:38:28'),
(18, 20, 'Your product order has been approved!', '2024-06-27 06:39:57', '2024-06-27 06:39:57'),
(19, 20, 'Your Product will deliver on  Jul 17 2024 10:30 am', '2024-06-27 06:39:57', '2024-06-27 06:39:57'),
(20, 21, 'Order Product Successfully with Order ID 55572730', '2024-07-17 23:52:37', '2024-07-17 23:52:37'),
(21, 21, 'Your product order has been approved!', '2024-07-17 23:57:44', '2024-07-17 23:57:44'),
(22, 21, 'Your Product will deliver on  Jul 20 2024 03:40 pm', '2024-07-17 23:57:44', '2024-07-17 23:57:44'),
(23, 22, 'Order Product Successfully with Order ID 33488690', '2024-08-07 02:29:45', '2024-08-07 02:29:45'),
(24, 22, 'Your product order has been approved!', '2024-08-07 02:31:13', '2024-08-07 02:31:13'),
(25, 22, 'Your Product will deliver on  Aug 09 2024 06:28 pm', '2024-08-07 02:31:13', '2024-08-07 02:31:13'),
(26, 23, 'Order Product Successfully with Order ID 40379510', '2024-08-17 01:46:01', '2024-08-17 01:46:01');

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
(10, 12, 20, 'Tulips', 80.00, 'Uploads/Flowers/Tulips714.jpg', '2024-06-27 06:58:08', '2024-06-27 06:58:08'),
(11, 15, 24, 'Red Roses', 400.00, 'Uploads/Flowers/Red Roses Bouquet994.jpg', '2024-08-05 02:20:23', '2024-08-05 02:41:24'),
(12, 15, 14, 'Yellow Roses Bouquet', 500.00, 'Uploads/Flowers/Yellow Roses Bouquet816.jpg', '2024-08-05 02:22:32', '2024-08-05 02:22:32'),
(13, 15, 36, 'White Roses', 20.00, 'Uploads/Flowers/White Roses553.jpg', '2024-08-07 22:40:25', '2024-08-07 22:40:25'),
(14, 15, 24, 'Yellow Radost Mums', 30.00, 'Uploads/Flowers/Yellow Radost Mums662.jpg', '2024-08-07 22:41:10', '2024-08-07 22:41:10'),
(15, 15, 29, 'Lavender Radost Mums', 30.00, 'Uploads/Flowers/Lavender Radost Mums621.jpg', '2024-08-07 22:42:32', '2024-08-07 22:42:32'),
(16, 15, 36, 'Purple Radost Mums', 30.00, 'Uploads/Flowers/Purple Radost Mums752.jpg', '2024-08-07 22:43:34', '2024-08-07 22:43:34'),
(17, 15, 24, 'Lisianthius', 150.00, 'Uploads/Flowers/Lisianthius543.jpg', '2024-08-07 22:54:51', '2024-08-07 22:54:51'),
(18, 15, 12, 'Stargazer', 250.00, 'Uploads/Flowers/Stargazer946.jpg', '2024-08-07 22:56:16', '2024-08-07 22:56:16'),
(19, 15, 24, 'Gerbera', 50.00, 'Uploads/Flowers/Gerbera359.jpg', '2024-08-07 22:56:46', '2024-08-07 22:56:46'),
(20, 15, 30, 'Carnations', 100.00, 'Uploads/Flowers/Carnations246.jpg', '2024-08-07 22:57:11', '2024-08-07 22:57:11'),
(21, 15, 24, 'Sunflower', 100.00, 'Uploads/Flowers/Sunflower532.jpg', '2024-08-07 22:57:30', '2024-08-07 22:57:30');

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
(15, 13, 1, 'Tulips Bundle', NULL, 3500.00, 'Uploads/DesignProducts/Tulips Bundle269.jpg', '2024-06-08 07:58:41', '2024-06-08 07:58:41'),
(16, 15, 1, 'Red Roses Bouquet', NULL, 400.00, 'Uploads/DesignProducts/Red Roses Bouquet764.jpg', '2024-08-05 02:43:56', '2024-08-05 02:43:56'),
(17, 15, 1, 'Yellow Roses Bouquet', NULL, 500.00, 'Uploads/DesignProducts/Yellow Roses Bouquet668.jpg', '2024-08-05 02:44:17', '2024-08-05 02:44:17'),
(18, 15, 1, 'Light Pink Roses Bouquet', NULL, 1600.00, 'Uploads/DesignProducts/Light Pink Roses Bouquet707.jpg', '2024-08-07 21:53:53', '2024-08-07 21:53:53'),
(19, 15, 1, 'Red & Yellow Roses Bouquet', NULL, 1300.00, 'Uploads/DesignProducts/Red & Yellow Roses Bouquet988.jpg', '2024-08-07 21:55:48', '2024-08-07 21:55:48'),
(20, 15, 1, 'Yellow Radost & Red Roses Bouquet', NULL, 1000.00, 'Uploads/DesignProducts/Yellow Radost & Red Roses Bouquet548.jpg', '2024-08-07 21:58:05', '2024-08-07 21:58:05'),
(21, 15, 1, 'White Roses Bouquet', NULL, 500.00, 'Uploads/DesignProducts/White Roses Bouquet662.jpg', '2024-08-07 21:59:16', '2024-08-07 21:59:16'),
(22, 15, 1, 'Light Pink Roses Bouquet', '12 pcs of roses', 500.00, 'Uploads/DesignProducts/Light Pink Roses Bouquet249.jpg', '2024-08-07 22:00:33', '2024-08-07 22:00:33'),
(23, 15, 1, 'Red', '12 pcs of roses', 500.00, 'Uploads/DesignProducts/Red770.jpg', '2024-08-07 22:01:23', '2024-08-07 22:01:23'),
(24, 15, 1, 'Light Pink Roses Bouquet', NULL, 1600.00, 'Uploads/DesignProducts/Light Pink Roses Bouquet800.jpg', '2024-08-07 22:04:58', '2024-08-07 22:04:58'),
(25, 15, 1, 'Fuchsia Pink Satin Bouquet', NULL, 500.00, 'Uploads/DesignProducts/Fuchsia Pink Satin Bouquet322.jpg', '2024-08-07 22:06:57', '2024-08-07 22:06:57'),
(26, 15, 1, 'Purple Satin Ribbon', NULL, 350.00, 'Uploads/DesignProducts/Purple Satin Ribbon359.jpg', '2024-08-07 22:08:12', '2024-08-07 22:08:12'),
(27, 15, 1, 'Light Green Satin Bouquet', NULL, 500.00, 'Uploads/DesignProducts/Light Green Satin Bouquet765.jpg', '2024-08-07 22:10:29', '2024-08-07 22:10:29'),
(28, 15, 1, 'Satin Bouquet', '5 pcs of Satin Rose & 2 small Teddy Bear', 700.00, 'Uploads/DesignProducts/Satin Bouquet807.jpg', '2024-08-07 22:12:23', '2024-08-07 22:12:23'),
(29, 15, 1, 'White Satin Bouquet', '5 pcs of Satin Rose & 2 small Teddy Bear', 700.00, 'Uploads/DesignProducts/White Satin Bouquet496.jpg', '2024-08-07 22:13:07', '2024-08-07 22:13:07'),
(30, 15, 1, 'Red Satin Bouquet', '5 pcs of Satin Rose & 2 small Teddy Bear', 500.00, 'Uploads/DesignProducts/Red Satin Bouquet147.jpg', '2024-08-07 22:15:42', '2024-08-07 22:15:42'),
(31, 15, 1, 'Radost & Roses Bouquet', NULL, 350.00, 'Uploads/DesignProducts/Radost & Roses Bouquet120.jpg', '2024-08-07 23:00:21', '2024-08-07 23:00:21'),
(32, 15, 1, 'Assorted Flowers Bouquet', NULL, 350.00, 'Uploads/DesignProducts/Assorted Flowers Bouquet285.jpg', '2024-08-07 23:01:23', '2024-08-07 23:01:23'),
(33, 15, 1, 'Imported Flower Bouquet', NULL, 2500.00, 'Uploads/DesignProducts/Imported Flower Bouquet607.jpg', '2024-08-07 23:02:22', '2024-08-07 23:02:22'),
(34, 15, 1, 'Imported Flower Bouquet', NULL, 2500.00, 'Uploads/DesignProducts/Imported Flower Bouquet277.jpg', '2024-08-07 23:02:29', '2024-08-07 23:02:29'),
(35, 15, 1, 'Roses Bouquet', '4 pcs ferrero rocher \r\nRed Roses \r\nPink Roses', 1800.00, 'Uploads/DesignProducts/Roses Bouquet876.jpg', '2024-08-07 23:05:35', '2024-08-07 23:05:35'),
(36, 15, 1, 'Imported Flower Bouquet', 'Sunflower\r\nCarnations\r\nLisianthius\r\nGerbera\r\nRadost\r\nGypsophila', 2800.00, 'Uploads/DesignProducts/Imported Flower Bouquet531.jpg', '2024-08-07 23:09:16', '2024-08-07 23:09:16'),
(37, 15, 1, 'Vase Arrangement', NULL, 2500.00, 'Uploads/DesignProducts/Vase Arrangement342.jpg', '2024-08-07 23:10:30', '2024-08-07 23:10:30'),
(38, 16, 1, 'Flower Basket', 'Wine\r\nChocolate\r\nDried Flowers', 2500.00, 'Uploads/DesignProducts/Flower Basket259.jpg', '2024-08-07 23:17:26', '2024-08-07 23:17:26'),
(39, 16, 1, 'Alcohol Basket', 'Wine\r\nChocolate\r\nDried Flowers', 2000.00, 'Uploads/DesignProducts/Alcohol Basket905.jpg', '2024-08-07 23:23:02', '2024-08-07 23:23:02'),
(40, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 2500.00, 'Uploads/DesignProducts/Flower Bouquet206.jpg', '2024-08-07 23:24:13', '2024-08-07 23:24:13'),
(41, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 2500.00, 'Uploads/DesignProducts/Flower Bouquet541.jpg', '2024-08-07 23:24:48', '2024-08-07 23:24:48'),
(42, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 2500.00, 'Uploads/DesignProducts/Flower Bouquet182.jpg', '2024-08-07 23:25:20', '2024-08-07 23:25:20'),
(43, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 2500.00, 'Uploads/DesignProducts/Flower Bouquet977.jpg', '2024-08-07 23:25:42', '2024-08-07 23:25:42'),
(44, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 2000.00, 'Uploads/DesignProducts/Flower Bouquet871.jpg', '2024-08-07 23:26:23', '2024-08-07 23:26:23'),
(45, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 2000.00, 'Uploads/DesignProducts/Flower Bouquet280.jpg', '2024-08-07 23:26:41', '2024-08-07 23:26:41'),
(46, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1000.00, 'Uploads/DesignProducts/Flower Bouquet188.jpg', '2024-08-07 23:27:01', '2024-08-07 23:27:01'),
(47, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1000.00, 'Uploads/DesignProducts/Flower Bouquet837.jpg', '2024-08-07 23:27:20', '2024-08-07 23:27:20'),
(48, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1500.00, 'Uploads/DesignProducts/Flower Bouquet334.jpg', '2024-08-07 23:27:44', '2024-08-07 23:27:44'),
(49, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1500.00, 'Uploads/DesignProducts/Flower Bouquet967.jpg', '2024-08-07 23:28:02', '2024-08-07 23:28:02'),
(50, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1500.00, 'Uploads/DesignProducts/Flower Bouquet872.jpg', '2024-08-07 23:28:17', '2024-08-07 23:28:17'),
(51, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1000.00, 'Uploads/DesignProducts/Flower Bouquet310.jpg', '2024-08-07 23:28:49', '2024-08-07 23:28:49'),
(52, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1000.00, 'Uploads/DesignProducts/Flower Bouquet380.jpg', '2024-08-07 23:29:11', '2024-08-07 23:29:11'),
(53, 16, 1, 'Flower Bouquet', 'Wine\r\nChocolate\r\nDried Flowers', 1000.00, 'Uploads/DesignProducts/Flower Bouquet545.jpg', '2024-08-07 23:29:52', '2024-08-07 23:29:52'),
(54, 16, 1, 'Money Bouquet', NULL, 1500.00, 'Uploads/DesignProducts/Money Bouquet255.jpg', '2024-08-07 23:33:00', '2024-08-07 23:33:00'),
(55, 16, 1, 'Money Bouquet', NULL, 1000.00, 'Uploads/DesignProducts/Money Bouquet461.jpg', '2024-08-07 23:33:19', '2024-08-07 23:33:19'),
(56, 16, 1, 'Money Bouquet', NULL, 1000.00, 'Uploads/DesignProducts/Money Bouquet732.jpg', '2024-08-07 23:33:51', '2024-08-07 23:33:51'),
(57, 17, 1, 'Flower Bouquet', NULL, 800.00, 'Uploads/DesignProducts/Flower Bouquet506.jpg', '2024-08-15 12:42:41', '2024-08-15 12:42:41'),
(58, 17, 1, 'Flower Bouquet', NULL, 800.00, 'Uploads/DesignProducts/Flower Bouquet530.jpg', '2024-08-15 12:43:07', '2024-08-15 12:43:07'),
(59, 17, 1, 'Flower Bouquet', NULL, 500.00, 'Uploads/DesignProducts/Flower Bouquet428.jpg', '2024-08-15 12:43:36', '2024-08-15 12:43:36'),
(60, 17, 1, 'Flower Bouquet', NULL, 700.00, 'Uploads/DesignProducts/Flower Bouquet223.jpg', '2024-08-15 12:43:59', '2024-08-15 12:43:59'),
(61, 17, 1, 'Flower Bouquet', NULL, 1300.00, 'Uploads/DesignProducts/Flower Bouquet662.jpg', '2024-08-15 12:44:27', '2024-08-15 12:44:27'),
(62, 17, 1, 'Flower Bouquet', NULL, 600.00, 'Uploads/DesignProducts/Flower Bouquet509.jpg', '2024-08-15 12:44:49', '2024-08-15 12:44:49'),
(63, 17, 1, 'Flower Bouquet', NULL, 600.00, 'Uploads/DesignProducts/Flower Bouquet589.jpg', '2024-08-15 12:45:13', '2024-08-15 12:45:13'),
(64, 34, 1, 'Flower Bouquet', NULL, 350.00, 'Uploads/DesignProducts/Flower Bouquet332.jpg', '2024-08-21 10:23:25', '2024-08-21 10:23:25'),
(65, 34, 1, 'Flower Bouquet', NULL, 500.00, 'Uploads/DesignProducts/Flower Bouquet746.jpg', '2024-08-21 10:24:29', '2024-08-21 10:24:29'),
(66, 34, 1, 'Flower Bouquet', NULL, 800.00, 'Uploads/DesignProducts/Flower Bouquet620.jpg', '2024-08-21 10:24:48', '2024-08-21 10:24:48'),
(67, 34, 1, 'Flower Bouquet', NULL, 1700.00, 'Uploads/DesignProducts/Flower Bouquet610.jpg', '2024-08-21 10:25:11', '2024-08-21 10:25:11'),
(68, 34, 1, 'Flower Bouquet', NULL, 2000.00, 'Uploads/DesignProducts/Flower Bouquet460.jpg', '2024-08-21 10:25:30', '2024-08-21 10:25:30'),
(69, 34, 1, 'Flower Bouquet', NULL, 1500.00, 'Uploads/DesignProducts/Flower Bouquet717.jpg', '2024-08-21 10:25:50', '2024-08-21 10:25:50'),
(70, 34, 1, 'Flower Bouquet', NULL, 400.00, 'Uploads/DesignProducts/Flower Bouquet201.jpg', '2024-08-21 10:26:18', '2024-08-21 10:26:18'),
(71, 34, 1, 'Flower Bouquet', NULL, 400.00, 'Uploads/DesignProducts/Flower Bouquet718.jpg', '2024-08-21 10:26:35', '2024-08-21 10:26:35'),
(72, 34, 1, 'Flower Bouquet', NULL, 1000.00, 'Uploads/DesignProducts/Flower Bouquet947.jpg', '2024-08-21 10:26:58', '2024-08-21 10:26:58'),
(73, 34, 1, 'Flower Stand', NULL, 2000.00, 'Uploads/DesignProducts/Flower Stand425.jpg', '2024-08-21 10:27:21', '2024-08-21 10:27:21'),
(74, 34, 1, 'Flower Stand', NULL, 1000.00, 'Uploads/DesignProducts/Flower Stand128.jpg', '2024-08-21 10:27:45', '2024-08-21 10:27:45');

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
(11, 'Krystianne', 'Upload/Files/Krystianne.jpg', 'Iligan City', '10th east, tubod, iligan city', 'Upload/Files/Krystianne.pdf', '09705351560', NULL, 12, 1, '2024-06-27 06:55:54', '2024-06-27 06:56:33'),
(12, 'JK Flower Shoppe', 'Upload/Files/JK Flower Shoppe.jpg', 'Iligan City', 'Roxas Avenue National Highway', 'Upload/Files/JK Flower Shoppe.pdf', '09272776779', NULL, 15, 1, '2024-08-05 02:10:21', '2024-08-05 02:17:13'),
(13, 'Paculba Flowershop', 'Upload/Files/Paculba Flowershop.jpg', 'Iligan City', 'G/F Alfecu Incorporated Bldg., Quezon Ave., Villaverde', 'Upload/Files/Paculba Flowershop.pdf', '09653827875', NULL, 16, 1, '2024-08-07 00:28:42', '2024-08-07 00:35:55'),
(14, 'Gloy\'s Flower Shop', 'Upload/Files/Gloy\'s Flower Shop.jpg', 'Iligan City', 'G/F Garcia bldg. Echiverri-Quezon Avenue, Poblacion', 'Upload/Files/Gloy\'s Flower Shop.pdf', '09359028311', NULL, 17, 1, '2024-08-15 12:28:05', '2024-08-15 12:29:38'),
(15, 'M-M Gifts & Flowershop Supplies', 'Upload/Files/M-M Gifts & Flowershop Supplies.jpg', 'Iligan City', 'G/F Hermoso Bldg., Mariano Badelles St.', 'Upload/Files/M-M Gifts & Flowershop Supplies.pdf', '09355923674', NULL, 34, 1, '2024-08-21 10:21:05', '2024-08-21 10:22:22');

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
(14, 'Hanzo', 'hanzo@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$A7kO5WZtxtw5QJalPGT11eGGoiBBJAT9cNry3d/cbkG1ESn2mUrrm', NULL, '2024-06-08 07:45:37', '2024-06-27 06:27:19'),
(15, 'nestor', 'nestor@gmail.com', 2, 1, NULL, 'nestor123', '$2y$10$ertHytZWITWPaVUabIH2NO5QMPwuTEobzrtEfAV3M1SXVepXPeBWq', NULL, '2024-08-04 21:32:35', '2024-08-05 01:55:31'),
(16, 'Nida Lyn Paculba', 'nidapaculba@gmail.com', 2, 1, NULL, 'paculbanida', '$2y$10$MnpaAfdygIvurmZcC3ueZOAeNwjkrpXrA5tIL8mcEebjvbzrn/IZy', NULL, '2024-08-06 23:31:48', '2024-08-06 23:34:04'),
(17, 'ranilo areja navales', 'navalesranilo@gmail.com', 2, 1, NULL, 'arejanavales', '$2y$10$dd2Hkn0fwKY0gP.gRwMete7rCWNjhvuu3AndBkM9enKUXjXdIv62K', NULL, '2024-08-15 12:18:31', '2024-08-15 12:21:24'),
(18, 'Jasfer Levin Eltanal', 'j.eltanal@gmail.com', 2, 1, NULL, 'geltanal', '$2y$10$wgRlJ5zaWettjDCvzaX06.h45kGugs.is3wTlJAJo7T7DPdC2AAem', NULL, '2024-08-15 12:50:50', '2024-08-15 12:54:55'),
(19, 'Kathlyne Carpentero', 'carpentero5@gmail.com', 2, 1, NULL, 'alkathlyne', '$2y$10$wnoV0ZnWfWpChaD70Mn/X.PsrZsZ3YIbRvBrTTO5Io0IIX5lfPDdS', NULL, '2024-08-15 12:52:17', '2024-08-15 12:55:08'),
(20, 'Abdul Rauf Balt', 'raufbalt@gmail.com', 2, 1, NULL, 'rauf0819', '$2y$10$s2EAkYnP024dTNzA5bAxGecqzi3Ueij4VicnSEfMI7nQM.tyIT7r2', NULL, '2024-08-15 12:53:49', '2024-08-15 12:55:22'),
(21, 'Darlyn Grace Barbon', 'barbon@gmail.com', 2, 1, NULL, 'darlynbarbon', '$2y$10$ggVJodsKdK9MbGG.GRgRseITuzCMWN7k8NGz8ct9A5fEwe4Br.9O2', NULL, '2024-08-15 21:39:31', '2024-08-15 22:26:16'),
(22, 'anne marie christine redoblado', 'marie.redoblado@gmail.com', 2, 1, NULL, 'redobladomarie', '$2y$10$r8a17qMNs7KQnkDd0h6p3ePXySF9JccT.fDpDjPr1iqOPXuf2mgRS', NULL, '2024-08-15 21:56:06', '2024-08-15 22:36:13'),
(23, 'reham ayonan', 'ayonan@gmail.com', 2, 1, NULL, 'redobladomarie', '$2y$10$gT4DpLx4yMkiJOXJdC0A5e2dCahN1w1CmCrXRS6JJfhPRK27hFID.', NULL, '2024-08-15 22:03:44', '2024-08-15 22:39:25'),
(24, 'kenno rey tabamo', 'kennorey@gmail.com', 2, 1, NULL, 'kenno', '$2y$10$oUsskBNh2DmF2ok1atwNZeVzEuK1nKA2ay3qUHqC7P.sp0IAu.SIC', NULL, '2024-08-15 22:07:14', '2024-08-15 22:41:23'),
(25, 'maria jamaica consenillo', 'jamaica@gmail.com', 2, 1, NULL, 'consenillo', '$2y$10$vjmXVXPGFa0b89JYie9QQuZ/yNSdMS2V.evifluwbzO4QtIsLNsO6', NULL, '2024-08-15 22:10:06', '2024-08-15 22:41:43'),
(26, 'johairah sansarona', 'sansarona@gmail.com', 2, 1, NULL, 'johairah', '$2y$10$b33uB0rflQWg2JoiNwltTeC.3q2gMUxsjxoOOrEV0eDn1PJ8SzkL6', NULL, '2024-08-15 22:11:14', '2024-08-15 22:41:56'),
(27, 'safiyya ramos', 'ramos@gmail.com', 2, 1, NULL, 'safiyyaramos', '$2y$10$MOgc/wmbJdfzTyepQMiN2easgD3y.jHSWNkxGh9Oh2oblGTsOQ0EO', NULL, '2024-08-15 22:12:08', '2024-08-15 22:42:19'),
(28, 'sohaine dekire', 'sohainedekire@gmail.com', 2, 1, NULL, 'sohaine123', '$2y$10$XG0wXehQDOiNIZwZOgtx8OZROY35FW831u7QyCBPVYsXGOkwf.Lqm', NULL, '2024-08-15 22:13:04', '2024-08-15 22:42:55'),
(29, 'maia norvymel pangatungan', 'mariapangatungan@gmail.com', 2, 1, NULL, 'norvymelmaria', '$2y$10$OApHZVCBtGGuK.b1WTK9se1ztQHiB6Li7SFa6RJer9quIUbn5kr7i', NULL, '2024-08-15 22:14:19', '2024-08-15 22:43:10'),
(30, 'norhanifah dipatuan', 'dipatuan@gmail.com', 2, 1, NULL, 'norhanifahdip', '$2y$10$Z7H1DxwYlUfj4ibcEBQ0puNJbQGJd/zvx/o2TZ8gSP0MjTjPRIQ7C', NULL, '2024-08-15 22:16:08', '2024-08-15 22:43:36'),
(31, 'norjana sarip', 'norjana@gmail.com', 2, 1, NULL, 'norjanasarip', '$2y$10$fVALNl5m5hxOLxvxQv/N4.kK8LQ/2hk0v7ELO6i78HeMmYlVRuqkq', NULL, '2024-08-15 22:17:24', '2024-08-15 22:43:56'),
(32, 'sydney colobio', 'sydcolobio@gmail.com', 2, 1, NULL, 'sydneyreuyan', '$2y$10$nr06nuVkoYCI0AP85I9lTemSwQzsFjSh2zqCAuoeMLLueRAEILH2i', NULL, '2024-08-15 22:18:39', '2024-08-15 22:44:09'),
(33, 'mark delacoste', 'delacoste@gmail.com', 2, 1, NULL, 'koykoydelacoste', '$2y$10$PNtWHaex67I/cwSmDomd7uXPpPt0ST1CcEqA8RqinfgdAKwIX3Jri', NULL, '2024-08-15 22:19:43', '2024-08-15 22:44:34'),
(34, 'rey', 'mmflower@gmail.com', 2, 1, NULL, 'mflowers1', '$2y$10$SN5v1FaBhZ/vobqMO.yE2.Cj2w6JuMWitkZ2NhxLs21wX0pF6Yzbi', NULL, '2024-08-21 10:16:21', '2024-08-21 10:17:34');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `tbl_income`
--
ALTER TABLE `tbl_income`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_order_status`
--
ALTER TABLE `tbl_order_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_product_design`
--
ALTER TABLE `tbl_product_design`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `tbl_shop_register`
--
ALTER TABLE `tbl_shop_register`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

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
