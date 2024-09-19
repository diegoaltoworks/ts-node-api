import {Router, Request, Response, NextFunction} from 'express';
import {AuthError, NotFoundError, RuntimeError} from '@backend/lib/errorTypes';

const router: Router = Router();

router.get('/caught', (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new RuntimeError('sample: thrown and caught');
  } catch (error) {
    next(error);
  }
});

router.get('/uncaught', () => {
  throw new RuntimeError('sample: uncaught error');
});

router.get('/not-found', () => {
  throw new NotFoundError('sample: not found error');
});

router.get('/not-authorized', () => {
  throw new AuthError('sample: not authorized error');
});

export default router;
