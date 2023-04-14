import { Divider, Table, TableBody, TableCell, TableRow } from '@mui/material'

import { CoreSvg } from 'components/core/CoreSvg'

import { SeverityPill } from 'components/common/ServerityPill'
import { SeverityPillColor } from 'components/common/ServerityPill/styled'

import { VmInstanceType, VmSpec } from 'types/vm-instance'

import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

const RenderVmSpec = ({ spec }: { spec: VmSpec }) => {
  return (
    <>
      {spec.os} <br /> {spec.vCPUs}, {spec.RAM}, {spec.storage}
    </>
  )
}

export interface InstanceTableProps {
  instances?: VmInstanceType[]
}

export const InstanceTable = ({ instances = [] }: InstanceTableProps) => {
  return (
    <Table>
      <StyledTableHead>
        <TableRow>
          <TableTextCell type="header"> </TableTextCell>
          <TableTextCell type="header">Name</TableTextCell>
          <TableTextCell type="header">Spec</TableTextCell>
          <TableTextCell type="header">IP Addresses</TableTextCell>
          <TableTextCell type="header">Status</TableTextCell>
          <TableTextCell type="header">Console</TableTextCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {instances.map((instance: VmInstanceType) => {
          const pillColor: SeverityPillColor = instance.isActive ? 'success' : 'error'
          const pillText: string = instance.isActive ? 'active' : 'inactive'
          return (
            <StyledTableRow key={instance.id}>
              <TableCell>
                <Center>
                  <CoreSvg src="/static/icons/cloud-server.svg" width={30} />
                </Center>
              </TableCell>
              <TableTextCell>{instance.name}</TableTextCell>
              <TableTextCell>
                <RenderVmSpec spec={instance.spec} />
              </TableTextCell>
              <TableTextCell>{instance.ipAddress}</TableTextCell>
              <TableCell>
                <SeverityPill color={pillColor} text={pillText} minWidth={80} />
              </TableCell>
              <TableCell>
                <Center>
                  <CoreSvg src="/static/icons/console.svg" width={24} />
                </Center>
              </TableCell>
            </StyledTableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
