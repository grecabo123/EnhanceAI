-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 05:59 PM
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
(11, '2024_04_27_054819_create_tbl_product_table', 6),
(13, '2024_04_27_071634_create_tbl_product_design_table', 7),
(14, '2024_04_29_132450_create_tbl_order_table', 8);

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
(14, 'App\\Models\\User', 2, 'admin@gmail.com_Admin', 'b17c4613294cdf11618ad82668cd2bc11abf59fdf54ffa1ffa4e16dfe12d0847', '[\"server:admin\"]', '2024-04-21 03:44:59', '2024-04-21 02:39:53', '2024-04-21 03:44:59'),
(16, 'App\\Models\\User', 2, 'admin@gmail.com_Admin', '916eb599a2cf129d1809ffbb7cb9536fb7b4c5fc8d5ea1fe5a39414d0880d132', '[\"server:admin\"]', '2024-04-28 03:52:25', '2024-04-28 03:51:01', '2024-04-28 03:52:25'),
(17, 'App\\Models\\User', 3, 'kate@gmail.com_customer', '766b6922e0aa230ba346e458c0470efe0b8df5506b8e2a0406418e880cdf6efb', '[\"server:customer\"]', '2024-04-29 06:51:27', '2024-04-29 04:55:10', '2024-04-29 06:51:27'),
(19, 'App\\Models\\User', 6, 'sample_12@gmail.com_customer', '0c413a55460955b5a746606be6d3bf785cb5ae9067b2500ae23c930ab5b74d9b', '[\"server:customer\"]', '2024-04-29 07:09:32', '2024-04-29 06:23:41', '2024-04-29 07:09:32'),
(20, 'App\\Models\\User', 2, 'admin@gmail.com_Admin', 'a0569a6aebcc399f256053da5a91d82034d79b5ea95c49e683c64d935c7b4e71', '[\"server:admin\"]', '2024-04-29 06:59:21', '2024-04-29 06:31:16', '2024-04-29 06:59:21');

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
(2, '09705351560', 'Iligan City', 'Iligan City', 'Upload/ID/Kate Alacazar.jpg', 3, '2024-03-29 04:45:42', '2024-03-29 04:45:42'),
(3, '09705351560', 'Iligan City', 'Iligan City', 'Upload/ID/SAmple.png', 6, '2024-03-31 05:59:57', '2024-03-31 05:59:57');

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
(8, 'Kate Alacazar Has been Approved', 2, '2024-03-29 05:51:37', '2024-03-29 05:51:37'),
(9, 'SAmple Has been Approved', 2, '2024-03-31 06:06:32', '2024-03-31 06:06:32'),
(10, 'Request Form to a Flower Shop Sample Flower', 6, '2024-04-29 06:31:48', '2024-04-29 06:31:48'),
(11, 'SunFlower Updated Data', 6, '2024-04-29 06:38:57', '2024-04-29 06:38:57');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from_user` bigint(20) UNSIGNED NOT NULL,
  `product_fk` bigint(20) UNSIGNED NOT NULL,
  `purchase_status` tinyint(4) NOT NULL DEFAULT '0',
  `to_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_contact` bigint(20) DEFAULT NULL,
  `messages` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_order`
--

INSERT INTO `tbl_order` (`id`, `from_user`, `product_fk`, `purchase_status`, `to_name`, `to_address`, `to_contact`, `messages`, `created_at`, `updated_at`) VALUES
(1, 6, 2, 0, NULL, NULL, NULL, NULL, '2024-04-29 05:49:10', '2024-04-29 05:49:10'),
(2, 3, 3, 0, NULL, NULL, NULL, NULL, '2024-04-29 06:45:55', '2024-04-29 06:45:55');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `number_pcs` bigint(20) NOT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_product` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `user_fk`, `number_pcs`, `product_name`, `file_product`, `created_at`, `updated_at`) VALUES
(1, 3, 55, 'Roses', 'Uploads/Flowers/Roses223.jpeg', '2024-04-26 21:59:54', '2024-04-28 02:05:39'),
(2, 3, 100, 'Tulips', 'Uploads/Flowers/Tulips498.jpg', '2024-04-26 22:12:27', '2024-04-26 22:12:27'),
(3, 6, 40, 'SunFlower', 'Uploads/Flowers/Sun Flower883.jpeg', '2024-04-29 06:38:24', '2024-04-29 06:38:57');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_design`
--

CREATE TABLE `tbl_product_design` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(10,2) NOT NULL,
  `file_product_design` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_product_design`
--

INSERT INTO `tbl_product_design` (`id`, `user_fk`, `status`, `product_name`, `description`, `price`, `file_product_design`, `created_at`, `updated_at`) VALUES
(1, 3, 1, '12 Roses', '12 roses is a testament to nature\'s beauty and the artistry of floristry. It\'s a gift that delights the senses, uplifts the spirit, and symbolizes the depth of emotion shared between the giver and the recipient.it\'s for a special occasion or just to brighten someone\'s day, roses have a timeless appeal. Each rose can represent something meaningful, making it a thoughtful gift.', 680.00, 'Uploads/DesignProducts/12 Roses817.jpg', '2024-04-26 23:29:42', '2024-04-26 23:29:42'),
(2, 3, 1, '12 tulips bouquet', 'The most known meaning of tulips is perfect and deep love. As tulips are a classic flower that has been loved by many for centuries they have been attached with the meaning of love. They\'re ideal to give to someone who you have a deep, unconditional love for, whether it\'s your partner, children, parents or siblings.', 2580.00, 'Uploads/DesignProducts/12 tulips bouquet877.jpg', '2024-04-29 05:13:11', '2024-04-29 05:13:11'),
(3, 6, 1, '12 Roses with sunflower', 'The Bouquet of Red Roses and Sunflowers is the perfect gift to communicate loyal love. This is because roses are a symbol of love and passion and sunflowers symbolize loyalty and vitality. Flowers have always been a unique way to communicate, a way that allows you to give memorable emotions.', 3500.00, 'Uploads/DesignProducts/12 Roses with sunflower888.jpeg', '2024-04-29 06:41:15', '2024-04-29 06:41:15');

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
(3, 'Kate Flower Shop', 'Upload/Files/Kate Flower Shop.png', 'Iligan City', 'Iligan City', 'Upload/Files/Kate Flower Shop.pdf', '097434234234', NULL, 3, 1, '2024-04-05 18:04:03', '2024-04-21 03:40:57'),
(4, 'Sample Flower', 'Upload/Files/Sample Flower.png', 'Iligan City', 'Iligan City', 'Upload/Files/Sample Flower.pdf', '097434234234', NULL, 6, 1, '2024-04-29 06:31:48', '2024-04-29 06:36:22');

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
(3, 'Kate Alacazar', 'kate@gmail.com', 2, 1, NULL, 'katealcazar', '$2y$10$ikrciPvzyzta3prH.o2btOfqpcB6hDXlLypRlcTu8Dr0uccQH8Ox.', NULL, '2024-03-29 04:45:42', '2024-04-21 03:35:00'),
(6, 'SAmple', 'sample_12@gmail.com', 2, 1, NULL, 'sample123', '$2y$10$CfnzgcXlZ/.axTPN6YJhMOQVbS0U3p5Mk9GdGdxn1JuweXFdb9AJq', NULL, '2024-03-31 05:59:57', '2024-03-31 06:06:32');

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
  ADD KEY `tbl_order_product_fk_foreign` (`product_fk`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_product_design`
--
ALTER TABLE `tbl_product_design`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_shop_register`
--
ALTER TABLE `tbl_shop_register`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD CONSTRAINT `tbl_contact_ibfk_1` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
