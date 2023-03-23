import { PaperLayout } from 'layouts/PaperLayout'
import { Screen } from 'layouts/Screen'

import { Page } from 'types/page'

export const ServicePage: Page = () => {
  return <PaperLayout textHeader="service">service</PaperLayout>
}

ServicePage.getLayout = (page) => <Screen>{page}</Screen>
