
import { Router } from "express";
import { RegasController } from "../controller/regas.controller";

const regaController = new RegasController();
const regasRoutes = Router();

regasRoutes.post("/", regaController.create)
regasRoutes.put("/:id", regaController.update)
regasRoutes.delete("/:id", regaController.delete)
regasRoutes.get("/:id", regaController.buscaRega)
regasRoutes.get("/planta/:plantaId", regaController.buscaRegaPorPlantaId)

export { regasRoutes };