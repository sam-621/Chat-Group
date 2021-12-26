import { act, render, RenderOptions, waitFor } from '@testing-library/react'

export const mountComponent = async (Component: JSX.Element, options?: RenderOptions) => {
  await waitFor(() => {
    act(() => {
      render(<>{Component}</>, options)
    })
  })
}
