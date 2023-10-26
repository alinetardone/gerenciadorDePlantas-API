import { Request, Response } from "express";
import { UsuariosUseCase } from "../useCases/usuariosUseCases";

export class UsuarioController {
    async login(req: Request, res: Response) {

        const { usuario } = req.body

        if (!usuario.email || !usuario.senha) {
            throw new Error("Parâmetros inválidos.")
        }

        const usuarioUseCases = new UsuariosUseCase();

        const usuarioLogado = await usuarioUseCases.login({ email: usuario.email, senha: usuario.senha })

        return res.status(201).json(usuarioLogado);
    }

    async create(req: Request, res: Response) {

        const { nome, email, senha } = req.body;
        var cargo = ""

        if (!nome || !email || !senha) {
            throw new Error("Parâmetros inválidos.")
        }

        if (nome == "admin") cargo = "admin"
        else cargo = "usuario"

        const data = {
            nome,
            email,
            senha,
            cargo
        }

        const usuarioUseCases = new UsuariosUseCase();

        const resultado = await usuarioUseCases.create(data);

        return res.status(201).json(resultado);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const usuarioUseCases = new UsuariosUseCase()

        const atualizacao = await usuarioUseCases.update({ id, data })

        return res.status(200).json(atualizacao)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const usuarioUseCases = new UsuariosUseCase()

        const exclusao = await usuarioUseCases.delete({ id })

        return res.status(200).json(exclusao)
    }

    async buscaUsuario(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const usuarioUseCases = new UsuariosUseCase();

        const usuario = await usuarioUseCases.buscaUsuarioPorId(id);

        return res.status(200).json(usuario);
    }

    async buscaTodosOsUsuarios(req: Request, res: Response) {

        const { cargo } = req.params

        const usuarioUseCases = new UsuariosUseCase()

        const usuarios = await usuarioUseCases.buscaTodosOsUsuarios(cargo)

        return res.status(200).json(usuarios)
    }
}