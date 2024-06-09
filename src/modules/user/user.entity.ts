import { ulid } from 'ulid';
import * as bcrypt from 'bcrypt';

export class User {
  public readonly id: string;
  public email: string;
  public name: string;
  public password: string;
  public phone?: string;
  public photo?: string;
  public createdAt: Date;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    phone?: string,
    photo?: string,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    this.phone = phone;
    this.photo = photo;
    this.createdAt = createdAt;
  }

  static create(
    email: string,
    name: string,
    password: string,
    phone?: string,
    photo?: string,
  ) {
    const id = ulid();
    const sault = bcrypt.genSaltSync();
    const encryptedPass = bcrypt.hashSync(password, sault);
    const createdAt = new Date();
    return new User(id, email, name, encryptedPass, createdAt, phone, photo);
  }
}
