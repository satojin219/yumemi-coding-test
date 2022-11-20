import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  categories:  string[]
  series: Highcharts.SeriesOptionsType[]
}

export const HighChartGraph: React.FC<Props> = (props) => {
  const options: Highcharts.Options = {
    title: {
      text: '総人口推移'
    },
    xAxis: {
      title: {
        text: '年度'
      },
      categories: props.categories,
      crosshair: true,
      gridLineWidth: 1
    },
    yAxis: {
      title: {
        text: '人口数'
      },
      gridLineWidth: 1,
      labels: {
        formatter() {
          return `${(this.value as number) / 1}`
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      itemHoverStyle: {
        fontWeight: 'bold'
      }
    },
    tooltip: {
      valueSuffix: '人',
      shared: true
    },
    series: props.series
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
