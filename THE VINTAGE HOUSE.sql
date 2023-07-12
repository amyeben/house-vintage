DROP TABLE IF EXISTS `purchases`;
DROP TABLE IF EXISTS `offers_auctions`;
DROP TABLE IF EXISTS `auctions`;
DROP TABLE IF EXISTS `offers`;
DROP TABLE IF EXISTS `cart`;
DROP TABLE IF EXISTS `cart_items`;
DROP TABLE IF EXISTS `items`;
DROP TABLE IF EXISTS `admin`;
DROP TABLE IF EXISTS `customer`;
DROP TABLE IF EXISTS `seller`;
DROP TABLE IF EXISTS `sessions`;

CREATE TABLE sessions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  session_id VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  user_type VARCHAR(255) NOT NULL,
  expiry_timestamp TIMESTAMP NOT NULL
);

CREATE TABLE `seller` (
  `id` integer PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `address` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `customer` (
  `id` integer PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `address` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `admin` (
  `id` integer PRIMARY KEY,
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `items` (
  `id` integer PRIMARY KEY,
  `seller_id` integer,
  `categorie` varchar(255),
  `name` varchar(255),
  `src_image` varchar(255),
  `description` text,
  `auction_items` boolean
);

CREATE TABLE `cart_items` (
  `id` integer PRIMARY KEY,
  `cart_id` integer,
  `item_id` integer,
  `customer_id` integer,
  `quantity` integer,
  `price` decimal
);

CREATE TABLE `cart` (
  `id` integer PRIMARY KEY,
  `customer_id` integer,
  `created_at` timestamp
);

CREATE TABLE `offers` (
  `id` integer PRIMARY KEY,
  `customer_id` integer,
  `item_id` integer,
  `number_offer` integer,
  `quantity` integer,
  `date` timestamp,
  `price_offer` decimal
);

CREATE TABLE `auctions` (
  `id` integer PRIMARY KEY,
  `seller_id` integer,
  `item_id` integer,
  `max_price` decimal,
  `start_time` timestamp,
  `end_time` timestamp
);

CREATE TABLE `offers_auctions` (
  `id` integer PRIMARY KEY,
  `customer_id` integer,
  `auction_id` integer,
  `quantity` integer,
  `price_offer` decimal,
  `date` timestamp
);

CREATE TABLE `purchases` (
  `item_id` integer,
  `customer_id` integer,
  `price` decimal,
  `created_at` timestamp
);

ALTER TABLE `items` ADD FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`item_id`) REFERENCES `items` (`id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

ALTER TABLE `cart` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

ALTER TABLE `offers` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

ALTER TABLE `offers` ADD FOREIGN KEY (`item_id`) REFERENCES `items` (`id`);

ALTER TABLE `auctions` ADD FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`);

ALTER TABLE `auctions` ADD FOREIGN KEY (`item_id`) REFERENCES `items` (`id`);

ALTER TABLE `offers_auctions` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

ALTER TABLE `offers_auctions` ADD FOREIGN KEY (`auction_id`) REFERENCES `auctions` (`id`);

ALTER TABLE `purchases` ADD FOREIGN KEY (`item_id`) REFERENCES `items` (`id`);

ALTER TABLE `purchases` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);
