import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { type ReactNode } from 'react'

import { InternalLinkContainer } from './styled'

export type CoreLinkProps = {
  href?: string
  path?: string
  children: ReactNode
  download?: string
  className?: string
  linkStyle?: boolean
}

export const CoreLink = ({ href, path, children, download, className, linkStyle = false }: CoreLinkProps) => {
  // * Wrap children with `<Box>` because -> https://nextjs.org/docs/messages/link-multiple-children
  if (path) {
    return (
      <Link href={path} passHref style={{ display: 'contents' }}>
        <InternalLinkContainer isLinkStyle={linkStyle} className={className}>
          {children}
        </InternalLinkContainer>
      </Link>
    )
  }

  if (href) {
    return (
      <MuiLink
        className={className}
        href={href}
        target="_blank"
        rel="noopenner noreferrer"
        sx={{ display: 'contents' }}
        download={download}
      >
        {children}
      </MuiLink>
    )
  }

  return <>{children}</>
}
