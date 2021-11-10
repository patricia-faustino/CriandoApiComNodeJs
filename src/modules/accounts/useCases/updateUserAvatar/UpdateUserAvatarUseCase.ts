import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase{
    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository
    ){}
        // Adicionarcoluna avatar na tabela de users
        // Refatorar usuário com coluna avatar
        // Configuração upload multer
        // Criar regra de negócio do upload
        // Criar controller

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        user.avatar = avatar_file;

        await this.usersRepository.create(user);
    }

}

export { UpdateUserAvatarUseCase }