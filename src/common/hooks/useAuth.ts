import { authRoutes, getIsLogged, privateRoutes } from '@helpers/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useAuth = () => {
  const router = useRouter()
  const isLogged = getIsLogged()

  const [isLoading, setIsLoading] = useState(true)

  const manageUser = async () => {
    if (isLogged && authRoutes.includes(router.pathname)) {
      await router.push('/')
      return
    }

    if (!isLogged && privateRoutes.includes(router.pathname)) {
      await router.push('/login')
      return
    }
    setIsLoading(false)
  }

  useEffect(() => {
    manageUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isLoading
  }
}
