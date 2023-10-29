import { Regas } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreateRegaProps, DeleteRegaProps, UpdateRegaProps } from "../../../dtos/regasDTO";
import { atualizaRega, buscaRegaPorId, buscaRegaPorPlantaId, criaRega, deletaRega } from "../repositories/regas.repository";

export class RegasUseCase {

    async create(data: CreateRegaProps): Promise<Regas> {

        const regaCriada = await criaRega(data)

        return regaCriada
    }

    async update({id, data }: UpdateRegaProps): Promise<Regas> {

        if(!data || !id) throw new Error

        const regaEncontrada = await buscaRegaPorId(id)

        if (!regaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        const plantaAtualizada = await atualizaRega({id, data})

        return plantaAtualizada
    }

    async delete({ id }: DeleteRegaProps): Promise<string> {

        const regaEncontrada = await buscaRegaPorId(id)

        if (!regaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        const regaExcluida = await deletaRega(id)

        return regaExcluida.id
    }

    async buscaRegaPorId(id: string): Promise<Regas> {

        const regaEncontrada = await buscaRegaPorId(id)

        if (!regaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        return regaEncontrada
    }

    async buscaRegaPorPlantaId(plantaId: string): Promise<Regas[]> {

        const regaEncontrada = await buscaRegaPorPlantaId(plantaId)

        if (!regaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        return regaEncontrada
    }
}