import config from '@/config';
import appRouter from './appRouter';
import {Router} from 'express';
import {renderTrpcPanel} from 'trpc-panel';

const BASEURL = config.BASEURL;
if (!BASEURL) {
  throw new Error('BASEURL is not set');
}
const router = Router();

router.use('/', (req, res) => {
  return res.send(renderTrpcPanel(appRouter, {url: `${BASEURL}/trpc`}));
});

export default router;
