import {apiReference} from '@scalar/express-api-reference';
import {Router} from 'express';

const router = Router();

router.use(
  apiReference({
    spec: {
      url: '/openapi.json',
    },
  })
);

export default router;
