import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Button',
  component: MuiButton,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained',
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
      control: {
        type: 'radio',
      },
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
      control: {
        type: 'radio',
      },
    },
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof MuiButton>

type TemplateProps = Pick<MuiButtonProps, 'disabled' | 'color' | 'variant' | 'size'>

const Template: ComponentStory<typeof MuiButton> = (args: TemplateProps) => <MuiButton {...args} />

export const Button = Template.bind({})
Button.args = { children: 'button' }
