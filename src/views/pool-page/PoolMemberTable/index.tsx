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
import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { poolsApi } from 'api/backend/service/pool'
import { userApi } from 'api/backend/service/user'

import { Pool } from 'types/pool'

interface PoolMemberTableProps {
  // count?: number
  pool?: Pool | null
  // onDeselectAll?: () => void
  // onDeselectOne?: (userId: string) => void
  // onPageChange?: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  // onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void
  // onSelectAll?: () => void
  // onSelectOne?: (userId: string) => void
  // page?: number
  // rowsPerPage?: number
  // selected?: string[]
}

export const PoolMemberTable: FC<PoolMemberTableProps> = ({ pool }) => {
  const [students, setStudents] = useState<string[]>([])
  const [members, setMembers] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [editMode, setEditMode] = useState(false)

  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await userApi.fetchStudents('admin')
      console.log(response)
      setStudents(response)
    }
    fetchStudents()
  }, [])

  useEffect(() => {
    if (pool) {
      const fetchMembers = async () => {
        const response = await poolsApi.fetchRemainingStudents('admin', pool.Owner, pool.Code)
        console.log(response)
        setMembers(response)
      }
      fetchMembers()
    }
  }, [])

  function compareArrays(arr1: string[], arr2: string[]): Array<[string, boolean]> {
    return arr1.map((item: string) => [item, arr2.includes(item)])
  }

  const handleSelect = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((selectedName) => selectedName !== name))
    } else {
      setSelected([...selected, name])
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell-width-sm">
              <Button onClick={handleEditMode}>{editMode ? 'Save' : 'Edit member'}</Button>
            </TableCell>
            <TableCell className="tableCell-width-md">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {compareArrays(students, members).map((item) => (
            <TableRow key={item[0]}>
              <TableCell className="tableCell-width-sm">
                <Checkbox checked={item[1]} onChange={() => handleSelect(item[0])} disabled={!editMode} />
              </TableCell>
              <TableCell className="tableCell-width-md">{item[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
