-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2024 at 06:58 PM
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
(18, '2024_04_29_132450_create_tbl_order_table', 11);

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
(43, 'App\\Models\\User', 13, 'john@gmail.com_customer', '6018073559f420308d25919009fa87769b4c3460d181a17971fa11cfee250430', '[\"server:customer\"]', '2024-06-08 08:36:42', '2024-06-08 06:36:13', '2024-06-08 08:36:42'),
(49, 'App\\Models\\User', 14, 'hanzo@gmail.com_customer', '1641197c961fbb364fb1a1f7294c8709ee4ec01b264d6cae4a4e39fec467032f', '[\"server:customer\"]', '2024-06-08 08:20:25', '2024-06-08 07:52:09', '2024-06-08 08:20:25');

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
(3, 15, 3640.00, NULL, 13, '2024-06-08 08:16:55', '2024-06-08 08:16:55');

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
(34, 'Your Invoice # 54420 ', 14, '2024-06-08 08:03:46', '2024-06-08 08:03:46');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_user` bigint(20) UNSIGNED NOT NULL,
  `product_fk` bigint(20) UNSIGNED NOT NULL,
  `to_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_contact` bigint(20) DEFAULT NULL,
  `messages` longtext COLLATE utf8mb4_unicode_ci,
  `purchase_status` tinyint(4) NOT NULL DEFAULT '0',
  `owner_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_order`
--

INSERT INTO `tbl_order` (`id`, `invoice_id`, `from_user`, `product_fk`, `to_name`, `to_address`, `to_contact`, `messages`, `purchase_status`, `owner_fk`, `created_at`, `updated_at`) VALUES
(5, '46671', 10, 12, NULL, NULL, NULL, NULL, 0, 9, '2024-06-08 03:38:53', '2024-06-08 03:38:53'),
(7, '63850', 10, 12, NULL, NULL, NULL, '5 roses and 7 sunflower.', 1, 9, '2024-06-08 03:43:40', '2024-06-08 03:59:37'),
(8, '77656', 11, 12, 'Sample', 'Quezon Avenue Extension, Iligan City', 9756789567, '5 red roses tapos with sunflower isa ka buok,, then pa deliver dayun ko sa iyaha.', 1, 9, '2024-06-08 07:09:39', '2024-06-08 07:14:35'),
(9, '54420', 14, 15, 'Alex', 'Quezon Avenue Extension, Iligan City', 9176924203, 'Pa Customize ko sa flower, gusto nko is naai 6 ka tulips , 4 ka red roses ,tapos 2 sun flower..\n\nTapos e Deliver nimo sa kana nga tao.', 1, 13, '2024-06-08 08:03:46', '2024-06-08 08:16:55');

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
(9, 14, 100, 'Red Roses', 60.00, 'Uploads/Flowers/Red Roses325.jpg', '2024-06-08 07:54:59', '2024-06-08 07:54:59');

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
(10, 'Hanzo Flower Shop', 'Upload/Files/Hanzo Flower Shop.jpg', 'Iligan City', 'Roxas Avenue Villa Verde, Iligan City', 'Upload/Files/Hanzo Flower Shop.pdf', '097434234234', NULL, 14, 1, '2024-06-08 07:49:31', '2024-06-08 07:51:08');

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
(10, 'Daryl Nicole', 'daryl@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$koKDDqCZ2RSkK.IWEBsPD.ZKRexm57DX6eJBNWkjJnoh2lD60Qh7i', NULL, '2024-06-08 00:16:18', '2024-06-08 00:21:50'),
(11, 'Kate Alcazar', 'kate@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$3yIKiHQd.o8gxsdbUZZSTudGdppZea.feeR851UTzsih6o7mbg7jK', NULL, '2024-06-08 00:19:41', '2024-06-08 00:21:58'),
(12, 'Shiela Arganda', 'shiela@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$GgYWrZVKghbi8Jnz3wPSrO1HfU9djn445XNemEF/.uqTaj645B5n.', NULL, '2024-06-08 00:21:10', '2024-06-08 00:22:06'),
(13, 'John Carl', 'john@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$6NvnUssbihXMadnexWC39e8glj0yChHC31lf9jAHHeRIOFXiFMraq', NULL, '2024-06-08 06:32:46', '2024-06-08 06:35:52'),
(14, 'Hanzo', 'hanzo@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$A7kO5WZtxtw5QJalPGT11eGGoiBBJAT9cNry3d/cbkG1ESn2mUrrm', NULL, '2024-06-08 07:45:37', '2024-06-08 07:46:51');

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_income`
--
ALTER TABLE `tbl_income`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_product_design`
--
ALTER TABLE `tbl_product_design`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_shop_register`
--
ALTER TABLE `tbl_shop_register`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
