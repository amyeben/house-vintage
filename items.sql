-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 12 juil. 2023 à 16:43
-- Version du serveur :  5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `the_vintage_house`
--

-- --------------------------------------------------------

--
-- Structure de la table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `categorie` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `src_image` varchar(255) DEFAULT NULL,
  `description` text,
  `auction_items` tinyint(1) DEFAULT NULL,
  `price_items` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `items`
--

INSERT INTO `items` (`id`, `seller_id`, `categorie`, `name`, `src_image`, `description`, `auction_items`, `price_items`) VALUES
(1, 1, 'clothing', 'Article 1', '/../public/img/imgClothing/imgJacket/jacket1.webp', 'Description de l\'article 1', 0, '44'),
(2, 1, 'clothing', 'Article 2', '/../public/img/imgClothing/imgJacket/jacket2.webp', 'Description de l\'article 2', 0, '60'),
(3, 1, 'clothing', 'Article 3', '/../public/img/imgClothing/imgJacket/jacket3.jpeg', 'Description de l\'article 3', 0, '80'),
(4, 1, 'clothing', 'Article 4', '/../public/img/imgClothing/imgPants/pant2.png', 'Description de l\'article 4', 0, '65'),
(5, 1, 'clothing', 'Article 5', '/../public/img/imgClothing/imgPants/pant3.png', 'Description de l\'article 5', 0, '100'),
(6, 1, 'clothing', 'Article 6', '/../public/img/imgClothing/imgPants/pants.png', 'Description de l\'article 6', 0, '55'),
(7, 1, 'accessories', 'Article 1', '/../public/img/imgAccessories/necklace1.webp', 'Description de l\'article 1', 0, '30'),
(8, 1, 'accessories', 'Article 2', '/../public/img/imgAccessories/necklace2.webp', 'Description de l\'article 2', 0, '40'),
(9, 1, 'accessories', 'Article 3', '/../public/img/imgAccessories/necklace3.png', 'Description de l\'article 3', 0, '50'),
(10, 1, 'accessories', 'Article 4', '/../public/img/imgAccessories/necklace4.png', 'Description de l\'article 4', 0, '45'),
(11, 1, 'accessories', 'Article 5', '/../public/img/imgAccessories/necklace5.png', 'Description de l\'article 5', 0, '60'),
(12, 1, 'footwear', 'Article 1', '/../public/img/imgFootwear/fw1.webp', 'Description de l\'article 1', 0, '75'),
(13, 1, 'footwear', 'Article 2', '/../public/img/imgFootwear/fw2.png', 'Description de l\'article 2', 0, '90'),
(14, 1, 'footwear', 'Article 3', '/../public/img/imgFootwear/fw3.png', 'Description de l\'article 3', 0, '100'),
(15, 1, 'footwear', 'Article 4', '/../public/img/imgFootwear/fw4.webp', 'Description de l\'article 4', 0, '70'),
(16, 1, 'footwear', 'Article 5', '/../public/img/imgFootwear/fw5.png', 'Description de l\'article 5', 0, '80'),
(17, 1, 'books', 'Article 1', '/../public/img/imgBooksAndMagasine/book1.png', 'Description de l\'article 1', 0, '35'),
(18, 1, 'books', 'Article 2', '/../public/img/imgBooksAndMagasine/book2.png', 'Description de l\'article 2', 0, '50'),
(19, 1, 'books', 'Article 3', '/../public/img/imgBooksAndMagasine/map3.png', 'Description de l\'article 3', 0, '60'),
(20, 1, 'books', 'Article 4', '/../public/img/imgBooksAndMagasine/manga4.jpeg', 'Description de l\'article 4', 0, '40'),
(21, 1, 'books', 'Article 5', '/../public/img/imgBooksAndMagasine/manga5.png', 'Description de l\'article 5', 0, '50'),
(22, 1, 'electronics', 'Article 1', '/../public/img/imgElectronics/camera.png', 'Description de l\'article 1', 0, '200'),
(23, 1, 'electronics', 'Article 2', '/../public/img/imgElectronics/console.webp', 'Description de l\'article 2', 0, '300'),
(24, 1, 'electronics', 'Article 3', '/../public/img/imgElectronics/recordplayer.png', 'Description de l\'article 3', 0, '250'),
(25, 1, 'electronics', 'Article 4', '/../public/img/imgElectronics/telephone.png', 'Description de l\'article 4', 0, '180'),
(26, 1, 'electronics', 'Article 5', '/../public/img/imgElectronics/typewriters.png', 'Description de l\'article 4', 0, '180');
--
-- Index pour les tables déchargées
--

--
-- Index pour la table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
