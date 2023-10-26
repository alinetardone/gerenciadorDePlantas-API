import { Usuarios } from "@prisma/client";
import { prisma } from "../../../../database/prisma/client";
import { CreateUsuarioProps } from "../../../dtos/usuariosDTO";

export async function criaUsuario(data: CreateUsuarioProps): Promise<Usuarios> {
  return await prisma.usuarios.create({data});
}

export async function atualizaUsuario(id: string, data: JSON): Promise<Usuarios> {
  return await prisma.usuarios.update({
    where: {
      id,
    },
    data,
  })
}

export async function deletaUsuario(usuarioId: string): Promise<Usuarios> {
  const usuario = await prisma.usuarios.delete({
    where: {
      id: usuarioId
    }
  });

  return usuario;
}

export async function buscaUsuarioPorEmail(email: string): Promise<Usuarios | null> {
  const usuario = await prisma.usuarios.findFirst({
    where: {
      email
    }
  });

  return usuario;
}

export async function buscaUsuarioPorId(id: string): Promise<Usuarios | null> {
  const usuario = await prisma.usuarios.findUnique({
    where: {
      id
    }
  });

  return usuario;
}

export async function buscaTodosOsUsuarios(): Promise<Usuarios[] | null> {
  const usuarios = await prisma.usuarios.findMany();
  return usuarios.length > 0 ? usuarios : null;
}