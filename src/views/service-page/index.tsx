import { NavbarLayout } from 'layouts/NavbarLayout'
import { PaperLayout } from 'layouts/PaperLayout'

import { Page } from 'types/page'

export const ServicePage: Page = () => {
  return <PaperLayout textHeader="service">service</PaperLayout>
}

ServicePage.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>
