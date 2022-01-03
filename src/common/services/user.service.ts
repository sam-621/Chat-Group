import { ServiceResponse } from '@helpers/service-response'
import { Response } from '@interfaces/response.interface'
import {
  TEditProfileDto,
  TEditProfileResponse,
  TUserProfileResponse
} from '@interfaces/services/user.interface'
import HttpRequest from './http-request.service'

const URL_PREFIX = 'user/profile'

export class UserService extends HttpRequest {
  async getUserProfile(): Promise<ServiceResponse<TUserProfileResponse>> {
    this.configRequest({ endpoint: `${URL_PREFIX}/information` })
    this.useToken()

    const response = await this.get<Response<TUserProfileResponse>>()

    return new ServiceResponse(response.data.data, response)
  }

  async updateUserProfile(user: TEditProfileDto): Promise<ServiceResponse<TEditProfileResponse>> {
    this.configRequest({ endpoint: `${URL_PREFIX}/edit` })
    this.useToken()

    const response = await this.put<Response<TEditProfileResponse>>(user)

    return new ServiceResponse(response.data.data, response)
  }
}
