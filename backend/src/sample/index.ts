import {Router} from 'express';

import promises from '@backend/sample/promises';
import errors from '@backend/sample/errors';
import hello from '@backend/sample/hello';

const router: Router = Router();

router.use('/promises', promises);
router.use('/errors', errors);
router.use('/hello', hello);

export default router;
