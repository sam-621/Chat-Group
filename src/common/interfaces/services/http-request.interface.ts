import { AxiosRequestHeaders } from 'axios'

export interface IHeader extends AxiosRequestHeaders {
  'Content-Type': string
}

export type TRequestOptions = {
  endpoint: string
  apiDomain?: string
  headers?: AxiosRequestHeaders
  port?: number
}
