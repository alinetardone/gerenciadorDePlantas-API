import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const { promisify } = require("util");

const secretKey = 'df56626d558357dd879da40ae67487548817e2db';


export async function authenticateToken (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "Nenhum token provido" });
  }

  const [scheme, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, secretKey);

    req.user = decoded.usuarioLogado;

    console.log(req.user)

    return next();
  } catch (err) {
    return res.status(401).send({ error: "Token inválido" });
  }
};