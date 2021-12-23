import { UserService } from '@services/user.service'

const userService = new UserService()

export const getUser = async () => {
  const { data, response } = await userService.getUserProfile()

  console.log({
    data,
    response
  })
}
