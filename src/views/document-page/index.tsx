import { NavbarLayout } from 'layouts/NavbarLayout'
import { PaperLayout } from 'layouts/PaperLayout'

import { Page } from 'types/page'

import { Description } from './Description'

export const DocumentPage: Page = () => {
  return (
    <PaperLayout textHeader="document and Q&A">
      <Description />
    </PaperLayout>
  )
}

DocumentPage.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>
