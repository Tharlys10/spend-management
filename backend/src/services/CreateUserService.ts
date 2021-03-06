import { getRepository } from 'typeorm'
import User from "../entities/User";
import { hash } from 'bcryptjs'
import AppError from '../errors/AppError'

interface Request {
  name: string
  email: string
  password: string
}
class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const checkUserExists = await usersRepository.findOne({
      where: { email }
    })

    if (checkUserExists) throw new AppError('E-mail já existente.')

    const hashedPassword = await hash(password, 8)

    let nameUpCase = name.toUpperCase();

    const user = usersRepository.create({
      name: nameUpCase,
      email,
      password: hashedPassword
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService
