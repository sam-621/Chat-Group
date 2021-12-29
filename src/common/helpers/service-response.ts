import { Response } from '@interfaces/response.interface'
import { AxiosResponse } from 'axios'

export class ServiceResponse<T> {
  data: T
  response: AxiosResponse<Response<T>>

  constructor(data: T, response: AxiosResponse) {
    this.data = data
    this.response = response
  }
}
