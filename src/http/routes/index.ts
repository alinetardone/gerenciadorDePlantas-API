import { Request, Response, Router } from "express";


const routes = Router();

// routes.use("/usuarios", usuariosRoutes)
// routes.use("/imagens", imagensRoutes)
// routes.use("/plantas", plantasRoutes)


routes.get('/', (_req: Request, res: Response) => {
  return res.status(301).redirect('/api-docs');
});

routes.all('*', (request: Request, response: Response) => {
  response.status(404).send(`<h1>This route ${request.url} does not exist</h1>`);
});

export { routes };