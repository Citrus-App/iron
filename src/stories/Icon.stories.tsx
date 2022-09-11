import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon, Text } from '../atoms'
import * as allIcons from '../atoms/Icon/src/Icons'
import type { iconName } from '../atoms/Icon/defs'

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <div style={{ width: '100%', maxWidth: '80px' }}>
    <Icon {...args} />{' '}
  </div>
)

const AllIcons = () => (
  <div
    style={{
      display: 'flex',
      gap: '2rem',
      padding: '3rem',
      objectFit: 'contain',
      flexWrap: 'wrap',
    }}
  >
    {Object.keys(allIcons).map((iconName) => (
      <div
        key={iconName}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '150px',
          lineBreak: 'anywhere',
          marginLeft: '0.5rem',
        }}
      >
        <div
          style={{
            height: '80px',
            width: '80px',
          }}
        >
          <Icon variant={iconName as iconName} />
        </div>

        <Text variant="small">{iconName}</Text>
      </div>
    ))}
  </div>
)

export const Component = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  variant: 'masonryLayout',
}
export const All = AllIcons.bind({})
