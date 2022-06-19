import 'dotenv/config';
import 'reflect-metadata';
import '../shared/injections';
import 'express-async-errors';

import express from 'express';
import { errors } from 'celebrate';

import ErrorHandler from './middlewares/error-handler';
import routes from './infra/http/routes';
import { config } from 'dotenv';
import logger from './utils/logger';

config();

const server = express();

server.use(express.json());
server.use(routes);

server.use(errors());
server.use(ErrorHandler.execute);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  logger.info(`api up and running on port ${port}`);
});