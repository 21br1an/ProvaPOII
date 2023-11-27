/*
  Warnings:

  - The primary key for the `Lance` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lance" (
    "emailDono" TEXT NOT NULL PRIMARY KEY,
    "produtoLeilao" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_emailDono_fkey" FOREIGN KEY ("emailDono") REFERENCES "Usuario" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_produtoLeilao_fkey" FOREIGN KEY ("produtoLeilao") REFERENCES "Leilao" ("produto") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lance" ("emailDono", "produtoLeilao", "valor") SELECT "emailDono", "produtoLeilao", "valor" FROM "Lance";
DROP TABLE "Lance";
ALTER TABLE "new_Lance" RENAME TO "Lance";
CREATE UNIQUE INDEX "Lance_emailDono_key" ON "Lance"("emailDono");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
