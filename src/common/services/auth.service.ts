import { ServiceResponse } from '@helpers/service-response'
import { Response } from '@interfaces/response.interface'
import {
  ILoginResponse,
  IRegisterResponse,
  TUserLoginDto,
  TUserRegisterDto
} from '@interfaces/services/auth.interface'
import HttpRequest from './http-request.service'

const URL_PREFIX = 'user/auth'

export class AuthService extends HttpRequest {
  async login(user: TUserLoginDto): Promise<ServiceResponse<ILoginResponse>> {
    this.configRequest({ endpoint: `${URL_PREFIX}/login` })

    const response = await this.post<Response<ILoginResponse>>(user)

    return new ServiceResponse(response.data.data, response)
  }

  async register(user: TUserRegisterDto): Promise<ServiceResponse<IRegisterResponse>> {
    this.configRequest({ endpoint: `${URL_PREFIX}/login` })

    const response = await this.post<Response<IRegisterResponse>>(user)

    return new ServiceResponse(response.data.data, response)
  }
}
