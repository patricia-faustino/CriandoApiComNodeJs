import { compare } from 'bcryptjs';

import { inject, injectable } from 'tsyringe';

import { sign } from 'jsonwebtoken';

import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // usuário existe
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    // senha está incorreta
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!');
    }

    //gerar jsonwebtoken
    const token = sign({}, 'cbbc7b0d8ace662f3cdc870e2db0ba2f', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
