-- CreateTable
CREATE TABLE "Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orgin" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "hits" INTEGER NOT NULL DEFAULT 0,
    "creatorId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url.orgin_unique" ON "Url"("orgin");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
