export const MODE = process.env.NODE_ENV
export const API_PORT = Number(process.env.PORT) || 4000
export const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || 'http://localhost:'
export const SOCKET_URI = process.env.NEXT_PUBLIC_SOCKET_URI || 'http://localhost:4000/'
export const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME || ''
export const CLOUDINARY_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || ''
export const CLOUDINARY_API_DOMAIN = process.env.NEXT_PUBLIC_CLOUDINARY_API_DOMAIN || ''
