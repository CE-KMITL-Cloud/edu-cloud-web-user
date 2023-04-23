import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Box, Divider, IconButton, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material'
import { FC } from 'react'

import { StyledListItem } from './styled'

interface EditablePropertyListItemProps {
  id: number | string
  divider: boolean
  label: string
  value: number
  placeholder: string
  onIncrement: (id: number | string) => void
  onDecrement: (id: number | string) => void
}

export const EditablePropertyListItem: FC<EditablePropertyListItemProps> = ({
  id,
  divider,
  label,
  value,
  placeholder,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      <StyledListItem>
        <ListItemText
          primary={
            <Typography sx={{ minWidth: 'inherit' }} variant="subtitle2">
              {label}
            </Typography>
          }
          secondary={
            <Box
              sx={{
                flex: 1,
                mt: 0.5,
              }}
            >
              <Typography color="text.secondary" variant="body2">
                {value ? value : placeholder}
              </Typography>
            </Box>
          }
          sx={{
            display: 'flex',
            flexDirection: 'column',
            my: 0,
          }}
        />
        <ListItemSecondaryAction>
          <IconButton>
            <ArrowDropUpIcon color="success" onClick={() => onIncrement(id)} />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon color="error" onClick={() => onDecrement(id)} />
          </IconButton>
        </ListItemSecondaryAction>
      </StyledListItem>
      {divider ? <Divider /> : null}
    </>
  )
}
