import { css } from '@emotion/react'
import { HighChartGraph } from './components/HighChartGraph'
import { PrefectureList } from './components/PrefectureList'
import { useCheckedPopulation } from './hooks/useCheckedPopulation'
import { getPopulationComposition } from './hooks/useFetchPopulationComposition'

const container = css`
  margin: 0 10%;
`
const title = css`
  text-align: center;
`
const label = css`
  padding: 0.5em 1em;
  margin: 1em auto;
  border-left: 5px solid;
`
export const Home: React.FC = () => {
  const { categories, series, addPrefecture, removePrefecture } =
    useCheckedPopulation()

  const handleClickCheck = async (
    prefCode: number,
    prefName: string,
    isCheck: boolean
  ): Promise<void> => {
    if (isCheck)
      await getPopulationComposition(prefCode).then((response) => {
        addPrefecture(response.result.data[0].data, prefName)
      })
    else removePrefecture(prefName)
  }

  return (
    <div css={container}>
      <h1 css={title}>ゆめみ フロントエンドコーディング試験</h1>
      <h2 css={label}>都道府県一覧</h2>
      <PrefectureList onChange={handleClickCheck} />
      <h2 css={label}>人口推移グラフ</h2>
      <HighChartGraph categories={categories} series={series} />
    </div>
  )
}
