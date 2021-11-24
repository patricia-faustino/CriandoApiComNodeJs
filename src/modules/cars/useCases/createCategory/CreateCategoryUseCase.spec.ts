import { AppError } from "@errors/AppError";
import { CategoryRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategorysRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoryRepositoryInMemory;

//agrupar testes
describe('Create Category', () => {
  //antes de algum teste vai ter uma determinada função
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });

  //caminho feliz
  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description Test',
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name,
    );

    expect(categoryCreated).toHaveProperty('id');
  });

//caminho com erro
  it('should not be able to create a new category with name exist', async () => {
    expect(async () => {

      const category = {
        name: 'Category Test',
        description: 'Category description Test',
      };
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      })
  
    }).rejects.toBeInstanceOf(AppError);
  });

});


