import { authRoutes, getIsLogged } from '@helpers/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useAuth = () => {
  const router = useRouter()
  const isLogged = getIsLogged()

  const [isLoading, setIsLoading] = useState(true)

  const manageUser = async () => {
    if (isLogged && authRoutes.includes(router.pathname)) {
      await router.push('/')
    }

    setIsLoading(false)
  }

  useEffect(() => {
    manageUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isLogged,
    isLoading
  }
}
