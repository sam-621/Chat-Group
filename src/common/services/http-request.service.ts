import { API_DOMAIN, API_PORT, MODE } from '@constants/env.constants'
import { IHeader, TRequestOptions } from '@interfaces/services/http-request.interface'

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
      'Content-Type': 'application/json'
    }
  }

  protected configRequest(config: TRequestOptions) {
    const { endpoint } = config
    this.endpoint = endpoint
  }

  // protected addToken(token: string): void {
  //   this.headers = {
  //     ...this.headers,
  //     authorization: token
  //   }
  // }

  // public get(): Promise<AxiosResponse> {
  //   try {
  //     return axios.get(this.urlBuilder(), { headers: this.headers })
  //   } catch (error) {
  //     throw new Error(error.message)
  //   }
  // }

  // public post(data: unknown): Promise<AxiosResponse> {
  //   try {
  //     return axios.post(this.urlBuilder(), data, { headers: this.headers })
  //   } catch (error) {
  //     throw new Error(error.message)
  //   }
  // }

  // public put(data: unknown): Promise<AxiosResponse> {
  //   try {
  //     return axios.put(this.urlBuilder(), data, { headers: this.headers })
  //   } catch (error) {
  //     throw new Error(error.message)
  //   }
  // }

  // public delete(): Promise<AxiosResponse> {
  //   try {
  //     return axios.delete(this.urlBuilder(), { headers: this.headers })
  //   } catch (error) {
  //     throw new Error(error.message)
  //   }
  // }

  private urlBuilder(): string {
    const port = MODE === 'development' ? this.apiPort : ''

    return `${this.apiDomain}${port}/${this.endpoint}`
  }
}
