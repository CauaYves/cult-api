/*
  Warnings:

  - A unique constraint covering the columns `[codeId]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Session_codeId_key" ON "Session"("codeId");
