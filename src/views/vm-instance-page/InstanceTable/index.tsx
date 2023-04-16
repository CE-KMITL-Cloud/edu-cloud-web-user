import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import type { FC } from 'react'
import { useState } from 'react'

import { consoleApi } from 'api/backend/service/console'

import { CoreSvg } from 'components/core/CoreSvg'

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
}

export const InstanceTable: FC<InstanceTableProps> = (props) => {
  const { instances = [] } = props
  const [url, setUrl] = useState('')
  const handleButtonClick = async (instance: Instance) => {
    console.log('Clicked row data:', instance)
    const response = await consoleApi.fetchConsoleVM(instance.node, `${instance.vmid}`, 'admin')
    console.log(response)
    setUrl(response)
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
        {url && (
          <iframe
            src={url}
            title="My iframe"
            width="900"
            height="600"
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        )}
        {/* console iframe */}
        {instances.map((instance: Instance) => {
          return (
            <StyledTableRow key={instance.vmid}>
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
}
