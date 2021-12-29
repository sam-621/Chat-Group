import { screen } from '@testing-library/react'
import { mountComponent } from '../../../../__mocks__/utils/mountComponent'
import { RegisterForm } from '../components/RegisterForm'
import userEvent from '@testing-library/user-event'

describe('Testing <RegisterForm />', () => {
  test('password must have more than 5 characters', async () => {
    await mountComponent(<RegisterForm />)

    const usernameInput = screen.getByPlaceholderText(/Username/i)
    const emailInput = screen.getByPlaceholderText(/Email/i)
    const passwordInput = screen.getByPlaceholderText(/Password/i)

    userEvent.type(usernameInput, 'admin')
    userEvent.type(emailInput, 'admin@gmail.com')
    userEvent.type(passwordInput, '1234')

    const submitButton = screen.getByRole('button', {
      name: /create account/i
    })

    userEvent.click(submitButton)

    const errorMessage = screen.getByText(/Password must be bigger than 5 characters/i)

    expect(errorMessage).toBeInTheDocument()
  })
})
