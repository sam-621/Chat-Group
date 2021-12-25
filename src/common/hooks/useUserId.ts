import { generateUserId, getUserIdFromSS } from '@helpers/user'
import { useEffect, useState } from 'react'

export const useUserId = () => {
  const [id, setId] = useState('')

  useEffect(() => {
    const idInSS = getUserIdFromSS()

    if (!idInSS) {
      setId(generateUserId())
      return
    }

    setId(idInSS)
  }, [])

  return {
    id
  }
}
