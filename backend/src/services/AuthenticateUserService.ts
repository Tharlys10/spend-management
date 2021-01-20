import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import User from '../entities/User'
import authConfig from '../config/auth'
import AppError from '../errors/AppError'

interface Request {
  email: string
  password: string
}
class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<String> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ where: { email } })

    if (!user) throw new AppError('Usuário não encontrado.', 401)

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) throw new AppError('E-mail ou senha inválido.', 401)

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return token

  }
}
export default AuthenticateUserService
