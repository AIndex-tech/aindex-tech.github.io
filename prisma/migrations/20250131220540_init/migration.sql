-- CreateTable
CREATE TABLE "AIModel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "lisence" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "aIModelId" TEXT,
    CONSTRAINT "Tags_aIModelId_fkey" FOREIGN KEY ("aIModelId") REFERENCES "AIModel" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
