import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
// import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import type { FC } from 'react'
import { useRef, useState } from 'react'

import { consoleApi } from 'api/backend/service/console'

import { CoreSvg } from 'components/core/CoreSvg'

// import { VncConsole } from 'components/common/VncConsole'
import { Instance, InstanceSpec } from 'types/instance'

import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

const RenderVmSpec = ({ spec }: { spec: InstanceSpec }) => {
  return (
    <>
      CPU {spec.maxcpu} vCPU, RAM {spec.maxmem / 1073741824} GB <br /> Disk size : {spec.maxdisk / 1073741824} GB
    </>
  )
}

export interface InstanceTableProps {
  instances?: Instance[]
  onInstanceSelect: (instance: Instance | null) => void
}

export const InstanceTable: FC<InstanceTableProps> = (props) => {
  const { instances = [], onInstanceSelect } = props
  // const [url, setUrl] = useState('')
  // const router = useRouter()
  // const [ticket, setTicket] = useState('')
  const [selectedInstance, setSelectedInstance] = useState<Instance | null>(null)

  const windowFeatures =
    'width=800, height=600, toolbar=no, menubar=no, scrollbars=no, resizable=yes, location=no, status=no'

  const openedWindows = useRef<Map<string, Window>>(new Map())

  const openNewWindow = (url: string) => {
    // Check if the window is already opened and not closed
    const existingWindow = openedWindows.current.get(url)
    if (existingWindow && !existingWindow.closed) {
      existingWindow.focus()
    } else {
      const newWindow = window.open(url, '_blank', windowFeatures)

      if (newWindow) {
        openedWindows.current.set(url, newWindow)

        // Optional: Close the window when the main page is closed/unloaded
        window.addEventListener('unload', () => {
          if (newWindow) newWindow.close()
        })
      }
    }
  }
  // const navigateToVMConsole = (url: string) => {
  //   router.push({
  //     pathname: '/vm-console',
  //     query: { url },
  //   })
  // }

  const handleButtonClick = async (instance: Instance) => {
    console.log('Clicked row data:', instance)
    try {
      const response = await consoleApi.fetchConsoleVM(instance.node, `${instance.vmid}`, 'admin')
      // const response = await consoleApi.vncProxy('admin', instance.node, instance.vmid)
      console.log(response)
      // setTicket(response.ticket)
      // navigateToVMConsole(response)
      openNewWindow(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Table>
      <StyledTableHead>
        <TableRow>
          <TableTextCell type="header"> </TableTextCell>
          <TableTextCell type="header">Name</TableTextCell>
          <TableTextCell type="header">VMID</TableTextCell>
          <TableTextCell type="header">Spec</TableTextCell>
          <TableTextCell type="header">Status</TableTextCell>
          <TableTextCell type="header">Console</TableTextCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {/* <div>{ticket && <VncConsole ticket={ticket} url={url} />}</div> */}
        {instances.map((instance: Instance) => {
          return (
            <StyledTableRow
              key={instance.vmid}
              onClick={() => {
                onInstanceSelect(instance)
                setSelectedInstance(instance)
                console.log('Selected instance:', instance)
              }}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedInstance?.vmid === instance.vmid ? '#f3f3f3' : '',
              }}
            >
              <TableCell>
                <Center>
                  <CoreSvg src="/static/icons/cloud-server.svg" width={30} />
                </Center>
              </TableCell>
              <TableTextCell>{instance.name}</TableTextCell>
              <TableTextCell>{instance.vmid}</TableTextCell>
              <TableTextCell>
                <RenderVmSpec spec={{ maxcpu: instance.maxcpu, maxmem: instance.maxmem, maxdisk: instance.maxdisk }} />
              </TableTextCell>
              <TableTextCell>{instance.status}</TableTextCell>
              <TableCell>
                <IconButton onClick={() => handleButtonClick(instance)}>
                  <Center>
                    <CoreSvg src="/static/icons/console.svg" width={24} />
                  </Center>
                </IconButton>
              </TableCell>
            </StyledTableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

InstanceTable.propTypes = {
  instances: PropTypes.array,
  onInstanceSelect: PropTypes.func.isRequired,
}
