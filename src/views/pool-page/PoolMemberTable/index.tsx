import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

import { poolsApi } from 'api/backend/app/pool'
import { userApi } from 'api/backend/app/user'

import { accountStore } from 'store/account-store'

import { usePoolContext } from 'contexts/pool-page-context'

import { StyledTableContainer, StyledTableHead } from './styled'

interface PoolMemberTableProps {
  editMode: boolean
  onSelectedChange: (selectedMembers: string[]) => void
}

export const PoolMemberTable = observer(({ editMode, onSelectedChange }: PoolMemberTableProps) => {
  const { selectedPool } = usePoolContext()

  const [students, setStudents] = useState<string[]>([])
  const [members, setMembers] = useState<string[]>([])

  const [selected, setSelected] = useState<string[]>([])
  const [fetchedMembers, setFetchedMembers] = useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      if (!accountStore.name) return
      const response = await userApi.fetchStudentsUsername('admin')
      // console.log(response)
      setStudents(response)
    }
    fetchStudents()
  }, [])

  useEffect(() => {
    if (selectedPool) {
      const fetchMembers = async () => {
        if (!accountStore.name) return
        const response = await poolsApi.fetchRemainingStudents('admin', selectedPool.Owner, selectedPool.Code)
        // console.log(response)
        setMembers(response)
        setFetchedMembers(true)
      }
      fetchMembers()
    }
  }, [selectedPool, students])

  useEffect(() => {
    console.log('selected array :', selected)
  }, [selected])

  useEffect(() => {
    if (fetchedMembers) {
      setSelected(students.filter((student) => !members.includes(student)))
    }
  }, [editMode, fetchedMembers, members, students])

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
              <TableCell className="tableCell-width-md">Members</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {students.map((student) => {
              const isChecked = selected.includes(student)

              return (
                <TableRow key={student}>
                  <TableCell className="tableCell-width-sm">
                    <Checkbox checked={isChecked} onChange={() => handleSelect(student)} disabled={!editMode} />
                  </TableCell>
                  <TableCell className="tableCell-width-md">{student}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  )
})
