import { Regas } from "@prisma/client";
import { prisma } from "../../../../database/prisma/client";
import { CreateRegaProps, UpdateRegaProps } from "../../../dtos/regasDTO";

export async function criaRega(data: CreateRegaProps): Promise<Regas> {
    return await prisma.regas.create({ data });
}

export async function atualizaRega({id, data}: UpdateRegaProps): Promise<Regas> {

    if(!data) throw new Error
    
    return await prisma.regas.update({
        where: {
            id,
        },
        data
    })
}

export async function deletaRega(plantaId: string): Promise<Regas> {
    const planta = await prisma.regas.delete({
        where: {
            id: plantaId
        }
    });

    return planta;
}

export async function buscaRegaPorId(id: string): Promise<Regas | null> {
    const planta = await prisma.regas.findUnique({
        where: {
            id
        }
    });

    return planta;
}

export async function buscaRegaPorPlantaId(plantaId: string): Promise<Regas[] | null> {
    const plantas = await prisma.regas.findMany({
        where: {
            plantaId
        }
    });

    return plantas;
}