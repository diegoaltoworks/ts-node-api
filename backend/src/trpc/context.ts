import config from '@backend/config';
import logger from '@backend/lib/logger';
import {TRPCError} from '@trpc/server';
import {CreateExpressContextOptions} from '@trpc/server/adapters/express';
import jwt from 'jsonwebtoken';

if (!config.JWT_SECRET) {
  logger.warn('JWT_SECRET is not set, using random string for testing');
  //OPTIONAL: throw new Error('JWT_SECRET is not set');
}
const JWT_SECRET = config.JWT_SECRET || new Date().getTime().toString();

//TODO: replace with necessary checks
export type User = {id: string; name: string};
const users: User[] = [{id: '666', name: 'Admin'}];
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjYiLCJuYW1lIjoiVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.lLQY2Zv1ww8GwvC-UTVpRKlevFuZEXBL6anBgMGHfJE

export type Context = {user: User | null};

export const createContext = async ({
  req,
}: CreateExpressContextOptions): Promise<Context> => {
  let user: User | null = null;
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    let userId;

    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      userId = decodedToken.sub;
    } catch (error) {
      throw new TRPCError({code: 'UNAUTHORIZED'});
    }

    user = users.find(_user => _user.id === userId) || null;
  }
  return {user};
};

//export type Context = Awaited<ReturnType<typeof createContext>>;
