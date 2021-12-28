import { FormEvent } from 'react'

export type TInputType = 'text' | 'email' | 'password'

export type THashMap<T = string> = {
  [index: string]: T
}

export type THandleSubmit = (e: FormEvent<HTMLFormElement>) => void
