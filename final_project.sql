/*
 Navicat Premium Data Transfer

 Source Server         : MySQLProject
 Source Server Type    : MySQL
 Source Server Version : 50724 (5.7.24)
 Source Host           : localhost:3306
 Source Schema         : final_project

 Target Server Type    : MySQL
 Target Server Version : 50724 (5.7.24)
 File Encoding         : 65001

 Date: 08/04/2023 10:35:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for booking
-- ----------------------------
DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking`  (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `travel_date` date NOT NULL,
  `travel_time` time NOT NULL,
  `origin_point` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `destination_point` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` int(11) NOT NULL,
  `bus_id` int(11) NOT NULL,
  PRIMARY KEY (`booking_id`) USING BTREE,
  INDEX `busbook`(`bus_id`) USING BTREE,
  CONSTRAINT `busbook` FOREIGN KEY (`bus_id`) REFERENCES `buses` (`bus_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of booking
-- ----------------------------
INSERT INTO `booking` VALUES (1, '2023-01-31', '10:00:00', 'test', 'test', 100, 1);
INSERT INTO `booking` VALUES (2, '2023-02-28', '18:01:55', 'a', 'a', 250, 4);
INSERT INTO `booking` VALUES (3, '2023-03-01', '10:00:00', 'test', 'test', 100, 2);
INSERT INTO `booking` VALUES (4, '2023-03-10', '10:00:00', 'มหาสารคาม', 'กรุงเทพ', 500, 2);

-- ----------------------------
-- Table structure for buses
-- ----------------------------
DROP TABLE IF EXISTS `buses`;
CREATE TABLE `buses`  (
  `bus_id` int(11) NOT NULL AUTO_INCREMENT,
  `bus_number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bus_seat` int(11) NOT NULL,
  `driver_id` int(11) NOT NULL,
  PRIMARY KEY (`bus_id`) USING BTREE,
  INDEX `busdriver`(`driver_id`) USING BTREE,
  CONSTRAINT `busdriver` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buses
-- ----------------------------
INSERT INTO `buses` VALUES (1, 'AB-123', 480, 2);
INSERT INTO `buses` VALUES (2, 'testapi', 30, 2);
INSERT INTO `buses` VALUES (3, 'กข-123', 38, 1);
INSERT INTO `buses` VALUES (4, 'กข-456', 36, 3);
INSERT INTO `buses` VALUES (21, 'กข-789', 34, 1);
INSERT INTO `buses` VALUES (22, 'asd', 123, 2);

-- ----------------------------
-- Table structure for driver
-- ----------------------------
DROP TABLE IF EXISTS `driver`;
CREATE TABLE `driver`  (
  `driver_id` int(11) NOT NULL AUTO_INCREMENT,
  `driver_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`driver_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of driver
-- ----------------------------
INSERT INTO `driver` VALUES (1, 'test');
INSERT INTO `driver` VALUES (2, 'นายเอ');
INSERT INTO `driver` VALUES (3, 'นายบี');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `F_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `L_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `booking_id` int(11) NOT NULL,
  `seat_number` int(11) NOT NULL,
  PRIMARY KEY (`order_id`) USING BTREE,
  INDEX `bookor`(`booking_id`) USING BTREE,
  CONSTRAINT `bookor` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, 'บี', 'ทดสอบ', '0123456789', 1, 2);
INSERT INTO `orders` VALUES (2, 'เอ', 'ทดสอบ', '0123456789', 1, 2);
INSERT INTO `orders` VALUES (3, 'จำเป็น', 'ทดสอบ', '0891472563', 2, 13);
INSERT INTO `orders` VALUES (4, '', 'จำเป็น', '0821423141', 4, 20);
INSERT INTO `orders` VALUES (5, 'วินัย', 'จำเป็น', '0871234567', 4, 11);
INSERT INTO `orders` VALUES (6, 'docker', 'test', '1234567890', 1, 1);

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment`  (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`payment_id`) USING BTREE,
  INDEX `or`(`order_id`) USING BTREE,
  CONSTRAINT `or` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
