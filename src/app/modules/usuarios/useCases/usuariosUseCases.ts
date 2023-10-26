import { Usuarios } from "@prisma/client";
import { CreateUsuarioProps, DeleteUsuarioProps, ILogin, UpdateUsuarioProps } from "../../../dtos/usuariosDTO";
import { AppError } from "../../../../errors/AppError";
import { atualizaUsuario, buscaTodosOsUsuarios, buscaUsuarioPorEmail, buscaUsuarioPorId, criaUsuario, deletaUsuario } from "../repositories/usuario.repository";


export class UsuariosUseCase {

    async login({ email, senha }: ILogin): Promise<Usuarios> {

        const usuario = await buscaUsuarioPorEmail(email as string)

        if (!usuario) {

            throw new AppError("Esse usuário não existe.")
        }

        if (usuario.senha !== senha) {

            throw new AppError("As senhas não coincidem")

        }

        return usuario
    }

    async create(data: CreateUsuarioProps): Promise<Usuarios> {

        const usuarioExiste = await buscaUsuarioPorEmail(data.email)

        if (usuarioExiste) {

            throw new AppError("O usuário já existe!")
        }

        if (data.nome === "admin") data.cargo = "admin"
        else data.cargo = "usuario"

        const usuarioCriado = await criaUsuario(data)

        return usuarioCriado
    }

    async update({ id, data }: UpdateUsuarioProps): Promise<Usuarios> {

        const usuarioEncontrado = await buscaUsuarioPorId(id)

        if (!usuarioEncontrado) {

            throw new AppError("Usuário não encontrado", 404)
        }

        const usuarioAtualizado = await atualizaUsuario(id, data as JSON)

        return usuarioAtualizado
    }

    async delete({ id }: DeleteUsuarioProps): Promise<string> {

        const usuarioEncontrado = await buscaUsuarioPorId(id)

        if (!usuarioEncontrado) {

            throw new AppError("Usuário não encontrado", 404)
        }

        const usuarioExcluido = await deletaUsuario(id)

        return usuarioExcluido.id
    }

    async buscaUsuarioPorId(id: string): Promise<Usuarios> {

        const usuarioEncontrado = await buscaUsuarioPorId(id)

        if (!usuarioEncontrado) {

            throw new AppError("Usuário não encontrado", 404)
        }

        return usuarioEncontrado
    }

    async buscaTodosOsUsuarios(cargo: string): Promise<Usuarios[]> {

        if (cargo != "admin") {
            throw new AppError("Função permitida somente para administradores.", 401)
        }

        const usuariosEncontrados = await buscaTodosOsUsuarios()

        if (!usuariosEncontrados) {

            throw new AppError("Nenhum usuário encontrado", 404)
        }

        return usuariosEncontrados
    }
}