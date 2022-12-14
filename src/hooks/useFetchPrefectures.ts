import { APIResponse, Prefecture } from './../types/globalType'
import { useQuery, UseQueryResult } from 'react-query'

const getPrefectures = async (): Promise<APIResponse<Prefecture[]>> => {
  const response: Response = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: { 'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY }
    }
  )
  return await response.json()
}

export const useFetchPrefectures = (): UseQueryResult<
  APIResponse<Prefecture[]>,
  Error
> => {
  return useQuery<APIResponse<Prefecture[]>, Error>(
    ['prefectures'],
    getPrefectures
  )
}
