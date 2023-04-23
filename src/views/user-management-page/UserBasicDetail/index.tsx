import { Card, CardHeader } from '@mui/material'

import { PropertyList } from 'components/common/PropertyList/property-list'
import { PropertyListItem } from 'components/common/PropertyList/property-list-item'

import { useUserManagementContext } from 'contexts/user-management-page-context'

export const UserBasicDetails = () => {
  const { selectedUser } = useUserManagementContext()
  return (
    <Card>
      <CardHeader title="Details" />
      <PropertyList>
        <PropertyListItem divider label="Username" value={selectedUser?.Username} />
        <PropertyListItem divider label="Full name" value={selectedUser?.Name} />
        <PropertyListItem divider label="Status" value={selectedUser?.Status ? 'Active' : 'Deactive'} />
        <PropertyListItem divider label="Created" value={selectedUser?.CreateTime} />
        <PropertyListItem divider label="Expire" value={selectedUser?.ExpireTime} />
        <PropertyListItem divider label="Salt" value={selectedUser?.Salt} />
      </PropertyList>
    </Card>
  )
}
