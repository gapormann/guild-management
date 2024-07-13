import { AuthRepository } from '../repositories/auth.repository';

export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepository) {}
  async execute(input: Input) {
    
  }
}

type Input = {
  email: string
  password: string
}

type Output = {
  accessToken: string
}