import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.listCategories();

    return categories;
  }
}

export { ListCategoriesUseCase };
