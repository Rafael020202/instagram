import 'dotenv/config';
import 'reflect-metadata';
import '../shared/injections';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import routes from './infra/http/routes';
import AppError from './errors/app-error';
import { config } from 'dotenv';

config();

const server = express();

server.use(express.json());
server.use(routes);

server.use(errors());
server.use((err: Error, _: Request, res: Response, __: any) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json(err);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('test');
});