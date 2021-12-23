import { TInputType } from '@interfaces/utils.interface'
import { ChangeEvent, useState } from 'react'

/**
 * Hook which gives you the whole possibly logic for an input
 * @param type input type
 * @returns value, onChange function, input type
 */
export const useInput = (type: TInputType): TUseInput => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    value,
    type,
    onChange
  }
}

export type TUseInput = {
  value: string
  type: TInputType
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
