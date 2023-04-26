import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { useRef } from 'react'

import { consoleApi } from 'api/backend/app/console'

import { CoreSvg } from 'components/core/CoreSvg'

import { useVmInstanceContext } from 'contexts/vm-instance-page-context'

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

export const InstanceTable = () => {
  const { instances, selectedInstance, setSelectedInstance } = useVmInstanceContext()

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

  const handleButtonClick = async (instance: Instance) => {
    console.log('Clicked row data:', instance)
    try {
      const response = await consoleApi.fetchConsoleVM(instance.node, `${instance.vmid}`, 'admin@kmitl.ac.th')
      // const response = await consoleApi.vncProxy('admin', instance.node, instance.vmid)
      console.log(response)
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
        {instances?.map((instance: Instance) => {
          return (
            <StyledTableRow
              key={instance.vmid}
              onClick={() => {
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
