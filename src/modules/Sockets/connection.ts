import { SOCKET_URI } from '@constants/env.constants'
import { io } from 'socket.io-client'

export const connectSockets = () => {
  const socket = io(SOCKET_URI, { transports: ['websocket'] })

  socket.on('connect', () => {
    console.log('conect')
  })
}
