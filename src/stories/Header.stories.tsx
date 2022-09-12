import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '../atoms'

export default {
  title: 'Typography/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: Header.documentation,
      },
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Example = Template.bind({})

Example.args = {
  as: 'h4',
  children: 'RESPECT THE ART',
}
