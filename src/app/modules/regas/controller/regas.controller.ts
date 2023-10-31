import { Request, Response } from "express";
import { RegasUseCase } from "../useCases/regasUseCases";

export class RegasController {

    async create(req: Request, res: Response) {
        const { data } = req.body;
        const errors = [];

        if (!data) {
            errors.push("O campo 'data' é obrigatório.");
        } else {
            if (data.regado === undefined) {
                errors.push("O campo 'regado' é obrigatório.");
            }
            if (data.dataRegou === undefined) {
                errors.push("O campo 'dataRegou' é obrigatório.");
            }
            if (data.quantidade === undefined) {
                errors.push("O campo 'quantidade' é obrigatório.");
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const regasUseCases = new RegasUseCase();

        try {
            const resultado = await regasUseCases.create(data);
            return res.status(201).json(resultado);
        } catch (error) {
            return res.status(500).json({ error: "Ocorreu um erro durante a criação das informações de rega." });
        }
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