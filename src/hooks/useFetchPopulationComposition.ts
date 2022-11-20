import { useQuery, UseQueryResult } from 'react-query'
import { APIResponse, populationComposition } from '../types/globalType'

export const getPopulationComposition = async (
  prefCode: number
): Promise<APIResponse<populationComposition>> => {
  const response: Response = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${String(
      prefCode
    )}`,
    {
      headers: { 'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY }
    }
  )
  return await response.json()
}

export const useFetchPopulationComposition = (
  prefCode: number
): UseQueryResult<APIResponse<populationComposition>, Error> => {
  return useQuery<APIResponse<populationComposition>, Error>(
    ['populationComposition'],
    async () => await getPopulationComposition(prefCode)
  )
}
