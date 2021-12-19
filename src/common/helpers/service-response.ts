import { AxiosResponse } from 'axios'

export class ServiceResponse<T> {
  data: T
  response: AxiosResponse<T>

  constructor(data: T, response: AxiosResponse) {
    this.data = data
    this.response = response
  }
}
