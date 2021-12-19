export interface IHeader {
  authorization?: string
  'Content-Type': string
}

export type TRequestOptions = {
  endpoint: string
}
