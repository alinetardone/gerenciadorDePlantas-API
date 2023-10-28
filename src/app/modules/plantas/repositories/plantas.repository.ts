import { Plantas } from "@prisma/client";
import { prisma } from "../../../../database/prisma/client";
import { CreatePlantaProps, UpdatePlantaProps } from "../../../dtos/plantasDTO";

export async function criaPlanta(data: CreatePlantaProps): Promise<Plantas> {
    return await prisma.plantas.create({ data });
}

export async function atualizaPlanta(data: UpdatePlantaProps): Promise<Plantas> {
    return await prisma.plantas.update({
        where: {
            id: data.id,
        },
        data
    })
}

export async function deletaPlanta(plantaId: string): Promise<Plantas> {
    const planta = await prisma.plantas.delete({
        where: {
            id: plantaId
        }
    });

    return planta;
}

export async function buscaPlantaPorId(id: string): Promise<Plantas | null> {
    const planta = await prisma.plantas.findUnique({
        where: {
            id
        }
    });

    return planta;
}

export async function buscaPlantaPorUsuarioId(usuarioId: string): Promise<Plantas[] | null> {
    const plantas = await prisma.plantas.findMany({
        where: {
            usuarioId
        }
    });

    return plantas;
}

export async function buscaPlantaPorNome(nome: string): Promise<Plantas | null> {
    const planta = await prisma.plantas.findFirst({
        where: {
            nome
        }
    });

    return planta;
}

export async function buscaTodasAsplantas(): Promise<Plantas[] | null> {
    const plantas = await prisma.plantas.findMany();
    return plantas.length > 0 ? plantas : null;
}