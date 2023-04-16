import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import type { FC } from 'react'
import { useState } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { Instance, InstanceSpec } from 'types/instance'

import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

const RenderVmSpec = ({ spec }: { spec: InstanceSpec }) => {
  return (
    <>
      {spec.maxcpu} vCPU, RAM {spec.maxmem / 1073741824} GB <br /> Disk size : {spec.maxdisk / 1073741824} GB
    </>
  )
}

interface TemplateTableProps {
  templates?: Instance[]
  onTemplateSelect: (instance: Instance | null) => void
}

export const TemplateTable: FC<TemplateTableProps> = (props) => {
  const { templates = [], onTemplateSelect } = props
  const [selectedTemplate, setSelectedTemplate] = useState<Instance | null>(null)

  const handleButtonClick = (template: Instance) => {
    console.log('Clicked row data:', template)
  }

  return (
    <Table>
      <StyledTableHead>
        <TableRow>
          <TableTextCell type="header"> </TableTextCell>
          <TableTextCell type="header">Name</TableTextCell>
          <TableTextCell type="header">Spec</TableTextCell>
          <TableTextCell type="header">VMID</TableTextCell>
          <TableTextCell type="header">Action</TableTextCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {templates.map((template: Instance) => {
          console.log('template :', template)
          return (
            <StyledTableRow
              key={template.id}
              onClick={() => {
                onTemplateSelect(template)
                setSelectedTemplate(template)
                console.log('Selected instance:', template)
              }}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedTemplate?.vmid === template.vmid ? '#f3f3f3' : '',
              }}
            >
              <TableCell>
                <Center>
                  <CoreSvg src="/static/icons/cloud-server.svg" width={30} />
                </Center>
              </TableCell>
              <TableCell>{template.name}</TableCell>
              <TableTextCell>
                <RenderVmSpec spec={{ maxcpu: template.maxcpu, maxmem: template.maxmem, maxdisk: template.maxdisk }} />
              </TableTextCell>
              <TableTextCell>{template.vmid}</TableTextCell>
              <TableCell>
                <IconButton onClick={() => handleButtonClick(template)}>
                  <Center>
                    <CoreSvg src="/static/icons/console.svg" width={24} />
                  </Center>
                </IconButton>
              </TableCell>
            </StyledTableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

TemplateTable.propTypes = {
  templates: PropTypes.array,
}
