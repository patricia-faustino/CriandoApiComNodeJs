import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;
  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = await this.repository.create({
      description,
      name
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ name });
    return specification;
  }

//   public static getInstance(): SpecificationsRepository {
//     if (!SpecificationsRepository.INSTANCE) {
//       SpecificationsRepository.INSTANCE = new SpecificationsRepository();
//     }
//     return SpecificationsRepository.INSTANCE;
//   }
}

export { SpecificationsRepository };
