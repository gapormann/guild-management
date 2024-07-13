import { UserRepositoryMock } from './repositories/UserRepositoryMock';
import { CreateUserOutput } from './use-cases/create-user';
import { UserService } from './user.service';

describe('Testing user service', () => {
  const userRepository = new UserRepositoryMock()
  const userService = new UserService(userRepository)
  const userInput = {
    email: 'gabriel.pormann@gmail.com',
    password: 'teste.senha',
  }
  let createUserOutput: CreateUserOutput;
  test('should create a user', async () => {
    createUserOutput = await userService.createUser(userInput)
    expect(createUserOutput.user).toBeDefined();
    expect(createUserOutput.user.id).toBeDefined()
    expect(createUserOutput.user.email).toEqual(userInput.email)
  });

  test('Should return a user', async () => {
    const getUserOutput = await userService.getUser(createUserOutput.user.id)
    expect(getUserOutput.user).toBeDefined()
    expect(getUserOutput.user.id).toEqual(createUserOutput.user.id)
    expect(getUserOutput.user.email).toEqual(createUserOutput.user.email)
  })
})