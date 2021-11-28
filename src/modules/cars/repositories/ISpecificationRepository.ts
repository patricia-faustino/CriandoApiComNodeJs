import { ICreateSpecificationDTO } from "../dtos/ICreateCategoryDTO";
import { Specification } from "../infra/typeorm/entities/Specification";


interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
