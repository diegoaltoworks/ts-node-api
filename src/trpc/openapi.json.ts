import appRouter from './appRouter';
import {generateOpenApiDocument} from 'trpc-openapi';
import {Router} from 'express';
import config from '@/config';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'tRPC OpenAPI',
  version: '1.0.0',
  baseUrl: `${config.BASEURL}`,
});

const router = Router();

router.get('/openapi.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(openApiDocument);
});

export default router;
