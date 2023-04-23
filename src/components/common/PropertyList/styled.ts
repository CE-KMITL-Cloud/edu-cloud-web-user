import { styled } from '@mui/material'
import { Divider, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'

export const StyledListItem = styled(ListItem)(() => ({
  paddingLeft: 25,
  paddingRight: 16,
}))

export const StyledInput = styled('input')(() => ({
  marginLeft: 8,
  width: 'calc(100% - 100px)', // Adjust this value based on the label width, if necessary
}))
