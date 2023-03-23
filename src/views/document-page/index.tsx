import { PaperLayout } from 'layouts/PaperLayout'
import { Screen } from 'layouts/Screen'

import { Page } from 'types/page'

export const DocumentPage: Page = () => {
  return <PaperLayout textHeader="document and Q&A">Document</PaperLayout>
}

DocumentPage.getLayout = (page) => <Screen>{page}</Screen>
