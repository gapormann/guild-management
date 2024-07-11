import { Database } from './config/database'
import { UserRepositoryDatabase } from './repositories/user/UserRepositoryDatabase'
import { CreateUser } from './use-cases/users/create-user'

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