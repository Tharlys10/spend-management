import { Router } from 'express'

import ensureAuthenticated from '../middlewares/ensureAutheticated'
import CreateUserService from '../services/CreateUserService'

const usersRouter = Router()

usersRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { name, email, password } = request.body

  const createUser = new CreateUserService()

  interface UserOfPassword {
    name: string
    email: string
    password ?: string
  }

  const user: UserOfPassword = await createUser.execute({
    name,
    email,
    password
  })

  delete user.password

  return response.json(user)
})

export default usersRouter
