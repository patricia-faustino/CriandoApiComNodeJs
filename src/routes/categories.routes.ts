import { request, response, Router } from 'express';

import { Category } from '../model/Category';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) =>{
    const allCategories = categoriesRepository.listCategories();

    return response.json(allCategories);
})

export { categoriesRoutes };
