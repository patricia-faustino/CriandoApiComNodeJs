import { UserRepository } from '@modules/accounts/repositories/implementations/UserRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';
import { container } from 'tsyringe';

//ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
