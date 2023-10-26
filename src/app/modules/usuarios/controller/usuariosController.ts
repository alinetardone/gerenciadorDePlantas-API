import { Request, Response } from "express";

export class UsuarioController {
    async login(req: Request, res: Response) {
        
        const { usuario } = req.body

        if (!usuario.email || !usuario.senha) {
            throw new Error("Invalid params")
        }

        const usuarioUseCases = new UsuariosUseCase();

        const usuarioLogado = await usuarioUseCases.login({ email: usuario.email, senha: usuario.senha })

        return res.status(201).json(usuarioLogado);
    }

    async create(req: Request, res: Response) {

        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            throw new Error("Invalid params")
        }

        const usuarioUseCases = new UsuariosUseCase();

        const result = await usuarioUseCases.create({ nome, email, senha });

        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Invalid params")
        }

        const usuarioUseCases = new UsuariosUseCase()

        const result = await usuarioUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Invalid params")
        }

        const usuarioUseCases = new UsuariosUseCase()

        const result = await usuarioUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getUser(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Invalid params")
        }

        const usuarioUseCases = new UsuariosUseCase();

        const result = await usuarioUseCases.getUserById({ id });

        return res.status(200).json(result);
    }

    async getAllUsers(req: Request, res: Response) {

        const usuarioUseCases = new UsuariosUseCase()

        const result = await usuarioUseCases.getAllUsers()

        return res.status(200).json(result)
    }
}