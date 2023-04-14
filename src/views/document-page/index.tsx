import { NavbarLayout } from 'layouts/NavbarLayout'
import { PaperLayout } from 'layouts/PaperLayout'

import { Page } from 'types/page'

export const DocumentPage: Page = () => {
  return <PaperLayout textHeader="document and Q&A">Document</PaperLayout>
}

DocumentPage.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>
