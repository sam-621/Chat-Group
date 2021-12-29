import { screen } from '@testing-library/react'
import { mountComponent } from '../../../../__mocks__/utils/mountComponent'
import { RegisterForm } from '../components/RegisterForm'

describe('Testing <RegisterForm />', () => {
  test('should render', () => {
    mountComponent(<RegisterForm />)
    screen.debug()
  })
})
