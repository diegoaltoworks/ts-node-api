import '@/instrument';
import logger from '@/lib/logger';
import config from '@/config';
import app from '@/app';

import {
  SIGTERM,
  uncaughtException,
  unhandledRejection,
} from '@/lib/errorHandlers';

// register global error handlers
global.process.on('uncaughtException', uncaughtException);
global.process.on('unhandledRejection', unhandledRejection);
global.process.on('SIGTERM', SIGTERM);

// start listening
const server = app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});

export default server;
