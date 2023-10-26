export interface IRegas {
    id: string,
    plantaId: string,
    regado: Boolean,
    dataRegou: Date,
    quantidade: Number
}

export interface CreateRegaProps {
    plantaId: string,
    regado: Boolean,
    dataRegou: Date,
    quantidade: Number
}

export interface UpdateRegaProps {
    id: string,
    plantaId?: string,
    regado?: Boolean,
    dataRegou?: Date,
    quantidade?: Number
}

export interface DeleteRegaProps {
    id: string,
}
