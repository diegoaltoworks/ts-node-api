import '@backend/instrument';
import logger from '@backend/lib/logger';
import config from '@frontend/config';
import app from '@frontend/app';

import {
  SIGTERM,
  uncaughtException,
  unhandledRejection,
} from '@backend/lib/errorHandlers';

// register global error handlers
global.process.on('uncaughtException', uncaughtException);
global.process.on('unhandledRejection', unhandledRejection);
global.process.on('SIGTERM', SIGTERM);

// start listening
const server = app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});

export default server;
