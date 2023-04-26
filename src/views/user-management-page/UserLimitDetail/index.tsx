import { Card, CardHeader } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { FC, useEffect, useState } from 'react'

import { userApi } from 'api/backend/app/user'

import { EditablePropertyListItem } from 'components/common/PropertyList/editable-property-list-item'
import { PropertyList } from 'components/common/PropertyList/property-list'

import { accountStore } from 'store/account-store'

import { useUserManagementContext } from 'contexts/user-management-page-context'

import { UserLimit } from 'types'

interface UserLimitDetailsProps {
  updateLimit: UserLimit | undefined
  setUpdateLimit: (value: UserLimit) => void
}

export const UserLimitDetails: FC<UserLimitDetailsProps> = observer(({ updateLimit, setUpdateLimit }) => {
  const { selectedUser } = useUserManagementContext()
  const [userLimit, setUserLimit] = useState<UserLimit | null>(null)

  const [changedLimits, setChangedLimits] = useState<Partial<UserLimit>>({})

  const handleIncrement = (property: keyof UserLimit) => {
    if (typeof userLimit?.[property] === 'number') {
      const newChangedLimits = {
        ...changedLimits,
        [property]: ((changedLimits[property] as number) || (userLimit?.[property] as number)) + 1,
      }
      setChangedLimits(newChangedLimits)
      // Call setUpdateLimit here after updating changedLimits.
      setUpdateLimit({
        Username: userLimit.Username,
        MaxCPU: newChangedLimits.MaxCPU || userLimit.MaxCPU,
        MaxRAM: newChangedLimits.MaxRAM || userLimit.MaxRAM,
        MaxDisk: newChangedLimits.MaxDisk || userLimit.MaxDisk,
        MaxInstance: newChangedLimits.MaxInstance || userLimit.MaxInstance,
      })
    }
  }

  const handleDecrement = (property: keyof UserLimit) => {
    if (typeof userLimit?.[property] === 'number') {
      const currentValue = changedLimits[property] || (userLimit?.[property] as number)
      if (typeof currentValue === 'number') {
        if (currentValue > (userLimit?.[property] as number)) {
          const newChangedLimits = {
            ...changedLimits,
            [property]: currentValue - 1,
          }
          setChangedLimits(newChangedLimits)
          // Call setUpdateLimit here after updating changedLimits.
          setUpdateLimit({
            Username: userLimit.Username,
            MaxCPU: newChangedLimits.MaxCPU || userLimit.MaxCPU,
            MaxRAM: newChangedLimits.MaxRAM || userLimit.MaxRAM,
            MaxDisk: newChangedLimits.MaxDisk || userLimit.MaxDisk,
            MaxInstance: newChangedLimits.MaxInstance || userLimit.MaxInstance,
          })
        }
      }
    }
  }

  useEffect(() => {
    if (selectedUser) {
      const fetchMembers = async () => {
        if (!accountStore.email) return
        const response = await userApi.fetchUserLimit('admin', selectedUser.Username)
        console.log(response)
        setUserLimit(response)
      }
      fetchMembers()
    }
  }, [selectedUser])

  return (
    <Card>
      <CardHeader title="Limitation" />
      <PropertyList>
        <EditablePropertyListItem
          id="MaxInstance"
          divider
          label="Max Instance"
          placeholder={`${userLimit?.MaxInstance}`}
          value={changedLimits.MaxInstance || (userLimit?.MaxInstance as number)}
          onIncrement={() => handleIncrement('MaxInstance')}
          onDecrement={() => handleDecrement('MaxInstance')}
        />
        <EditablePropertyListItem
          id="MaxCPU"
          divider
          label="Max CPU"
          placeholder={`${userLimit?.MaxCPU}`}
          value={changedLimits.MaxCPU || (userLimit?.MaxCPU as number)}
          onIncrement={() => handleIncrement('MaxCPU')}
          onDecrement={() => handleDecrement('MaxCPU')}
        />
        <EditablePropertyListItem
          id="MaxRAM"
          divider
          label="Max RAM (GB)"
          placeholder={`${userLimit?.MaxRAM}`}
          value={changedLimits.MaxRAM || (userLimit?.MaxRAM as number)}
          onIncrement={() => handleIncrement('MaxRAM')}
          onDecrement={() => handleDecrement('MaxRAM')}
        />
        <EditablePropertyListItem
          id="MaxDisk"
          divider
          label="Max Disk (GB)"
          placeholder={`${userLimit?.MaxDisk}`}
          value={changedLimits.MaxDisk || (userLimit?.MaxDisk as number)}
          onIncrement={() => handleIncrement('MaxDisk')}
          onDecrement={() => handleDecrement('MaxDisk')}
        />
      </PropertyList>
    </Card>
  )
})
