import { useQuery } from 'react-query'
import { PrefecutresResponse } from '../types/globalType'

const getPrefectures = async (): Promise<PrefecutresResponse> => {
  const response: Response = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: { 'x-api-key': import.meta.env.VITE_RESAS_API_KEY }
    }
  )
  return await response.json()
}

export const useFetchPrefectures = (): any => {
  return useQuery<PrefecutresResponse, Error>(['prefectures'], getPrefectures)
}
