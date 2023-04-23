import { TableHead, TableRow, styled } from '@mui/material'

export const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const StyledTableHead = styled(TableHead)(() => ({
  '& tr th': {
    backgroundColor: 'inherit !important', // ! Use important
  },
}))

export const Center = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
