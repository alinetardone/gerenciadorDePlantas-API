import { Request, Response } from "express";
import { UsuariosUseCase } from "../useCases/usuariosUseCases";
import { createToken } from "../../../../middleware/auth/jwtConfig";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secretKey = 'df56626d558357dd879da40ae67487548817e2db';

export class UsuarioController {
    async login(req: Request, res: Response) {
        const { usuario } = req.body;
        const errors = [];

        if (!usuario.email) {
            errors.push("O campo 'e-mail' é obrigatório.");
        }

        if (!usuario.senha) {
            errors.push("O campo 'senha' é obrigatório.");
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const usuarioUseCases = new UsuariosUseCase();

        try {
            const usuarioLogado = await usuarioUseCases.login({ email: usuario.email, senha: usuario.senha });
            const token = jwt.sign({ usuarioLogado }, secretKey, { expiresIn: '1h' });
            return res.status(201).json({ usuarioLogado, token });
        } catch (error) {
            return res.status(500).json({ error: "Ocorreu um erro durante o login." });
        }
    }


    async create(req: Request, res: Response) {
        const { nome, email, senha } = req.body;
        var cargo = "";
        const errors = [];

        if (!nome) {
            errors.push("O campo 'nome' é obrigatório.");
        }

        if (!email) {
            errors.push("O campo 'e-mail' é obrigatório.");
        }

        if (!senha) {
            errors.push("O campo 'senha' é obrigatório.");
        }

        if (nome == "admin") cargo = "admin"
        else cargo = "usuario"

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const data = {
            nome,
            email,
            senha,
            cargo
        };

        const usuarioUseCases = new UsuariosUseCase();

        try {
            const resultado = await usuarioUseCases.create(data);
            return res.status(201).json(resultado);
        } catch (error) {
            return res.status(500).json({ error: "Ocorreu um erro durante a criação do usuário." });
        }
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