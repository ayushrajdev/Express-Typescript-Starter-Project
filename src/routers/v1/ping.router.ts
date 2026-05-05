import { Router } from 'express';
import { pingHandler } from '../../controllers/ping.controller.js';

const router = Router();

router.get('/ping', pingHandler);

export default router;
