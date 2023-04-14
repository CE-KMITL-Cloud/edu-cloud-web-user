import { Typography as MuiTypography, type TypographyProps as MuiTypographyProps } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Typography',
  component: MuiTypography,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'caption'],
      defaultValue: 'body1',
      control: {
        type: 'radio',
      },
    },
    fontWeight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      defaultValue: 400,
      control: {
        type: 'radio',
      },
    },
    textTransform: {
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
      defaultValue: 'none',
      control: {
        type: 'radio',
      },
    },
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof MuiTypography>

type TemplateProps = Pick<MuiTypographyProps, 'variant' | 'fontWeight' | 'textTransform'>

const Template: ComponentStory<typeof MuiTypography> = (args: TemplateProps) => <MuiTypography {...args} />

export const Typography = Template.bind({})
Typography.args = { children: 'This is typography' }
