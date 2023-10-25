-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plantas" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "imagemId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "diaDeRegar" TEXT NOT NULL,
    "fertilizante" BOOLEAN NOT NULL DEFAULT false,
    "luz" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Plantas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagensPlantas" (
    "id" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "ImagensPlantas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Regas" (
    "id" TEXT NOT NULL,
    "plantaId" TEXT NOT NULL,
    "regado" BOOLEAN NOT NULL DEFAULT false,
    "dataRegou" TIMESTAMP(3),
    "quantidade" INTEGER,

    CONSTRAINT "Regas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_id_key" ON "Usuarios"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plantas_id_key" ON "Plantas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ImagensPlantas_id_key" ON "ImagensPlantas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Regas_id_key" ON "Regas"("id");

-- AddForeignKey
ALTER TABLE "Plantas" ADD CONSTRAINT "Plantas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plantas" ADD CONSTRAINT "Plantas_imagemId_fkey" FOREIGN KEY ("imagemId") REFERENCES "ImagensPlantas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Regas" ADD CONSTRAINT "Regas_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Plantas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
