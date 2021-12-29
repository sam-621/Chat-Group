import Cookies from 'js-cookie'

export const getCookie = (field: string) => {
  return Cookies.get(field)
}

export const setCookie = (field: string, value: string) => {
  Cookies.set(field, value)
}
