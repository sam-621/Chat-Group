import { TOKEN_FIELD } from '@constants/cookies.constants'
import { API_DOMAIN, API_PORT, MODE } from '@constants/env.constants'
import { IHeader, TRequestOptions } from '@interfaces/services/http-request.interface'
import { getCookie } from '@libs/cookies'
import axios, { AxiosResponse } from 'axios'

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
    this.endpoint = config.endpoint
    this.apiDomain = config.apiDomain || this.apiDomain
    this.headers = {
      ...this.headers,
      ...config.headers
    }
  }

  protected useToken(token = getCookie(TOKEN_FIELD) || '') {
    this.headers = {
      ...this.headers,
      authorization: token
    }
  }

  protected async get<T>(): Promise<AxiosResponse<T>> {
    try {
      return await axios.get(this.urlBuilder(), { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async post<T>(data: unknown): Promise<AxiosResponse<T>> {
    try {
      return await axios.post(this.urlBuilder(), data, { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async put<T>(data: unknown): Promise<AxiosResponse<T>> {
    try {
      return await axios.put(this.urlBuilder(), data, { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async delete<T>(): Promise<AxiosResponse<T>> {
    try {
      return await axios.delete(this.urlBuilder(), { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  private urlBuilder(): string {
    const port = MODE === 'development' ? this.apiPort : ''

    return `${this.apiDomain}:${port}/${this.endpoint}`
  }
}
