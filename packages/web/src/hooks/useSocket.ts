import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const SOCKET_URL = process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:3001'

export function useSocket() {
  const socketRef = useRef<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL, {
        transports: ['websocket'],
        autoConnect: true,
      })

      socketRef.current.on('connect', () => {
        setIsConnected(true)
        console.log('Socket connected:', socketRef.current?.id)
      })

      socketRef.current.on('disconnect', () => {
        setIsConnected(false)
        console.log('Socket disconnected')
      })
    }

    return () => {
      socketRef.current?.disconnect()
    }
  }, [])

  const subscribe = (event: string, callback: (data: any) => void) => {
    socketRef.current?.on(event, callback)
  }

  const unsubscribe = (event: string, callback?: (data: any) => void) => {
    if (callback) {
      socketRef.current?.off(event, callback)
    } else {
      socketRef.current?.off(event)
    }
  }

  const emit = (event: string, data: any) => {
    socketRef.current?.emit(event, data)
  }

  return {
    socket: socketRef.current,
    isConnected,
    subscribe,
    unsubscribe,
    emit,
  }
}
