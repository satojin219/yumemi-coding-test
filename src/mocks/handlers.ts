import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    (req, res, ctx) => {
      return res(ctx.status(200))
    }
  )
]
