import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Navbar as NavbarComponent } from '.'

export default {
  title: 'Navbar',
  component: NavbarComponent,
} as ComponentMeta<typeof NavbarComponent>

const Template: ComponentStory<typeof NavbarComponent> = () => <NavbarComponent />

export const Navbar = Template.bind({})
