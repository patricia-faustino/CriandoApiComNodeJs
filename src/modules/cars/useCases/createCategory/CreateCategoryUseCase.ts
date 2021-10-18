import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new Error('Category Alread exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
