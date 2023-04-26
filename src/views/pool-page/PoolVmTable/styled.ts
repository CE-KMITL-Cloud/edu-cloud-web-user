import { TableContainer, TableHead } from '@mui/material'
import { styled } from '@mui/system'

export const StyledTableContainer = styled(TableContainer)({
  maxHeight: 200, // Adjust this value based on your desired scroll height
  overflow: 'auto',
})

export const StyledTableHead = styled(TableHead)({
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',
  zIndex: 100,
})
