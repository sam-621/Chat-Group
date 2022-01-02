import { CLOUD_API_DOMAIN, CLOUD_NAME } from '@constants/env.constants'
import { ServiceResponse } from '@helpers/service-response'
import HttpRequest from './http-request.service'

const URL_PREFIX = 'v1_1'

export class ImageService extends HttpRequest {
  async upload(formData: FormData) {
    this.configRequest({
      endpoint: `${URL_PREFIX}/${CLOUD_NAME}/image/upload`,
      apiDomain: CLOUD_API_DOMAIN
    })

    const response = await this.post(formData)
    console.log(response)

    return new ServiceResponse(response.data, response)
  }
}
