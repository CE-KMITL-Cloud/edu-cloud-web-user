import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Error as ErrorComponent, ErrorProps } from '.'

export default {
  title: 'Error',
  component: ErrorComponent,
  argTypes: {
    title: {
      control: 'text',
    },
    statusCode: {
      control: {
        type: 'number',
        min: 100,
        max: 511,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof ErrorComponent>

type TemplateProps = ErrorProps

const Template: ComponentStory<typeof ErrorComponent> = (args: TemplateProps) => <ErrorComponent {...args} />

export const Typography = Template.bind({})
Typography.args = { title: 'This is typography' }
