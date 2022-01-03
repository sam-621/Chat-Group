import { toast } from 'react-toastify'

export const showErrorMessage = (message: string) => {
  toast.error(message)
}

export const showSuccessMessage = (message: string) => {
  toast.success(message)
}
