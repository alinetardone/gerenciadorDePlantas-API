export interface IRegas {
    id: string,
    plantaId: string,
    regado: boolean,
    dataRegou: Date,
    quantidade: number
}

export interface CreateRegaProps {
    plantaId: string,
    regado: boolean,
    dataRegou: Date,
    quantidade: number
}

export interface UpdateRegaProps {
    id?: string,
    plantaId?: string,
    regado?: boolean,
    dataRegou?: Date,
    quantidade?: number,
    data?: Object,
}

export interface DeleteRegaProps {
    id: string,
}
