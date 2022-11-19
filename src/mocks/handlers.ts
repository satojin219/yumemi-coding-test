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

]
