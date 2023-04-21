import { Card, CardHeader } from '@mui/material'
import PropTypes from 'prop-types'
import type { FC } from 'react'

import { PropertyList } from 'components/common/PropertyList/property-list'
import { PropertyListItem } from 'components/common/PropertyList/property-list-item'

import { Pool } from 'types/pool'

interface PoolBasicDetailsProps {
  pool: Pool | null
}

export const PoolBasicDetails: FC<PoolBasicDetailsProps> = (props) => {
  const { pool } = props

  return (
    <Card>
      <CardHeader title="Details" />
      <PropertyList>
        <PropertyListItem divider label="ID" value={`${pool?.ID}`} />
        <PropertyListItem divider label="Course Code" value={pool?.Code} />
        <PropertyListItem divider label="Course Owner" value={pool?.Owner} />
        <PropertyListItem divider label="Status" value={pool?.Status ? 'Active' : 'Deactive'} />
        <PropertyListItem divider label="Created" value={pool?.CreateTime} />
        <PropertyListItem divider label="Expire" value={pool?.ExpireTime} />
      </PropertyList>
    </Card>
  )
}
