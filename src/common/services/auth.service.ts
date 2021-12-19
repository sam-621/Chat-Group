import { TUserLoginDto } from '@interfaces/services/auth.interface'
import HttpRequest from './http-request.service'

const URL_PREFIX = '/user/auth'

export class AuthService extends HttpRequest {
  login(user: TUserLoginDto) {
    this.configRequest({ endpoint: `${URL_PREFIX}/login` })
    return this.post(user)
  }
}
