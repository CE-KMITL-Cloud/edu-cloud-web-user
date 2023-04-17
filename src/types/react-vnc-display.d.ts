declare module 'react-vnc-display' {
  import { Component } from 'react'

  interface VncDisplayProps {
    url: string
    encrypt?: boolean
    shared?: boolean
    onUpdateState?: (rfb: any, newState: any) => void
    onPasswordRequired?: () => string
  }

  export default class VncDisplay extends Component<VncDisplayProps> {}
}
