import {Router} from 'express';

import promises from '@/sample/promises';
import errors from '@/sample/errors';
import hello from '@/sample/hello';

const router: Router = Router();

router.use('/promises', promises);
router.use('/errors', errors);
router.use('/hello', hello);

export default router;
