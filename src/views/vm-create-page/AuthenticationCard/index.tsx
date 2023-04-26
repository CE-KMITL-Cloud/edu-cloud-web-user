import { Typography } from '@mui/material'
import { useState } from 'react'

import { ToggleSwitch } from 'components/common/ToggleSwitch'

import { Column, StyledTemplateCard } from './styled'

type Password = 'password'
type Keypair = 'keypair'
type AuthType = Password | Keypair

export const AuthenticationCard = () => {
  const [authType, setAuthType] = useState<AuthType>('password')

  return (
    <StyledTemplateCard HeaderText="Authentication">
      <Column>
        <ToggleSwitch<Password, Keypair>
          width={360}
          state={authType}
          firstItemProperty={{
            id: 'password',
            label: 'Password',
            iconSrc: '/static/icons/lock.svg',
            onClick: () => setAuthType('password'),
          }}
          secondItemProperty={{
            id: 'keypair',
            label: 'Keypair',
            iconSrc: '/static/icons/key.svg',
            onClick: () => setAuthType('keypair'),
          }}
        />
        <Typography variant="body2" color="text.primary" textAlign="center">
          รหัสผ่านสำหรับเข้าใช้งาน SSH จะถูกส่งไปยัง Email ของท่าน หากท่านไม่ได้รับ รบกวนตรวจสอบดูที่จดหมายขยะของ Email
          หรือ สามารถดูได้ที่ Notification
        </Typography>
      </Column>
    </StyledTemplateCard>
  )
}
