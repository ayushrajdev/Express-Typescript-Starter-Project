import { Router } from 'express';
import { pingHandler } from '../../controllers/ping.controller.js';

const v1Router = Router();

v1Router.use('/ping', pingHandler);

export default v1Router;
