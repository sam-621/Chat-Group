import { render, RenderOptions } from '@testing-library/react'

export const mountComponent = (Component: JSX.Element, options?: RenderOptions) => {
  render(<>{Component}</>, options)
}
