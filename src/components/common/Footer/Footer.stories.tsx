import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Footer as FooterComponent } from '.'

export default {
  title: 'Footer',
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>

const Template: ComponentStory<typeof FooterComponent> = () => <FooterComponent />

export const Footer = Template.bind({})
