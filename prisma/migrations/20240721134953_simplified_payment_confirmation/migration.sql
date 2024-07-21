-- AlterTable
ALTER TABLE `payment_confirmations` ADD COLUMN `status` ENUM('PENDING', 'CONFIRMED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    MODIFY `confirmedAt` DATETIME(3) NULL;
