import { getUserProfile } from '@apis/user.api'
import { USER_PROFILE } from '@constants/cache.constants'
import { useQuery } from 'react-query'

export const useUser = () => {
  const { data, error, isLoading } = useQuery(USER_PROFILE, getUserProfile)

  return {
    data,
    error,
    isLoading: isLoading
  }
}
