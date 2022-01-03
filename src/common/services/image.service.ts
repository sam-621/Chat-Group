import { CLOUDINARY_API_DOMAIN, CLOUDINARY_NAME } from '@constants/env.constants'
import { ServiceResponse } from '@helpers/service-response'
import { TUploadResponse } from '@interfaces/services/image.interface'
import HttpRequest from './http-request.service'

const URL_PREFIX = 'v1_1'

export class ImageService extends HttpRequest {
  async upload(formData: FormData): Promise<ServiceResponse<TUploadResponse>> {
    this.configRequest({
      endpoint: `${URL_PREFIX}/${CLOUDINARY_NAME}/image/upload`,
      apiDomain: CLOUDINARY_API_DOMAIN,
      port: 0
    })

    const response = await this.post<TUploadResponse>(formData)

    return new ServiceResponse(response.data, response)
  }
}
