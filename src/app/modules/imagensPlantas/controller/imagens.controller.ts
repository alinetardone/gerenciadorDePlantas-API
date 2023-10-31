import { Request, Response } from "express";
import { ImagensUseCase } from "../useCases/imagensUseCases";
import { imageToBase64 } from "../../../../utils/imageToBase64";

export class ImagensController {

    async create(req: Request, res: Response) {

        const imagem: Express.Multer.File | undefined = req.file;

        if (!imagem) {
            throw new Error("O campo 'imagem' é obrigatório.")
        }

        const imagemUseCases = new ImagensUseCase();

        try {
            const logoBase64 = await imageToBase64(imagem);
            const resultado = await imagemUseCases.create(logoBase64);
            return res.status(201).json(resultado);
        } catch (error) {
            return res.status(500).json({ error: "Ocorreu um erro durante a criação da imagem." });
        }
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { imagem } = req.body;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase()

        const atualizacao = await imagensUseCases.update({ id, imagem })

        return res.status(200).json(atualizacao)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase()

        const exclusao = await imagensUseCases.delete({ id })

        return res.status(200).json(exclusao)
    }

    async buscaImagem(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase();

        const imagem = await imagensUseCases.buscaImagemPorId(id);

        return res.status(200).json(imagem);
    }

    async buscaImagemPorPlantaId(req: Request, res: Response) {

        const { plantaId } = req.params;

        if (!plantaId) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase();

        const usuario = await imagensUseCases.buscaImagemPorPlantaId(plantaId);

        return res.status(200).json(usuario);
    }

    async buscaTodasAsImagens(req: Request, res: Response) {

        const imagensUseCases = new ImagensUseCase()

        console.log("passei pro aqui")

        const usuarios = await imagensUseCases.buscaTodasAsImagens()

        return res.status(200).json(usuarios)
    }
}