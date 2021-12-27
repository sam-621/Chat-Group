import { getUserProfile } from '@apis/user.api'
import { USER_PROFILE } from '@constants/cache.constants'
import useSWR from 'swr'

export const useUser = () => {
  const { data, error } = useSWR(USER_PROFILE, getUserProfile)

  return {
    data,
    error,
    isLoading: !data && !error
  }
}
