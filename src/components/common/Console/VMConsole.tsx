import { useEffect, useState } from 'react'
import VncDisplay from 'react-vnc-display'

interface VMConsoleProps {
  apiUrl: string
}

const VMConsole: React.FC<VMConsoleProps> = ({ apiUrl }) => {
  const [vncTicket, setVncTicket] = useState<{
    url: string
    ticket: string
  } | null>(null)

  //   // Fetch the VNC ticket and URL from your backend API
  //   useEffect(() => {
  //     const fetchVncTicket = async () => {
  //       const response = await fetch(apiUrl)
  //       const data = await response.json()

  //       setVncTicket(data)
  //     }

  //     fetchVncTicket()
  //   }, [apiUrl])

  useEffect(() => {
    const fetchData = async () => {
      let data
      try {
        if (apiUrl.startsWith('{')) {
          data = JSON.parse(apiUrl)
        } else {
          const response = await fetch(apiUrl)
          data = await response.json()
        }
        setVncTicket(data)
      } catch (error) {
        console.error('Error fetching VNC ticket:', error)
      }
    }

    fetchData()
  }, [apiUrl])

  return (
    <>
      {vncTicket && (
        <VncDisplay
          url={vncTicket.url}
          encrypt
          shared
          onUpdateState={(rfb, newState) => {
            console.log('VNC state:', newState)
          }}
          onPasswordRequired={() => {
            return vncTicket.ticket
          }}
        />
      )}
    </>
  )
}

export default VMConsole
