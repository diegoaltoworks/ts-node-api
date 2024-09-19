import appRouter from './appRouter';
import {generateOpenApiDocument} from 'trpc-openapi';
import {Router} from 'express';
import config from '@backend/config';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: config.PROJECT_NAME,
  version: config.PROJECT_VERSION,
  baseUrl: `${config.PROJECT_URL}/api`,
});

const router = Router();

router.get('/openapi.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(openApiDocument);
});

export default router;
