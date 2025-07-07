import { Router } from 'express';
import { Controller } from '../controllers/health.controller';

const router = Router();
const controller = new Controller();

router.get('/health', controller.handleHealthController);

export default router;
