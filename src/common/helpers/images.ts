export const DEFAULT_USER_IMAGE = '/icons/default-user.svg'

export const isInvalidImage = (extension: string) => {
  return (
    extension !== '.png' &&
    extension !== '.jpg' &&
    extension !== '.svg' &&
    extension !== '.jpeg' &&
    extension !== '.ico'
  )
}
