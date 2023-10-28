export interface IPlantas {
    id: string,
    usuarioId: string,
    imagemId: string,
    nome: string,
    especie: string,
    localizacao: string,
    diaDeRegar: string,
    fertilizante: boolean,
    luz: boolean
}

export interface CreatePlantaProps {
    usuarioId: string,
    imagemId: string,
    nome: string,
    especie: string,
    localizacao: string,
    diaDeRegar: string,
    fertilizante: boolean,
    luz: boolean
}

export interface UpdatePlantaProps {
    id?: string,
    nome?: string,
    especie?: string,
    localizacao?: string,
    diaDeRegar?: string,
    fertilizante?: boolean,
    luz?: boolean,
    data?: object,
}

export interface DeletePlantaProps {
    id: string,
}