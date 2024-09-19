import {Router} from 'express';

import healthcheck from '@backend/content/healthcheck';

const router: Router = Router();

router.use('/healthcheck', healthcheck);

export default router;
