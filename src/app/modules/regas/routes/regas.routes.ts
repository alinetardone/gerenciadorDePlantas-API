
import { Router } from "express";
import { RegasController } from "../controller/regas.controller";

const regaController = new RegasController();
const plantasRoutes = Router();

plantasRoutes.post("/", regaController.create)
plantasRoutes.put("/:id", regaController.update)
plantasRoutes.delete("/:id", regaController.delete)
plantasRoutes.get("/:id", regaController.buscaRega)
plantasRoutes.get("/planta/:plantaId", regaController.buscaRegaPorPlantaId)

export { plantasRoutes };