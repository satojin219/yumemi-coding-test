import { CheckBox } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'CheckBox',
  component: CheckBox
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

export const Niigata = Template.bind({})
Niigata.args = { label: '新潟県', value: 15, onChange: action('clicked') }
