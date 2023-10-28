import { ImagensPlantas, Plantas } from "@prisma/client";
import { prisma } from "../../../../database/prisma/client";
import { CreateImagemPlantaProps, UpdateImagemPlantaProps } from "../../../dtos/imagensPlantasDTO";

export async function criaImagem(data: CreateImagemPlantaProps): Promise<ImagensPlantas> {
    return await prisma.imagensPlantas.create({ data });
}

export async function atualizaImagem({ id, imagem }: UpdateImagemPlantaProps): Promise<ImagensPlantas> {
    return await prisma.imagensPlantas.update({
        where: {
            id,
        },
        data: {
            imagem
        }
    })
}

export async function deletaImagem(imagemId: string): Promise<ImagensPlantas> {
    return await prisma.imagensPlantas.delete({
        where: {
            id: imagemId
        }
    });
}

export async function buscaImagemPorId(id: string): Promise<ImagensPlantas | null> {
    return await prisma.imagensPlantas.findUnique({
        where: {
            id
        }
    });
}

export async function buscaImagemPorPlantaId(plantaId: string): Promise<Plantas | null> {
    const planta = await prisma.plantas.findUnique({
        where: {
            id: plantaId,
            imagem: {}
        }
    });

    return planta
}

export async function buscaTodasAsImagens(): Promise<ImagensPlantas[] | null> {
    const imagens = await prisma.imagensPlantas.findMany();
    return imagens.length > 0 ? imagens : null;
}