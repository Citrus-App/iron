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

export const Icon = Template.bind({})
Icon.args = {
  variant: 'solid',
  children: 'Button',
  icon: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.5C1 3.01472 3.01472 1 5.5 1H11.244L12.8977 2.64184L15 4.72893V10.3917C15 12.877 12.9853 14.8917 10.5 14.8917H5.5C3.01472 14.8917 1 12.877 1 10.3917V5.5Z"
        stroke="white"
      />
      <path
        d="M7.21645 9.54335L6.87083 9.90466L7.21645 10.2353L7.56207 9.90466L7.21645 9.54335ZM9.13291 7.71009L8.78729 7.34878L9.13291 7.71009ZM4.95436 8.0714L6.87083 9.90466L7.56207 9.18204L5.64561 7.34878L4.95436 8.0714ZM7.56207 9.90466L9.47853 8.0714L8.78729 7.34878L6.87083 9.18204L7.56207 9.90466ZM9.47853 8.0714L11.1002 6.52018L10.4089 5.79756L8.78729 7.34878L9.47853 8.0714Z"
        fill="white"
      />
    </svg>
  ),
}
