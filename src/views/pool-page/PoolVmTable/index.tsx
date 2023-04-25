import { Checkbox, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

import { usePoolContext } from 'contexts/pool-page-context'

import { StyledTableContainer, StyledTableHead } from './styled'

interface PoolVmTableProps {
  editMode: boolean
  onSelectedChange: (selectedInstances: string[]) => void
}

export const PoolVmTable = observer(({ editMode, onSelectedChange }: PoolVmTableProps) => {
  const { selectedPool } = usePoolContext()
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    console.log('selected instances :', selected)
  }, [selected])

  useEffect(() => {
    if (!selectedPool?.VMID) return
    setSelected(selectedPool?.VMID)
  }, [editMode, selectedPool])

  const handleSelect = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((selectedName) => selectedName !== name))
    } else {
      setSelected([...selected, name])
    }
  }

  useEffect(() => {
    // Call onSelectedChange whenever the selected state changes
    onSelectedChange(selected)
  }, [selected, onSelectedChange])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <StyledTableContainer>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell className="tableCell-width-sm">Status</TableCell>
              <TableCell className="tableCell-width-md">VMID</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {selectedPool?.VMID.length !== 0 ? (
              selectedPool?.VMID.map((item) => {
                const isChecked = selected.includes(item)
                return (
                  <TableRow key={item}>
                    <TableCell className="tableCell-width-sm">
                      <Checkbox checked={isChecked} onChange={() => handleSelect(item)} disabled={!editMode} />
                    </TableCell>
                    <TableCell className="tableCell-width-md">{item}</TableCell>
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell className="tableCell-width-sm"> </TableCell>
                <TableCell className="tableCell-width-md">Not have template in this resource pool.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  )
})
