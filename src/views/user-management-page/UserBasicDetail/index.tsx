import { Card, CardHeader } from '@mui/material'

import { PropertyList } from 'components/common/PropertyList/property-list'
import { PropertyListItem } from 'components/common/PropertyList/property-list-item'

import { useUserManagementContext } from 'contexts/user-management-page-context'

import { formatDateFromUnix } from 'utils/converter'

export const UserBasicDetails = () => {
  const { selectedUser } = useUserManagementContext()
  const createdDate = formatDateFromUnix(selectedUser?.CreateTime ? selectedUser?.CreateTime : '')
  const expireDate = formatDateFromUnix(selectedUser?.ExpireTime ? selectedUser?.ExpireTime : '')
  return (
    <Card>
      <CardHeader title="Details" />
      <PropertyList>
        <PropertyListItem divider label="Username" value={selectedUser?.Username} />
        <PropertyListItem divider label="Full name" value={selectedUser?.Name} />
        <PropertyListItem divider label="Status" value={selectedUser?.Status ? 'Active' : 'Deactive'} />
        <PropertyListItem divider label="Created" value={createdDate} />
        <PropertyListItem divider label="Expire" value={expireDate} />
      </PropertyList>
    </Card>
  )
}
