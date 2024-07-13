import { ulid } from 'ulid'
import * as bcrypt from 'bcrypt'
import { EmailAddress } from '../../object-values/EmailAddress'

export class User {
  public id: string
  public email: EmailAddress
  private password: string

  constructor(id: string, email: EmailAddress, password: string) {
    this.id = id
    this.email = email
    this.password = password
  }

  static create(email: EmailAddress, password: string): User {
    return new User(ulid(), email, User.hashPassword(password))
  }

  static hashPassword(pass: string): string {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(pass, salt)
  }

  public getPassword() {
    return this.password
  }
}
