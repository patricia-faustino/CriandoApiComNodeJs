
import { CategoriesRepository } from '@modules/cars/infra/repositories/CategoriesRepository';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { inject, injectable } from 'tsyringe';


@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.listCategories();

    return categories;
  }
}

export { ListCategoriesUseCase };
