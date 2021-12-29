import { AuthProvider } from '@contexts/Auth.context'
import { act, render, RenderOptions, waitFor } from '@testing-library/react'
import { ToastContainer } from 'react-toastify'

export const mountComponent = async (Component: JSX.Element, options?: RenderOptions) => {
  await waitFor(() => {
    act(() => {
      render(
        <AuthProvider>
          {Component}{' '}
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </AuthProvider>,
        options
      )
    })
  })
}
