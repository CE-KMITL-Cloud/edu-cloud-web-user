import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import type { FC } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { SeverityPill } from 'components/common/ServerityPill'
import { SeverityPillColor } from 'components/common/ServerityPill/styled'

import { Pool } from 'types/pool'

import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

interface PoolTableProps {
  pools?: Pool[]
}

export const PoolTable: FC<PoolTableProps> = (props) => {
  const { pools = [] } = props
  return (
    <Table>
      <StyledTableHead>
        <TableRow>
          <TableTextCell type="header">Course Code</TableTextCell>
          <TableTextCell type="header">Course Name</TableTextCell>
          <TableTextCell type="header">Course Owner</TableTextCell>
          <TableTextCell type="header">Status</TableTextCell>
          <TableTextCell type="header">Details</TableTextCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {pools.map((pool: Pool) => {
          const pillColor: SeverityPillColor = pool.Status ? 'success' : 'error'
          const pillText: string = pool.Status ? 'active' : 'inactive'
          console.log('pool :', pool)
          return (
            <StyledTableRow key={pool.ID}>
              <TableCell>{pool.Code}</TableCell>
              <TableTextCell>{pool.Name}</TableTextCell>
              <TableTextCell>{pool.Owner}</TableTextCell>
              <TableCell>
                <SeverityPill color={pillColor} text={pillText} minWidth={80} />
              </TableCell>
              <TableCell>
                <IconButton>
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

PoolTable.propTypes = {
  pools: PropTypes.array.isRequired,
}
