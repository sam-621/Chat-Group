import { screen } from '@testing-library/react'
import { mountComponent } from '../../../../__mocks__/utils/mountComponent'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '../components/LoginForm'

describe('Testing <LoginForm />', () => {
  test('password must have more than 5 characters', async () => {
    await mountComponent(<LoginForm />)

    const emailInput = screen.getByPlaceholderText(/Email/i)
    const passwordInput = screen.getByPlaceholderText(/Password/i)

    userEvent.type(emailInput, 'admin@gmail.com')
    userEvent.type(passwordInput, '1234')

    const submitButton = screen.getByRole('button', {
      name: /Login/i
    })

    userEvent.click(submitButton)

    const errorMessage = screen.getByText(/Password must be bigger than 5 characters/i)

    expect(errorMessage).toBeInTheDocument()
  })
})
