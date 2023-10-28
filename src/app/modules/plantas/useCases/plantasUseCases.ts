import { Plantas } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreatePlantaProps, DeletePlantaProps, UpdatePlantaProps } from "../../../dtos/plantasDTO";
import { atualizaPlanta, buscaPlantaPorId, buscaPlantaPorNome, buscaPlantaPorUsuarioId, buscaTodasAsplantas, criaPlanta, deletaPlanta } from "../repositories/plantas.repository";

export class PlantasUseCase {

    async create(data: CreatePlantaProps): Promise<Plantas> {

        const plantaExiste = await buscaPlantaPorNome(data.nome)

        if (plantaExiste) {

            throw new AppError("Já existe uma planta com esse nome")
        }

        const plantaCriada = await criaPlanta(data)

        return plantaCriada
    }

    async update({id, data }: UpdatePlantaProps): Promise<Plantas> {

        if(!data || !id) throw new Error

        const plantaEncontrada = await buscaPlantaPorId(id)

        if (!plantaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        const plantaAtualizada = await atualizaPlanta(data)

        return plantaAtualizada
    }

    async delete({ id }: DeletePlantaProps): Promise<string> {

        const plantaEncontrada = await buscaPlantaPorId(id)

        if (!plantaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        const plantaExcluida = await deletaPlanta(id)

        return plantaExcluida.id
    }

    async buscaPlantaPorId(id: string): Promise<Plantas> {

        const plantaEncontrada = await buscaPlantaPorId(id)

        if (!plantaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        return plantaEncontrada
    }

    async buscaPlantaPorUsuarioId(usuarioId: string): Promise<Plantas[]> {

        const plantaEncontrada = await buscaPlantaPorUsuarioId(usuarioId)

        if (!plantaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        return plantaEncontrada
    }

    async buscaPlantaPorNome(nome: string): Promise<Plantas> {

        const plantaEncontrada = await buscaPlantaPorNome(nome)

        if (!plantaEncontrada) {

            throw new AppError("Planta não encontrada", 404)
        }

        return plantaEncontrada
    }

    async buscaTodasAsPlantas(): Promise<Plantas[]> {

        const plantasEncontradas = await buscaTodasAsplantas()

        if (!plantasEncontradas) {

            throw new AppError("Nenhuma planta encontrada", 404)
        }

        return plantasEncontradas
    }
}