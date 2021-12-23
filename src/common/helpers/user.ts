import { USER_ID_SS_FIELD } from '@constants/cache.constants'
import { v4 } from 'uuid'

/**
 * Helper which generate and save (in session storage) a user id when user is not logged
 */
export const generateUserId = () => {
  const userId = v4()
  window.sessionStorage.setItem(USER_ID_SS_FIELD, userId)
}

/**
 * Helper which gives you the user id when user is not logged
 * @returns user id
 */
export const getUserIdFromSS = () => {
  if (window === undefined) return ''

  return window.sessionStorage.getItem(USER_ID_SS_FIELD) || ''
}
