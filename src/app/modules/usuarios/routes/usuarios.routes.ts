
import { Router } from "express";
import { UsuarioController } from "../controller/usuariosController";

const usuarioController = new UsuarioController();
const usuariosRoutes = Router();

usuariosRoutes.post("/", usuarioController.create)
usuariosRoutes.post("/login", usuarioController.login)
usuariosRoutes.put("/:id", usuarioController.update)
usuariosRoutes.delete("/:id", usuarioController.delete)
usuariosRoutes.get("/:id", usuarioController.buscaUsuario)
usuariosRoutes.get("/:cargo/all", usuarioController.buscaTodosOsUsuarios)

export { usuariosRoutes };