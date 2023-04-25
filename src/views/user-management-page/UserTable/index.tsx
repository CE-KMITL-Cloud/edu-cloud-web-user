import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { AppBar, IconButton, Tab, Table, TableBody, TableCell, TableRow, Tabs } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { ChangeEvent, useState } from 'react'

import { SeverityPill } from 'components/common/ServerityPill'
import { SeverityPillColor } from 'components/common/ServerityPill/styled'

import { accountStore } from 'store/account-store'

import { useUserManagementContext } from 'contexts/user-management-page-context'

import { formatDateFromUnix } from 'utils/converter'

import { User } from 'types'

import { UserDetailModal } from '../UserDetailModal'
import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

export const UserTable = observer(() => {
  const { students, faculties, selectedUser, setSelectedUser, handleFacutiesGet, handleStudentsGet } =
    useUserManagementContext()

  const [value, setValue] = useState<number>(0)

  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
    if (accountStore.email) {
      // handleStudentsGet(accountStore.email)
      // handleFacutiesGet(accountStore.email)
      handleStudentsGet('admin')
      handleFacutiesGet('admin')
    }
  }

  const [detailModalOpen, setDetailModalOpen] = useState(false)

  const handleOpenDetailModal = async (user: User) => {
    setDetailModalOpen(true)
    console.log('Clicked row data:', user)
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#F7F7F7',
          boxShadow: 'none',
          borderRadius: '8px 8px 0 0',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ minHeight: '48px' }}
        >
          <Tab
            label="Students"
            sx={{
              fontWeight: 'bold',
              textTransform: 'none',
              minHeight: '48px',
              minWidth: 'auto',
              px: 2,
              color: 'black',
            }}
          />
          <Tab
            label="Faculties"
            sx={{
              fontWeight: 'bold',
              textTransform: 'none',
              minHeight: '48px',
              minWidth: 'auto',
              px: 4,
              color: 'black',
            }}
          />
        </Tabs>
      </AppBar>
      <Table>
        <StyledTableHead>
          <TableRow>
            <TableTextCell type="header">Email</TableTextCell>
            <TableTextCell type="header">Full Name</TableTextCell>
            <TableTextCell type="header">Status</TableTextCell>
            <TableTextCell type="header">Expire</TableTextCell>
            <TableTextCell type="header">Details</TableTextCell>
          </TableRow>
        </StyledTableHead>
        {value === 0 ? (
          <TableBody>
            {students?.map((student: User) => {
              const pillColor: SeverityPillColor = student.Status ? 'success' : 'error'
              const pillText: string = student.Status ? 'active' : 'inactive'
              const expireDate = formatDateFromUnix(student.ExpireTime)
              return (
                <StyledTableRow
                  key={student.Username}
                  onClick={() => {
                    setSelectedUser(student)
                  }}
                >
                  <TableCell>{student.Username}</TableCell>
                  <TableTextCell>{student.Name}</TableTextCell>
                  <TableCell>
                    <SeverityPill color={pillColor} text={pillText} minWidth={80} />
                  </TableCell>
                  <TableTextCell>{expireDate}</TableTextCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        handleOpenDetailModal(student)
                      }}
                    >
                      <Center>
                        <ChevronRightIcon />
                      </Center>
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        ) : (
          <TableBody>
            {faculties?.map((faculty: User) => {
              const pillColor: SeverityPillColor = faculty.Status ? 'success' : 'error'
              const pillText: string = faculty.Status ? 'active' : 'inactive'
              const expireDate = formatDateFromUnix(faculty.ExpireTime)
              return (
                <StyledTableRow
                  key={faculty.Username}
                  onClick={() => {
                    setSelectedUser(faculty)
                  }}
                >
                  <TableCell>{faculty.Username}</TableCell>
                  <TableTextCell>{faculty.Name}</TableTextCell>
                  <TableCell>
                    <SeverityPill color={pillColor} text={pillText} minWidth={80} />
                  </TableCell>
                  <TableTextCell>{expireDate}</TableTextCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        handleOpenDetailModal(faculty)
                      }}
                    >
                      <Center>
                        <ChevronRightIcon />
                      </Center>
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        )}
        <UserDetailModal
          isOpen={detailModalOpen}
          title="User Detail"
          id={'user : ' + selectedUser?.Username}
          onConfirm={() => {}}
          onClose={() => {
            setDetailModalOpen(false)
          }}
        />
      </Table>
    </>
  )
})
