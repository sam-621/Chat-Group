/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom'

jest.mock(
  'next/image',
  () =>
    function ImageMock({ src, alt }) {
      return <img src={src} alt={alt} />
    }
)

// descomentar si no quieres que te salgan errores en consola en los test

// const homepageErrors = console.error.bind(console.error)
// beforeAll(() => {
//   console.error = errormessage => null
// })
// afterAll(() => {
//   console.error = homepageErrors
// })
