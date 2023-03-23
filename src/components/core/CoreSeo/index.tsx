import Head from 'next/head'

interface SeoProps {
  title?: string
}

export const CoreSeo = ({ title }: SeoProps) => (
  <Head>
    <title>{title ? title + ' | CEPP' : 'CEPP'}</title>
  </Head>
)
