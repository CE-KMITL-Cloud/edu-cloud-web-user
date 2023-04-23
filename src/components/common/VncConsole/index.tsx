import RFB from 'novnc-core/lib/rfb'
import React, { useEffect, useRef } from 'react'

interface VncConsoleProps {
  ticket: string
  url: string
}

export const VncConsole: React.FC<VncConsoleProps> = ({ ticket, url }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const rfb = new RFB(canvasRef.current, `${url}?token=${ticket}`, {
        credentials: {
          password: '',
        },
      })

      rfb.addEventListener('connect', () => {
        console.log('Connected to VNC console successfully')
      })

      rfb.addEventListener('disconnect', () => {
        console.log('Disconnected from VNC console')
      })
      return () => {
        rfb.disconnect()
      }
    }

    return () => {}
  }, [canvasRef, ticket, url])

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  )
}
