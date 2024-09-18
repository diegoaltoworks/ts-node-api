import {Router, Request, Response} from 'express';

const router: Router = Router();

// basic healthcheck
router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

// dummy homepage
router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello');
});

export default router;
