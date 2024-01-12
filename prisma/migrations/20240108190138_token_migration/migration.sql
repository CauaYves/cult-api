-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "codeId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_codeId_key" ON "Session"("codeId");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "Login"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
