import { getUserProfile } from '@apis/user.api'
import { INTERVAL_TO_REFRESH, USER_PROFILE } from '@constants/cache.constants'
import useSWR from 'swr'

export const useUser = () => {
  const { data, error } = useSWR(USER_PROFILE, getUserProfile, {
    revalidateOnFocus: false,
    refreshInterval: INTERVAL_TO_REFRESH
  })

  return {
    data,
    error,
    isLoading: !data && !error
  }
}
