
import { Router } from "express";
import { UsuarioController } from "../controller/usuariosController";

const usuarioController = new UsuarioController();
const userRoutes = Router();

userRoutes.post("/", usuarioController.create)
userRoutes.post("/login", usuarioController.login)
userRoutes.put("/:id", usuarioController.update)
userRoutes.delete("/:id", usuarioController.delete)
userRoutes.get("/:id", usuarioController.buscaUsuario)
userRoutes.get("/:cargo/all", usuarioController.buscaTodosOsUsuarios)

export { userRoutes };