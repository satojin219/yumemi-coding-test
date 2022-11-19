import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: null,
          result: [
            {
              prefCode: 1,
              prefName: '北海道'
            },
            {
              prefCode: 2,
              prefName: '青森県'
            },
            {
              prefCode: 3,
              prefName: '岩手県'
            },
            {
              prefCode: 4,
              prefName: '宮城県'
            }
          ]
        })
      )
    }
  ),
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear=11',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: null,
          result: {
            boundaryYear: 2015,
            data: [
              {
                label: '総人口',
                data: [
                  {
                    year: 1980,
                    value: 12817
                  },
                  {
                    year: 1985,
                    value: 12707
                  }
                ]
              },
              {
                label: '年少人口',
                data: [
                  {
                    year: 1980,
                    value: 2906,
                    rate: 22.6
                  }
                ]
              },
              {
                label: '生産年齢人口',
                data: [
                  {
                    year: 1980,
                    value: 8360,
                    rate: 65.2
                  }
                ]
              },
              {
                label: '老年人口',
                data: [
                  {
                    year: 1980,
                    value: 1550,
                    rate: 12
                  }
                ]
              }
            ]
          }
        })
      )
    }
  )
]
