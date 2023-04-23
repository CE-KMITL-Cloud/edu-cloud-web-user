import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  Link,
  Paper,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { observer } from 'mobx-react-lite'

import { usePoolContext } from 'contexts/pool-page-context'

import { StyledTableContainer, StyledTableHead } from './styled'

export const PoolVmTable = observer(() => {
  const { selectedPool } = usePoolContext()

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Table>
        <StyledTableContainer>
          <StyledTableHead>
            <TableRow>
              <TableCell className="tableCell-width-md">VMID</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {selectedPool?.VMID.length !== 0 ? (
              selectedPool?.VMID.map((item) => (
                <TableRow key={item}>
                  <TableCell className="tableCell-width-md">{item}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="tableCell-width-md">Not have template in this resource pool.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </StyledTableContainer>
      </Table>
    </Paper>
  )
})
