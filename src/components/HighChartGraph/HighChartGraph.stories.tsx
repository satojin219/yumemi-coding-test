import { HighChartGraph } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'HighChartGraph',
  component: HighChartGraph
} as ComponentMeta<typeof HighChartGraph>

const Template: ComponentStory<typeof HighChartGraph> = (args) => (
  <HighChartGraph {...args} />
)

export const Graph = Template.bind({})
Graph.args = {
  categories: [
    '1980',
    '1985',
    '1990',
    '1995',
    '2000',
    '2005',
    '2010',
    '2015',
    '2020'
  ],
  series: [
    {
      type: 'line',
      name: '新潟県',
      data: [10045, 14252, 13433, 19256, 12463, 13232, 11352, 15622, 14490]
    },
    {
      type: 'line',
      name: '富山県',
      data: [13234, 14252, 15433, 13245, 17463, 15232, 15352, 15622, 17453]
    }
  ]
}
