/*
  Warnings:

  - You are about to drop the column `orgin` on the `Url` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Url.orgin_unique";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "target" TEXT NOT NULL,
    "hits" INTEGER NOT NULL DEFAULT 0,
    "creatorId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Url" ("id", "target", "hits", "creatorId", "createdAt", "upatedAt") SELECT "id", "target", "hits", "creatorId", "createdAt", "upatedAt" FROM "Url";
DROP TABLE "Url";
ALTER TABLE "new_Url" RENAME TO "Url";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
