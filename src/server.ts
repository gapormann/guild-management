import { Database } from './core/config/database'
import { UserRepositoryDatabase } from './core/modules/user/repositories/UserRepositoryDatabase'
import { CreateUser } from './core/modules/user/use-cases/create-user'

(async () => {
  const database = new Database()
  const userRepository = new UserRepositoryDatabase(database)
  const createUser = new CreateUser(userRepository)
  const user = await createUser.execute({
    email: 'gabriel.pormann@gmail.com',
    password: 'teste-senha'
  })
  console.log(user)
})()