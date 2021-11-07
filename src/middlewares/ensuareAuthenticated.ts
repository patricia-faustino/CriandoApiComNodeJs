import { NextFunction, Request, Response } from 'express';

import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPlayload {
  sub: string;
}

export async function ensuareAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  //modelo token
  // Bearer tokenSendoPassado

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  // Bearer tokenSendoPassado
  // [0]: Bearer
  // [1]: tokenSendoPassado
  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      'cbbc7b0d8ace662f3cdc870e2db0ba2f',
    ) as IPlayload;
    console.log(user_id);
    const userRepository = new UserRepository();
    const userAlreadyExist = userRepository.findById(user_id);

    if (!userAlreadyExist) {
      throw new AppError('Users does not exists!', 401);
    }

    next();

  } catch {
    throw new AppError('Invalid token!', 401);
  }
}
