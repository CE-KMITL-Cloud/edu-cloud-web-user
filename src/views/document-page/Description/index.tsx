import ArticleIcon from '@mui/icons-material/Article'
import { IconButton, Typography } from '@mui/material'

import { Root, StyledDivider } from './styled'

export const Description = () => {
  return (
    <Root>
      <Typography variant="body1" color="text.darken">
        Q : What is CE Cloud ?<br></br>A : is a virtual machine (VM) service used for a variety of purposes by the
        department of computer engineering, including research and education.
      </Typography>
      <Typography variant="body1" color="text.darken">
        Q : Who can use it ?<br></br>A : Right now, the department retains the right to utilize it only for students,
        professors, and department officials. due to a scarcity of resources But, in the future, it may be available to
        students and academic members at the university.
      </Typography>
      <StyledDivider />
      <Typography
        variant="body1"
        color="text.darken"
        border={'1px solid #D3D3D3'}
        borderRadius={1}
        paddingY={1}
        paddingX={2}
      >
        <IconButton
          sx={{ paddingRight: 3 }}
          href="https://docs.google.com/document/d/1-FHow7N6rTv8oW3uS1nNCYZFln1T0C17/edit?usp=share_link&ouid=108259348216884121496&rtpof=true&sd=true"
        >
          <ArticleIcon />
        </IconButton>
        User Manual
      </Typography>
      <Typography
        variant="body1"
        color="text.darken"
        border={'1px solid #D3D3D3'}
        borderRadius={1}
        paddingY={1}
        paddingX={2}
      >
        <IconButton
          sx={{ paddingRight: 3 }}
          href="https://docs.google.com/document/d/1-Kt2zd-0vTMwO-BpQHkrEa-Xo2CT38oV/edit?usp=share_link&ouid=108259348216884121496&rtpof=true&sd=true"
        >
          <ArticleIcon />
        </IconButton>
        Administrator Manual
      </Typography>
    </Root>
  )
}
