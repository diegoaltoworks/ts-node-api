import winston from 'winston';
import Sentry from 'winston-transport-sentry-node';

const {combine, timestamp, json} = winston.format;

const SentryTransport = new Sentry({
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  level: 'info',
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [new winston.transports.Console(), SentryTransport],
});

export default logger;
