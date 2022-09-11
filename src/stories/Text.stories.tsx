import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from '../atoms'

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: Text.documentation,
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Example = Template.bind({})

Example.args = {
  variant: 'small',
  children: 'Officia officia ea commodo anim ad aliquip incididunt ut enim.',
}
