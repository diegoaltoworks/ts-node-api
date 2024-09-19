import {Router, Request, Response} from 'express';

const router: Router = Router();

// default route, just say hello in any case
router.get('/*', (req: Request, res: Response) => {
  console.log('Request received', req.url);
  res.json({message: 'Hello world'});
});

export default router;
