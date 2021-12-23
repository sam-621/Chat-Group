import { SOCKET_URI } from '@constants/env.constants'
import { io } from 'socket.io-client'

export const socket = io(SOCKET_URI, { transports: ['websocket'] })
