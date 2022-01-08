import { useAuthContext } from '@contexts/Auth.context'
import { DEFAULT_USER_IMAGE } from '@helpers/images'
import { useUser } from './fetch/useUser'

export const useUserImage = () => {
  const { data } = useUser()
  const { isLogged } = useAuthContext()
  const userImage = isLogged ? data?.profilePic || DEFAULT_USER_IMAGE : DEFAULT_USER_IMAGE

  return {
    userImage
  }
}
