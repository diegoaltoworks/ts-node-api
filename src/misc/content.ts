import {Router, Request, Response} from 'express';

const path = '/';
const router: Router = Router();

// basic healthcheck
router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

// dummy homepage
router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello');
});

type Content = {
  path: string;
  router: Router;
};

const content: Content = {path, router};

export default content;
