import { TInputType } from '@interfaces/utils.interface'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

/**
 * Hook which gives you the whole possibly logic for an input
 * @param type input type
 * @returns value, onChange function, input type
 */
export const useInput = (type: TInputType): TUseInput => {
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const cleanUp = () => {
    setValue('')
  }

  return {
    value,
    type,
    errorMessage: error,
    cleanUp,
    onChange,
    setError
  }
}

export type TUseInput = {
  value: string
  type: TInputType
  errorMessage: string
  cleanUp: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  setError: Dispatch<SetStateAction<string>>
}
