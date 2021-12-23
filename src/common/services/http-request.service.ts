import { API_DOMAIN, API_PORT, MODE } from '@constants/env.constants'
import { IHeader, TRequestOptions } from '@interfaces/services/http-request.interface'
import axios, { AxiosResponse } from 'axios'
import jsCookie from 'js-cookie'

export default class HttpRequest {
  private apiPort: number
  private apiDomain: string
  private endpoint: string
  private headers: IHeader

  constructor() {
    this.endpoint = ''
    this.apiPort = API_PORT
    this.apiDomain = API_DOMAIN
    this.headers = {
      authorization: '',
      'Content-Type': 'application/json'
    }
  }

  protected configRequest(config: TRequestOptions) {
    const { endpoint } = config
    this.endpoint = endpoint
  }

  protected useToken(token = jsCookie.get('token') || '') {
    this.headers = {
      ...this.headers,
      authorization: token
    }
  }

  protected async get<T>(): Promise<AxiosResponse<T>> {
    try {
      return axios.get(this.urlBuilder(), { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async post<T>(data: unknown): Promise<AxiosResponse<T>> {
    try {
      return axios.post(this.urlBuilder(), data, { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async put<T>(data: unknown): Promise<AxiosResponse<T>> {
    try {
      return axios.put(this.urlBuilder(), data, { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async delete<T>(): Promise<AxiosResponse<T>> {
    try {
      return axios.delete(this.urlBuilder(), { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  private urlBuilder(): string {
    const port = MODE === 'development' ? this.apiPort : ''

    return `${this.apiDomain}${port}/${this.endpoint}`
  }
}
