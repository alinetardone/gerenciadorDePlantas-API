export interface ILogin {
    email?: string;
    senha?: string;
}
export interface IUsuarios {
    id: string,
    nome: string,
    email: string,
    senha: string,
    cargo: string,
}

export interface CreateUsuarioProps {
    nome: string,
    email: string,
    senha: string,
    cargo: string,
}

export interface UpdateUsuarioProps {
    id: string,
    nome?: string,
    email?: string,
    senha?: string,
    cargo?: string,
    data?: JSON,

}

export interface DeleteUsuarioProps {
    id: string,
}

