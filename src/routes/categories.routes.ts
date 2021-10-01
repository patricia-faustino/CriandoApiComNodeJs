import { json, request, response, Router } from 'express';

import { Category } from '../model/Category';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadExists = categoriesRepository.findByName(name);

  if(categoryAlreadExists){
      return response.status(400).json({ error: "Category Alread exists!"
       })
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) =>{
    const allCategories = categoriesRepository.listCategories();

    return response.json(allCategories);
})

export { categoriesRoutes };
