import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  categories: string[]
  series: Highcharts.SeriesOptionsType[]
}

export const HighChartGraph: React.FC<Props> = (props) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
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
        text: '人口(万)'
      },
      gridLineWidth: 1,
      labels: {
        x: -10,
        y: 5,
        formatter() {
          return `${(this.value as number) / 10000}`
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      itemHoverStyle: {
        fontWeight: 'bold'
      },
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#c7c7c7',
      padding: 15
    },
    tooltip: {
      valueSuffix: '人',
      borderWidth: 2,
      borderRadius: 10,
      useHTML: true,
      formatter() {
        const value = this.y?.toLocaleString()
        return `
      <table><tr><th colspan="2">${this.x as string}年</th></tr>
      <tr><td style="color: ${this.series.color as string}">${
          this.series.name
        }:</td><td style="text-align: right"><b>${
          value as string
        }人</b></td></tr></table>`
      }
    },
    series:
      props.series.length === 0
        ? [{ type: 'line', name: '47都道府県', data: [] }]
        : props.series,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'vertical'
            }
          }
        }
      ]
    }
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
