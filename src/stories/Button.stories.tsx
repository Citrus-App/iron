import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Outline = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  variant: 'outline',
  children: 'Button',
}

export const Solid = Template.bind({})
Solid.args = {
  variant: 'solid',
  children: 'Button',
}
