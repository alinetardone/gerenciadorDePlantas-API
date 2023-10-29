import { ImagensPlantas, Plantas } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreateImagemPlantaProps, DeleteImagemPlantaProps, UpdateImagemPlantaProps } from "../../../dtos/imagensPlantasDTO";
import { atualizaImagem, buscaImagemPorId, buscaImagemPorPlantaId, buscaTodasAsImagens, criaImagem, deletaImagem } from "../repositories/imagens.repository";

export class ImagensUseCase {

    async create(logoBase64: string): Promise<ImagensPlantas> {

        const imagemSalva = await criaImagem(logoBase64)

        return imagemSalva
    }

    async update({id, imagem}: UpdateImagemPlantaProps): Promise<ImagensPlantas> {

        const imagemAtualizada = await atualizaImagem({id, imagem})

        return imagemAtualizada
    }

    async delete({ id }: DeleteImagemPlantaProps): Promise<string> {

        const imagemEncontrada = await buscaImagemPorId(id)

        if (!imagemEncontrada) {

            throw new AppError("Imagem não encontrada", 404)
        }

        const imagemExcluida = await deletaImagem(id)

        return imagemExcluida.id
    }

    async buscaImagemPorId(id: string): Promise<ImagensPlantas> {

        const imagemEncontrada = await buscaImagemPorId(id)

        if (!imagemEncontrada) {

            throw new AppError("Imagem não encontrada", 404)
        }

        return imagemEncontrada
    }

    async buscaImagemPorPlantaId(plantaId: string): Promise<string> {

        const imagemEncontrada = await buscaImagemPorPlantaId(plantaId)

        if (!imagemEncontrada) {

            throw new AppError("Imagem não encontrada", 404)
        }

        return imagemEncontrada
    }

    async buscaTodasAsImagens(): Promise<ImagensPlantas[]> {

        const imagensEncontradas = await buscaTodasAsImagens()

        if (!imagensEncontradas) {

            throw new AppError("Nenhuma imagem encontrada", 404)
        }

        return imagensEncontradas
    }
}