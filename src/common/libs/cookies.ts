import Cookies from 'js-cookie'

export const getCookie = (field: string) => {
  return Cookies.get(field)
}

export const setCookie = (field: string, value: string) => {
  Cookies.set(field, value, { expires: 3 })
}

export const removeCookie = (field: string) => {
  Cookies.remove(field)
}
