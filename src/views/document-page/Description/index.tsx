import { Button, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'

import { ButtonWrapper, Root } from './styled'

export const Description = () => {
  const { t } = useTranslation(['home', 'translation'])

  return (
    <Root>
      <Typography variant="body1" color="text.darken">
        Q : What is CE Cloud ?
      </Typography>
      <Typography variant="body1" color="text.darken">
        A : is a virtual machine (VM) service used for a variety of purposes by the department of computer engineering,
        including research and education.
      </Typography>
      <Typography variant="body1" color="text.darken">
        Q : Who can use it ?
      </Typography>
      <Typography variant="body1" color="text.darken">
        A : Right now, the department retains the right to utilize it only for students, professors, and department
        officials. due to a scarcity of resources But, in the future, it may be available to students and academic
        members at the university.
      </Typography>
    </Root>
  )
}
