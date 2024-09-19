import config from '@backend/config';
import appRouter from '@backend/trpc/appRouter';
import {Router} from 'express';
import {renderTrpcPanel} from 'trpc-panel';

const PROJECT_URL = config.PROJECT_URL;
if (!PROJECT_URL) {
  throw new Error('PROJECT_URL is not set');
}
const router = Router();

router.use('/', (req, res) => {
  return res.send(renderTrpcPanel(appRouter, {url: `${PROJECT_URL}/trpc`}));
});

export default router;
