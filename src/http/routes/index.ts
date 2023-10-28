import { Request, Response, Router } from "express";
import { usuariosRoutes } from "../../app/modules/usuarios/routes/usuarios.routes";
import { plantasRoutes } from "../../app/modules/plantas/routes/plantas.routes";

const routes = Router();

routes.use("/usuarios", usuariosRoutes)
routes.use("/plantas", plantasRoutes)
// routes.use("/imagens", imagensRoutes)


routes.get('/', (_req: Request, res: Response) => {
  return res.status(301).redirect('/api-docs');
});

routes.all('*', (request: Request, response: Response) => {
  response.status(404).send(`<h1>This route ${request.url} does not exist</h1>`);
});

export { routes };