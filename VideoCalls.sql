-- MariaDB dump 10.19  Distrib 10.10.3-MariaDB, for Linux (x86_64)
--
-- Host: console.cythero.com    Database: VideoCalls
-- ------------------------------------------------------
-- Server version	5.7.41-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment_text` varchar(512) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`),
  CONSTRAINT `Comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES
(17,'2023-01-20 17:30:10',1,1,'q'),
(27,'2023-01-20 18:33:18',2,1,'test 4'),
(28,'2023-01-20 18:33:46',2,1,'test 4'),
(29,'2023-01-20 18:33:50',2,1,'test 8'),
(30,'2023-01-20 18:34:03',2,1,'test 8'),
(34,'2023-01-20 18:35:27',2,1,'ttttttttt'),
(35,'2023-01-20 18:38:34',2,1,'testdimche'),
(36,'2023-01-20 19:08:08',1,1,'Sho ako napisham golelm komentar pogolem od ovaj nemozi da bidi samo proba test na komentarite da vidam so ke naprja so datata dali se ka fati ili ne'),
(37,'2023-01-20 19:36:25',2,1,''),
(38,'2023-01-20 19:38:49',2,1,'tes'),
(39,'2023-01-20 19:39:57',2,1,'test45'),
(40,'2023-01-20 19:51:49',2,1,'tes'),
(41,'2023-01-20 20:04:07',3,1,'test'),
(42,'2023-02-01 22:35:26',2,3,'Test na komentar'),
(43,'2023-02-02 22:27:25',1,1,'test');
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Countries`
--

DROP TABLE IF EXISTS `Countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `short_name` varchar(8) NOT NULL,
  `phone_code` varchar(8) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=242 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Countries`
--

LOCK TABLES `Countries` WRITE;
/*!40000 ALTER TABLE `Countries` DISABLE KEYS */;
INSERT INTO `Countries` VALUES
(1,'Afghanistan','AF','+93'),
(2,'Aland Islands','AX','+358'),
(3,'Albania','AL','+355'),
(4,'Algeria','DZ','+213'),
(5,'AmericanSamoa','AS','+1684'),
(6,'Andorra','AD','+376'),
(7,'Angola','AO','+244'),
(8,'Anguilla','AI','+1264'),
(9,'Antarctica','AQ','+672'),
(10,'Antigua and Barbuda','AG','+1268'),
(11,'Argentina','AR','+54'),
(12,'Armenia','AM','+374'),
(13,'Aruba','AW','+297'),
(14,'Australia','AU','+61'),
(15,'Austria','AT','+43'),
(16,'Azerbaijan','AZ','+994'),
(17,'Bahamas','BS','+1242'),
(18,'Bahrain','BH','+973'),
(19,'Bangladesh','BD','+880'),
(20,'Barbados','BB','+1246'),
(21,'Belarus','BY','+375'),
(22,'Belgium','BE','+32'),
(23,'Belize','BZ','+501'),
(24,'Benin','BJ','+229'),
(25,'Bermuda','BM','+1441'),
(26,'Bhutan','BT','+975'),
(27,'Bolivia, Plurinational State of','BO','+591'),
(28,'Bosnia and Herzegovina','BA','+387'),
(29,'Botswana','BW','+267'),
(30,'Brazil','BR','+55'),
(31,'British Indian Ocean Territory','IO','+246'),
(32,'Brunei Darussalam','BN','+673'),
(33,'Bulgaria','BG','+359'),
(34,'Burkina Faso','BF','+226'),
(35,'Burundi','BI','+257'),
(36,'Cambodia','KH','+855'),
(37,'Cameroon','CM','+237'),
(38,'Canada','CA','+1'),
(39,'Cape Verde','CV','+238'),
(40,'Cayman Islands','KY',' 345'),
(41,'Central African Republic','CF','+236'),
(42,'Chad','TD','+235'),
(43,'Chile','CL','+56'),
(44,'China','CN','+86'),
(45,'Christmas Island','CX','+61'),
(46,'Cocos (Keeling) Islands','CC','+61'),
(47,'Colombia','CO','+57'),
(48,'Comoros','KM','+269'),
(49,'Congo','CG','+242'),
(50,'Congo, The Democratic Republic of the Congo','CD','+243'),
(51,'Cook Islands','CK','+682'),
(52,'Costa Rica','CR','+506'),
(53,'Cote d\'Ivoire','CI','+225'),
(54,'Croatia','HR','+385'),
(55,'Cuba','CU','+53'),
(56,'Cyprus','CY','+357'),
(57,'Czech Republic','CZ','+420'),
(58,'Denmark','DK','+45'),
(59,'Djibouti','DJ','+253'),
(60,'Dominica','DM','+1767'),
(61,'Dominican Republic','DO','+1849'),
(62,'Ecuador','EC','+593'),
(63,'Egypt','EG','+20'),
(64,'El Salvador','SV','+503'),
(65,'Equatorial Guinea','GQ','+240'),
(66,'Eritrea','ER','+291'),
(67,'Estonia','EE','+372'),
(68,'Ethiopia','ET','+251'),
(69,'Falkland Islands (Malvinas)','FK','+500'),
(70,'Faroe Islands','FO','+298'),
(71,'Fiji','FJ','+679'),
(72,'Finland','FI','+358'),
(73,'France','FR','+33'),
(74,'French Guiana','GF','+594'),
(75,'French Polynesia','PF','+689'),
(76,'Gabon','GA','+241'),
(77,'Gambia','GM','+220'),
(78,'Georgia','GE','+995'),
(79,'Germany','DE','+49'),
(80,'Ghana','GH','+233'),
(81,'Gibraltar','GI','+350'),
(82,'Greece','GR','+30'),
(83,'Greenland','GL','+299'),
(84,'Grenada','GD','+1473'),
(85,'Guadeloupe','GP','+590'),
(86,'Guam','GU','+1671'),
(87,'Guatemala','GT','+502'),
(88,'Guernsey','GG','+44'),
(89,'Guinea','GN','+224'),
(90,'Guinea-Bissau','GW','+245'),
(91,'Guyana','GY','+595'),
(92,'Haiti','HT','+509'),
(93,'Holy See (Vatican City State)','VA','+379'),
(94,'Honduras','HN','+504'),
(95,'Hong Kong','HK','+852'),
(96,'Hungary','HU','+36'),
(97,'Iceland','IS','+354'),
(98,'India','IN','+91'),
(99,'Indonesia','ID','+62'),
(100,'Iran, Islamic Republic of Persian Gulf','IR','+98'),
(101,'Iraq','IQ','+964'),
(102,'Ireland','IE','+353'),
(103,'Isle of Man','IM','+44'),
(104,'Israel','IL','+972'),
(105,'Italy','IT','+39'),
(106,'Jamaica','JM','+1876'),
(107,'Japan','JP','+81'),
(108,'Jersey','JE','+44'),
(109,'Jordan','JO','+962'),
(110,'Kazakhstan','KZ','+77'),
(111,'Kenya','KE','+254'),
(112,'Kiribati','KI','+686'),
(113,'Korea, Democratic People\'s Republic of Korea','KP','+850'),
(114,'Korea, Republic of South Korea','KR','+82'),
(115,'Kuwait','KW','+965'),
(116,'Kyrgyzstan','KG','+996'),
(117,'Laos','LA','+856'),
(118,'Latvia','LV','+371'),
(119,'Lebanon','LB','+961'),
(120,'Lesotho','LS','+266'),
(121,'Liberia','LR','+231'),
(122,'Libyan Arab Jamahiriya','LY','+218'),
(123,'Liechtenstein','LI','+423'),
(124,'Lithuania','LT','+370'),
(125,'Luxembourg','LU','+352'),
(126,'Macao','MO','+853'),
(127,'Only Macedonia','MK','+389'),
(128,'Madagascar','MG','+261'),
(129,'Malawi','MW','+265'),
(130,'Malaysia','MY','+60'),
(131,'Maldives','MV','+960'),
(132,'Mali','ML','+223'),
(133,'Malta','MT','+356'),
(134,'Marshall Islands','MH','+692'),
(135,'Martinique','MQ','+596'),
(136,'Mauritania','MR','+222'),
(137,'Mauritius','MU','+230'),
(138,'Mayotte','YT','+262'),
(139,'Mexico','MX','+52'),
(140,'Micronesia, Federated States of Micronesia','FM','+691'),
(141,'Moldova','MD','+373'),
(142,'Monaco','MC','+377'),
(143,'Mongolia','MN','+976'),
(144,'Montenegro','ME','+382'),
(145,'Montserrat','MS','+1664'),
(146,'Morocco','MA','+212'),
(147,'Mozambique','MZ','+258'),
(148,'Myanmar','MM','+95'),
(149,'Namibia','NA','+264'),
(150,'Nauru','NR','+674'),
(151,'Nepal','NP','+977'),
(152,'Netherlands','NL','+31'),
(153,'Netherlands Antilles','AN','+599'),
(154,'New Caledonia','NC','+687'),
(155,'New Zealand','NZ','+64'),
(156,'Nicaragua','NI','+505'),
(157,'Niger','NE','+227'),
(158,'Nigeria','NG','+234'),
(159,'Niue','NU','+683'),
(160,'Norfolk Island','NF','+672'),
(161,'Northern Mariana Islands','MP','+1670'),
(162,'Norway','NO','+47'),
(163,'Oman','OM','+968'),
(164,'Pakistan','PK','+92'),
(165,'Palau','PW','+680'),
(166,'Palestinian Territory, Occupied','PS','+970'),
(167,'Panama','PA','+507'),
(168,'Papua New Guinea','PG','+675'),
(169,'Paraguay','PY','+595'),
(170,'Peru','PE','+51'),
(171,'Philippines','PH','+63'),
(172,'Pitcairn','PN','+872'),
(173,'Poland','PL','+48'),
(174,'Portugal','PT','+351'),
(175,'Puerto Rico','PR','+1939'),
(176,'Qatar','QA','+974'),
(177,'Romania','RO','+40'),
(178,'Russia','RU','+7'),
(179,'Rwanda','RW','+250'),
(180,'Reunion','RE','+262'),
(181,'Saint Barthelemy','BL','+590'),
(182,'Saint Helena, Ascension and Tristan Da Cunha','SH','+290'),
(183,'Saint Kitts and Nevis','KN','+1869'),
(184,'Saint Lucia','LC','+1758'),
(185,'Saint Martin','MF','+590'),
(186,'Saint Pierre and Miquelon','PM','+508'),
(187,'Saint Vincent and the Grenadines','VC','+1784'),
(188,'Samoa','WS','+685'),
(189,'San Marino','SM','+378'),
(190,'Sao Tome and Principe','ST','+239'),
(191,'Saudi Arabia','SA','+966'),
(192,'Senegal','SN','+221'),
(193,'Serbia','RS','+381'),
(194,'Seychelles','SC','+248'),
(195,'Sierra Leone','SL','+232'),
(196,'Singapore','SG','+65'),
(197,'Slovakia','SK','+421'),
(198,'Slovenia','SI','+386'),
(199,'Solomon Islands','SB','+677'),
(200,'Somalia','SO','+252'),
(201,'South Africa','ZA','+27'),
(202,'South Sudan','SS','+211'),
(203,'South Georgia and the South Sandwich Islands','GS','+500'),
(204,'Spain','ES','+34'),
(205,'Sri Lanka','LK','+94'),
(206,'Sudan','SD','+249'),
(207,'Suriname','SR','+597'),
(208,'Svalbard and Jan Mayen','SJ','+47'),
(209,'Swaziland','SZ','+268'),
(210,'Sweden','SE','+46'),
(211,'Switzerland','CH','+41'),
(212,'Syrian Arab Republic','SY','+963'),
(213,'Taiwan','TW','+886'),
(214,'Tajikistan','TJ','+992'),
(215,'Tanzania, United Republic of Tanzania','TZ','+255'),
(216,'Thailand','TH','+66'),
(217,'Timor-Leste','TL','+670'),
(218,'Togo','TG','+228'),
(219,'Tokelau','TK','+690'),
(220,'Tonga','TO','+676'),
(221,'Trinidad and Tobago','TT','+1868'),
(222,'Tunisia','TN','+216'),
(223,'Turkey','TR','+90'),
(224,'Turkmenistan','TM','+993'),
(225,'Turks and Caicos Islands','TC','+1649'),
(226,'Tuvalu','TV','+688'),
(227,'Uganda','UG','+256'),
(228,'Ukraine','UA','+380'),
(229,'United Arab Emirates','AE','+971'),
(230,'United Kingdom','GB','+44'),
(231,'United States','US','+1'),
(232,'Uruguay','UY','+598'),
(233,'Uzbekistan','UZ','+998'),
(234,'Vanuatu','VU','+678'),
(235,'Venezuela, Bolivarian Republic of Venezuela','VE','+58'),
(236,'Vietnam','VN','+84'),
(237,'Virgin Islands, British','VG','+1284'),
(238,'Virgin Islands, U.S.','VI','+1340'),
(239,'Wallis and Futuna','WF','+681'),
(240,'Yemen','YE','+967'),
(241,'Zambia','ZM','+260');
/*!40000 ALTER TABLE `Countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LikedPosts`
--

DROP TABLE IF EXISTS `LikedPosts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LikedPosts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `LikedPosts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`),
  CONSTRAINT `LikedPosts_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LikedPosts`
--

LOCK TABLES `LikedPosts` WRITE;
/*!40000 ALTER TABLE `LikedPosts` DISABLE KEYS */;
/*!40000 ALTER TABLE `LikedPosts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `image` varchar(128) NOT NULL,
  `text` varchar(512) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES
(1,1,'https://whatstrending.com/wp-content/uploads/2018/09/musk-thumbnail-2.jpg','Smoking weed at joe rogans. Really hope this doesn\'t go south.'),
(2,1,'https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2020/12/elon-musk-67.jpg','This is my very first post. I really hope this platform takes off.'),
(3,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(4,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(5,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(6,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(7,1,'https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2020/12/elon-musk-67.jpg','This is my very first post. I really hope this platform takes off.'),
(8,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(9,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(10,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(11,1,'https://whatstrending.com/wp-content/uploads/2018/09/musk-thumbnail-2.jpg','Smoking weed at joe rogans. Really hope this doesn\'t go south.'),
(12,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(13,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(14,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(15,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(16,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(17,1,'https://whatstrending.com/wp-content/uploads/2018/09/musk-thumbnail-2.jpg','Smoking weed at joe rogans. Really hope this doesn\'t go south.'),
(18,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(19,1,'https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2020/12/elon-musk-67.jpg','This is my very first post. I really hope this platform takes off.'),
(20,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(21,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(22,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(23,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(24,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(25,1,'https://whatstrending.com/wp-content/uploads/2018/09/musk-thumbnail-2.jpg','Smoking weed at joe rogans. Really hope this doesn\'t go south.'),
(26,1,'https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2020/12/elon-musk-67.jpg','This is my very first post. I really hope this platform takes off.'),
(27,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(28,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(29,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(30,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(31,1,'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/8/17/original/Elon-Musk-SpaceX.jpg','This is my very first post. I really hope this platform takes off.'),
(66,1,'posts/3nytqrEQl1N8K6FC.png','test'),
(67,1,'posts/GMim17SbwahD65EK.png','tedt');
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Purchases`
--

DROP TABLE IF EXISTS `Purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Purchases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `secret_code` varchar(64) NOT NULL,
  `confirmed` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `secret_code` (`secret_code`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Purchases_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Purchases`
--

LOCK TABLES `Purchases` WRITE;
/*!40000 ALTER TABLE `Purchases` DISABLE KEYS */;
INSERT INTO `Purchases` VALUES
(1,6,1000,'2023-01-16 18:30:33','hgawcnuxmsvacmzlntumevtjmnecpwtjdcxbfstsmzrksozvqxumuoeniqsdewki',0);
/*!40000 ALTER TABLE `Purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RoseTransactions`
--

DROP TABLE IF EXISTS `RoseTransactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RoseTransactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_id` int(11) NOT NULL,
  `to_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `from_id` (`from_id`),
  KEY `to_id` (`to_id`),
  CONSTRAINT `RoseTransactions_ibfk_1` FOREIGN KEY (`from_id`) REFERENCES `User` (`id`),
  CONSTRAINT `RoseTransactions_ibfk_2` FOREIGN KEY (`to_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RoseTransactions`
--

LOCK TABLES `RoseTransactions` WRITE;
/*!40000 ALTER TABLE `RoseTransactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `RoseTransactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ScheduledMeetings`
--

DROP TABLE IF EXISTS `ScheduledMeetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ScheduledMeetings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `participant_one_id` int(11) NOT NULL,
  `participant_two_id` int(11) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `meeting_key` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ScheduledMeetings`
--

LOCK TABLES `ScheduledMeetings` WRITE;
/*!40000 ALTER TABLE `ScheduledMeetings` DISABLE KEYS */;
INSERT INTO `ScheduledMeetings` VALUES
(1,4,1,'2021-10-24 08:58:34','2021-10-24 09:48:34','1234'),
(2,2,6,'2022-12-01 18:30:00','2022-12-01 19:30:00','1234'),
(3,5,6,'2022-12-04 12:00:00','2022-12-04 13:30:00','1234'),
(4,1,3,'2022-12-02 10:20:00','2022-12-02 11:50:00','1234'),
(5,2,3,'2022-12-03 04:20:00','2022-12-03 05:20:00','1234'),
(6,1,2,'2020-11-18 21:11:03','2020-11-18 21:12:03','1234'),
(7,1,2,'2023-02-14 21:11:03','2023-02-14 21:20:03','1234'),
(8,1,2,'2023-02-14 21:31:03','2023-02-14 21:50:03','1234'),
(9,2,3,'2023-02-14 21:31:03','2023-02-14 21:50:03','1234'),
(10,1,3,'2023-02-14 21:31:03','2023-02-14 21:50:03','1234'),
(11,1,3,'2023-02-15 21:31:03','2023-02-15 22:50:03','1234'),
(12,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(13,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(14,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(15,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(16,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(17,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(18,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(19,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(20,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(21,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(22,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(23,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(24,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(25,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(26,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(27,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(28,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(29,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(30,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(31,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(32,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(33,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(34,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(35,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(36,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(37,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(38,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(39,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(40,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(41,4,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(42,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(43,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(44,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(45,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(46,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(47,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(48,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(49,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(50,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(51,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(52,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(53,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(54,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(55,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(56,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(57,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(58,6,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(59,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(60,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(61,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(62,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(63,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(64,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(65,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(66,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(67,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(68,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(69,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(70,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(71,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(72,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(73,8,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(74,19,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(75,19,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(76,19,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(77,19,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(78,19,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(79,19,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(80,19,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(81,22,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(82,22,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(83,22,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(84,22,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234'),
(85,22,1,'2022-12-05 12:13:46','2022-12-05 13:13:46','1234');
/*!40000 ALTER TABLE `ScheduledMeetings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(64) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `create_date` datetime NOT NULL,
  `confirmation_number` int(11) NOT NULL,
  `confirmed` int(11) NOT NULL,
  `verified` int(11) NOT NULL,
  `bio` varchar(1024) NOT NULL,
  `profile_picture` varchar(512) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `charge_per_minute` int(11) NOT NULL,
  `balance` int(11) NOT NULL DEFAULT '0',
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `user_type_id` (`user_type_id`),
  KEY `country_id` (`country_id`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `UserTypes` (`id`),
  CONSTRAINT `User_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `Countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES
(1,'test@gmail.com','test','testovskii','test',5244475,'2022-10-30 17:12:31',1234,1,1,'Test bIO','',1,10,100,127),
(3,'test1@gmail.com','test','testovski','12345',524447,'2022-10-30 17:13:20',1234,1,1,'','',3,123,300,127),
(4,'test2@gmail.com','test','testovski','12345',524447,'2022-10-30 17:14:29',1234,1,1,'','',3,123,100,127),
(5,'test3@gmail.com','test','testovski','12345',524447,'2022-11-14 00:08:10',1234,1,1,'','',1,123,100,127),
(6,'dimitarveljanovski1@gmail.com','Dimitar','Veljanovski','TestPass123',78356657,'2022-11-14 17:56:16',1234,1,1,'','',3,123,300,127),
(7,'dimchepece@gmail.com','Dimche','Pece','12345678',77925955,'2023-01-16 16:47:42',1234,1,1,'','',1,123,100,1),
(8,'rizoski@gmail.com','Petar','Rizoski','12345678',77924944,'2023-01-16 17:26:47',1234,1,1,'','',3,123,300,1),
(9,'JOSN@GMAIL.COM','John ','snow','12345678',78777966,'2023-01-16 17:31:01',1234,1,1,'','',1,123,100,1),
(10,'pece@gmail.com','Testovski','test','12345678',112222345,'2023-01-16 17:35:21',1234,1,1,'','',1,123,100,1),
(19,'ralevskip@gmail.com','Petar','Ralevski','wE4O7fkB',77924944,'2023-01-16 17:57:25',291555,1,1,'','',3,123,300,1),
(22,'ralevski_p@yahoo.com','Petar','Ralevski','',77924933,'2023-01-16 18:55:50',1234,1,1,'','',3,123,300,1);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserLanguages`
--

DROP TABLE IF EXISTS `UserLanguages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserLanguages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `UserLanguages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserLanguages`
--

LOCK TABLES `UserLanguages` WRITE;
/*!40000 ALTER TABLE `UserLanguages` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserLanguages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserTypes`
--

DROP TABLE IF EXISTS `UserTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserTypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserTypes`
--

LOCK TABLES `UserTypes` WRITE;
/*!40000 ALTER TABLE `UserTypes` DISABLE KEYS */;
INSERT INTO `UserTypes` VALUES
(1,'User'),
(2,'Admin'),
(3,'Customer');
/*!40000 ALTER TABLE `UserTypes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-28 19:34:00
