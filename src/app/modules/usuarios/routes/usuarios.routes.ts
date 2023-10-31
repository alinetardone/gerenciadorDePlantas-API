
import { Router } from "express";
import { UsuarioController } from "../controller/usuariosController";
import { authenticateToken } from "../../../../middleware/auth/authenticate";

const usuarioController = new UsuarioController();
const usuariosRoutes = Router();

usuariosRoutes.post("/", usuarioController.create)
usuariosRoutes.post("/login", usuarioController.login)
usuariosRoutes.put("/:id", usuarioController.update)
usuariosRoutes.delete("/:id", usuarioController.delete)
usuariosRoutes.get("/:id", usuarioController.buscaUsuario)
usuariosRoutes.get("/:cargo/all", authenticateToken, usuarioController.buscaTodosOsUsuarios)

export { usuariosRoutes };