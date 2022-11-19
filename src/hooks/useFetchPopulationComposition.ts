import { useQuery } from 'react-query'
import {
  APIResponse,
  populationComposition
} from '../types/globalType'

const getPopulationComposition = async (
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

export const useFetchPopulationComposition = (prefCode: number): any => {
  return useQuery<APIResponse<populationComposition>, Error>(
    ['populationComposition'],
    async () => await getPopulationComposition(prefCode)
  )
}
