import { RegisterUser } from './register.user';

export interface LoginUser {
  accessToken: string,
  user: RegisterUser
}
