import { ImageService } from '@services/image.service'

const imageService = new ImageService()

export const uploadImage = async (formData: FormData) => {
  const { data } = await imageService.upload(formData)

  return data
}
