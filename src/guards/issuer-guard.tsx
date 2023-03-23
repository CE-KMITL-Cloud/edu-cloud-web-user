import { type ReactNode } from 'react'

import { Error } from 'components/common/Error'

import { useAuth } from 'hooks/useAuth'

import { Issuer } from 'types/enums'

interface IssuerGuardProps {
  children?: ReactNode
  issuer: Issuer
}

export const IssuerGuard = ({ children, issuer: expectedIssuer }: IssuerGuardProps) => {
  const { issuer } = useAuth()

  if (expectedIssuer !== issuer) {
    return <Error statusCode={400} title={`Issuer mismatch, currently using ${issuer}`} />
  }

  return <>{children}</>
}
