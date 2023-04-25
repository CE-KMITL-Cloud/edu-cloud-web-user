import { BoxLayout } from 'layouts/BoxLayout'
import { MainLayout } from 'layouts/MainLayout'

import { Page } from 'types/page'

import { Sidebar } from 'views/console-page/Sidebar'

import { ConsoleWrapper, Root } from './styled'

const mockConsole = `$ sudo apt update
$ sudo apt install virtualbox
$ sudo apt install vagrant
$ vagrant init hashicorp/bionic64
$ vagrant up
$ vagrant ssh
$ sudo apt install net-tools
$ ifconfig
$ sudo nano /etc/network/interfaces
$ sudo service networking restart
`

export const ConsolePage: Page = () => {
  return (
    <Root>
      <ConsoleWrapper>
        <pre>{mockConsole}</pre>
      </ConsoleWrapper>
      <Sidebar />
    </Root>
  )
}

ConsolePage.getLayout = (page) => (
  <MainLayout>
    <BoxLayout iconSrc="/static/icons/server.png" textHeader="vm-console">
      {page}
    </BoxLayout>
  </MainLayout>
)
