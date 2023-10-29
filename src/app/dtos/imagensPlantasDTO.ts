export interface IImagensPlantas {
    id: string,
    imagem: string,
}

export interface CreateImagemPlantaProps {
    logoBase64: string,
}

export interface UpdateImagemPlantaProps {
    id: string,
    imagem: string,
}

export interface DeleteImagemPlantaProps {
    id: string,
}