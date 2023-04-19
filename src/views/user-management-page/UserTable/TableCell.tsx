import { TableCell, Typography } from '@mui/material'
import { ReactNode, memo } from 'react'

interface TableTextCellProps {
  type?: 'header' | 'body'
  children: ReactNode
}

export const TableTextCell = memo(({ children, type = 'body' }: TableTextCellProps) => (
  <TableCell>
    <Typography variant="body2" color="secondary" fontWeight={type === 'header' ? 700 : 400}>
      {children}
    </Typography>
  </TableCell>
))
