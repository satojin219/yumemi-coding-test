import { HighChartGraph } from './components/HighChartGraph'
import { PrefectureList } from './components/PrefectureList'
import { useCheckedPopulation } from './hooks/useCheckedPopulation'
import { getPopulationComposition } from './hooks/useFetchPopulationComposition'

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
    <>
      <h1>ゆめみ フロントエンドコーディング試験</h1>
      <PrefectureList onChange={handleClickCheck} />
      <HighChartGraph categories={categories} series={series} />
    </>
  )
}
