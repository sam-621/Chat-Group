export const DEFAULT_USER_IMAGE = '/icons/default-user.svg'

export const isInvalidImage = (extension: string) => {
  console.log(extension)

  return (
    extension !== 'png' &&
    extension !== 'jpg' &&
    extension !== 'svg' &&
    extension !== 'jpeg' &&
    extension !== 'ico'
  )
}

export const getFilenameExtension = (filename: string) => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
}

export const getInputImage = (el: HTMLInputElement | null): File | null => {
  if (!el) return null
  if (!el.files?.length) return null

  return el.files[0]
}
