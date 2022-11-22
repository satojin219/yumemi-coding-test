import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loading } from '.'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Loading',
  component: Loading
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
)

export const Spin = Template.bind({})
Spin.args =
  { type: 'spin', color: 'red', width: 40, height: 40, text: 'ロード中' } 

export const Balls = Template.bind({})
Balls.args =
  { type: 'balls', color: 'blue', width: 40, height: 40, text: 'しばらくお待ちください' } 

export const Bars = Template.bind({})
Bars.args =
  { type: 'bars', color: 'yellow', width: 40, height: 40, text: '通信中' } 

export const Bubbles = Template.bind({})
Bubbles.args =
  { type: 'bubbles', color: 'green', width: 40, height: 40, text: 'Loading...' } 

export const Cubes = Template.bind({})
Cubes.args =
  { type: 'cubes', color: 'orange', width: 40, height: 40, text: 'ちょっと待ってね' } 

export const Cylon = Template.bind({})
Cylon.args =
  { type: 'cylon', color: 'purple', width: 40, height: 40, text: 'データ取得中' } 

export const Spokes = Template.bind({})
Spokes.args =
  { type: 'spokes', color: 'black', width: 40, height: 40, text: 'Now Loading' } 
  
export const SpinningBubbles = Template.bind({})
SpinningBubbles.args = {
  type: 'spinningBubbles',
  color: 'gray',
  width: 40,
  height: 40,
  text: 'Please wait'
} 
