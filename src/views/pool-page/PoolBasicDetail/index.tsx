import { Card, CardHeader } from '@mui/material'

import { PropertyList } from 'components/common/PropertyList/property-list'
import { PropertyListItem } from 'components/common/PropertyList/property-list-item'

import { usePoolContext } from 'contexts/pool-page-context'

export const PoolBasicDetails = () => {
  const { selectedPool } = usePoolContext()
  return (
    <Card>
      <CardHeader title="Details" />
      <PropertyList>
        <PropertyListItem divider label="ID" value={`${selectedPool?.ID}`} />
        <PropertyListItem divider label="Course Code" value={selectedPool?.Code} />
        <PropertyListItem divider label="Course Owner" value={selectedPool?.Owner} />
        <PropertyListItem divider label="Status" value={selectedPool?.Status ? 'Active' : 'Deactive'} />
        <PropertyListItem divider label="Created" value={selectedPool?.CreateTime} />
        <PropertyListItem divider label="Expire" value={selectedPool?.ExpireTime} />
      </PropertyList>
    </Card>
  )
}
