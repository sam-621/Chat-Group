export interface IValidateAuthFormData {
  (email: string, password: string, username?: string): {
    isValidData: boolean
    message: string
  }
}
