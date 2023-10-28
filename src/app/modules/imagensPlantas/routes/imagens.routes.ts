
import { Router } from "express";
import { ImagensController } from "../controller/imagens.controller";

const imagemController = new ImagensController();
const imagensRoutes = Router();

imagensRoutes.post("/", imagemController.create)
imagensRoutes.put("/:id", imagemController.update)
imagensRoutes.delete("/:id", imagemController.delete)
imagensRoutes.get("/:id", imagemController.buscaImagem)
imagensRoutes.get("/:plantaId", imagemController.buscaImagemPorPlantaId)
imagensRoutes.get("/all", imagemController.buscaTodasAsImagens)

export { imagensRoutes };