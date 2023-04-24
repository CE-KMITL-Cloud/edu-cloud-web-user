import { Button, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'

import { home, translation } from 'i18n/tokens'

import { CoreLink } from 'components/core/CoreLink'

import { paths } from 'routes/paths'

import { ButtonWrapper, Root } from './styled'

export const Description = () => {
  const { t } = useTranslation(['home', 'translation'])

  return (
    <Root>
      <Typography variant="h2" color="text.darken">
        <Trans ns="home">
          title <b>Cloud</b>
        </Trans>
      </Typography>
      <Typography variant="body2" color="text.darken">
        {t(home.description)}
      </Typography>
      <ButtonWrapper>
        <CoreLink path={paths.about}>
          <Button variant="contained" color="primary" size="medium">
            {t(translation.more)}
          </Button>
        </CoreLink>
      </ButtonWrapper>
    </Root>
  )
}
