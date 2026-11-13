CREATE TABLE `applicants` (
  `id` VARCHAR(191) NOT NULL,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `location` VARCHAR(80) NOT NULL,
  `designation` VARCHAR(100) NOT NULL,
  `passwordHash` VARCHAR(255) NOT NULL,
  `cvUrl` VARCHAR(2048) NOT NULL,
  `cvPublicId` VARCHAR(255) NOT NULL,
  `cvFileName` VARCHAR(255) NOT NULL,
  `cvFileSize` INTEGER NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  UNIQUE INDEX `applicants_email_key` (`email`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
