/*
  Warnings:

  - You are about to drop the `categoriess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacherDisciplineId_fkey";

-- DropTable
DROP TABLE "categoriess";

-- DropTable
DROP TABLE "tests";

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "teacherDisciplineId" INTEGER NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- AddForeignKey
ALTER TABLE "exams" ADD CONSTRAINT "exams_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exams" ADD CONSTRAINT "exams_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
