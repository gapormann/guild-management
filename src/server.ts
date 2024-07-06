import { Database } from './config/database'
import { UserRepositoryDatabase } from './repositories/user/UserRepositoryDatabase'
import { CreateUser } from './use-cases/users/create-user'

(async () => {
  const database = new Database()
  const userRepository = new UserRepositoryDatabase(database)
  const createUser = new CreateUser(userRepository)
  const user = await createUser.execute(
    'gabriel.pormann@gmail.com',
    'teste-senha'
  )
  console.log(user)
})()