import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import type { FC } from 'react'
import { useState } from 'react'

import { consoleApi } from 'api/backend/service/console'

import { CoreSvg } from 'components/core/CoreSvg'

import { VncConsole } from 'components/common/VncConsole'

import { Instance, InstanceSpec } from 'types/instance'

import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

const RenderVmSpec = ({ spec }: { spec: InstanceSpec }) => {
  return (
    <>
      {spec.maxcpu} vCPU, RAM {spec.maxmem / 1073741824} GB <br /> Disk size : {spec.maxdisk / 1073741824} GB
    </>
  )
}

export interface InstanceTableProps {
  instances?: Instance[]
  onInstanceSelect: (instance: Instance | null) => void
}

export const InstanceTable: FC<InstanceTableProps> = (props) => {
  const { instances = [], onInstanceSelect } = props
  const [url, setUrl] = useState('')
  const [ticket, setTicket] = useState('')
  const [selectedInstance, setSelectedInstance] = useState<Instance | null>(null)

  const handleButtonClick = async (instance: Instance) => {
    console.log('Clicked row data:', instance)
    try {
      // const response = await consoleApi.fetchConsoleVM(instance.node, `${instance.vmid}`, 'admin')
      const response = await consoleApi.vncProxy('admin', instance.node, instance.vmid)
      console.log(response.port, response.ticket, response.url)
      setTicket(response.ticket)
      setUrl(response.url)
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
        {/* console iframe */}
        {/* {url && (
          <iframe
            src={url}
            title="My iframe"
            width="900"
            height="600"
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        )} */}
        {/* console iframe */}
        <div>{ticket && <VncConsole ticket={ticket} url={url} />}</div>
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
