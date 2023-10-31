
import { Router } from "express";
import { PlantasController } from "../controller/plantas.controller";
import { authenticateToken } from "../../../../middleware/auth/authenticate";

const plantaController = new PlantasController();
const plantasRoutes = Router();

plantasRoutes.post("/", plantaController.create)
plantasRoutes.put("/:id", plantaController.update)
plantasRoutes.delete("/:id", plantaController.delete)
plantasRoutes.get("/:id", plantaController.buscaPlanta)
plantasRoutes.get("/:nome", plantaController.buscaPlantaPorNome)
plantasRoutes.get("/usuario/:usuarioId", plantaController.buscaPlantaPorUsuarioId)
plantasRoutes.get("/all", authenticateToken, plantaController.buscaTodasAsPlantas)

export { plantasRoutes };