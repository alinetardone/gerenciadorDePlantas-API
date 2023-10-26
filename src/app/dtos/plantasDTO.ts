export interface IPlantas {
    id: string,
    usuarioId: string,
    imagemId: string,
    nome: string,
    especie: string,
    localizacao: string,
    diaDeRegar: string,
    fertilizante: Boolean,
    luz: Boolean
}

export interface CreatePlantaProps {
    usuarioId: string,
    imagemId: string,
    nome: string,
    especie: string,
    localizacao: string,
    diaDeRegar: string,
    fertilizante: Boolean,
    luz: Boolean
}

export interface UpdatePlantaProps {
    id: string,
    nome?: string,
    especie?: string,
    localizacao?: string,
    diaDeRegar?: string,
    fertilizante?: Boolean,
    luz?: Boolean
}

export interface DeletePlantaProps {
    id: string,
}