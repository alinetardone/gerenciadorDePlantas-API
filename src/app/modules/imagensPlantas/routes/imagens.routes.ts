
import { Router } from "express";
import { ImagensController } from "../controller/imagens.controller";
import multerMiddleware from "../../../../middleware/multer";

const imagemController = new ImagensController();
const imagensRoutes = Router();

imagensRoutes.post("/", multerMiddleware.single('imagem'), imagemController.create)
imagensRoutes.put("/:id", imagemController.update)
imagensRoutes.delete("/:id", imagemController.delete)
imagensRoutes.get("/all", imagemController.buscaTodasAsImagens)
imagensRoutes.get("/:id", imagemController.buscaImagem)
imagensRoutes.get("/:plantaId", imagemController.buscaImagemPorPlantaId)


export { imagensRoutes };