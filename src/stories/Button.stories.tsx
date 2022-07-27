import React from 'react'
import {
  ComponentStory,
  //ComponentMeta
} from '@storybook/react'

import { Button } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}></Button>
)

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

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
