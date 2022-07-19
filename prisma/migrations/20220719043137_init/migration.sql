-- CreateTable
CREATE TABLE `clube` (
    `id` INTEGER NOT NULL,
    `pais` VARCHAR(45) NOT NULL,
    `nome` VARCHAR(35) NOT NULL,
    `email` VARCHAR(35) NULL,
    `telefone` VARCHAR(15) NULL,
    `fax` VARCHAR(15) NULL,
    `imagem` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jogador` (
    `id` INTEGER NOT NULL,
    `clubeId` INTEGER NOT NULL,
    `nome` VARCHAR(150) NOT NULL,
    `email` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jogador` ADD CONSTRAINT `jogador_clubeId_fkey` FOREIGN KEY (`clubeId`) REFERENCES `clube`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
