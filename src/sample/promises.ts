import {Router, Request, Response, NextFunction} from 'express';
import {RuntimeError} from '@/lib/errorTypes';

const router: Router = Router();

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

router.get('/resolve', (req: Request, res: Response, next: NextFunction) => {
  new Promise(resolve => {
    setTimeout(() => {
      resolve('sample: promise result');
    }, 500);
  })
    .then(result => {
      res.json({result});
    })
    .catch(error => {
      next(error);
    });
});

router.get('/reject', (req: Request, res: Response, next: NextFunction) => {
  new Promise((resolve, reject) => {
    reject(new RuntimeError('rejected promise'));
  }).catch(error => {
    next(error);
  });
});

router.get(
  '/throw',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await timeout(100);
      throw new RuntimeError('error promise');
    } catch (error) {
      next(error);
    }
  }
);

export default router;
