import { Request, Response } from "express";
import { RegasUseCase } from "../useCases/regasUseCases";

export class RegasController {

    async create(req: Request, res: Response) {

        const { data } = req.body;

        if (!data) {
            throw new Error("Parâmetros inválidos.")
        }

        const plantaUseCases = new RegasUseCase();

        const resultado = await plantaUseCases.create(data);

        return res.status(201).json(resultado);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const regasUseCases = new RegasUseCase()

        const atualizacao = await regasUseCases.update({ id, data })

        return res.status(200).json(atualizacao)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const regasUseCases = new RegasUseCase()

        const exclusao = await regasUseCases.delete({ id })

        return res.status(200).json(exclusao)
    }

    async buscaRega(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const regasUseCases = new RegasUseCase();

        const rega = await regasUseCases.buscaRegaPorId(id);

        return res.status(200).json(rega);
    }

    async buscaRegaPorPlantaId(req: Request, res: Response) {

        const { regaId } = req.params;

        if (!regaId) {
            throw new Error("Parâmetros inválidos.")
        }

        const regasUseCases = new RegasUseCase();

        const rega = await regasUseCases.buscaRegaPorPlantaId(regaId);

        return res.status(200).json(rega);
    }
}