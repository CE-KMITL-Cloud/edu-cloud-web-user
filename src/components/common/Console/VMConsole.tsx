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

  // Mock data for testing
  useEffect(() => {
    // Mock data for testing
    const data = {
      url: 'wss://edu.ce.kmitl.cloud/api2/json/nodes/work-3/qemu/100/vncwebsocket',
      ticket:
        'PVEVNC:643D360D::d0UyG/TdIWJSOM1UAHrPbnCwKip6SWRNpt1f4cOgpnJvP9KrY2Y5J+wzIPDM/sCnHAdYufpk2Il7i5kyYUmujw52vxHLuAxC89TiS4soWPC7c5XcHFQ11P9nacwpH1NEzlxEIb9FpVc6vH0t9Lpf5ceYLil1XMZB254TrvMyUk18IbaNOhtqUHtmT2Wxy+UwcNPlDA7tiAc3uqjk1BCE3cPonf8BMzYKNA7tszFAksWdTzcFYnYowrbvdnDEOUriM0MyvFL57JEbQBq1kvPQuXiBZ1J9mkLqhXphXOH6blApv1U+Ndtuq4y3vlOOe4WRUaVvSdP1Zykt6T0etflviw==',
    }

    setVncTicket(data)
  }, [])

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
