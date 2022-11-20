import { useState } from 'react'
import { PerYearPopulationData } from '../types/globalType'

const minYear = 1980
const currentYear = new Date().getFullYear()
const maxYear = currentYear - (currentYear % 5)

export const useCheckedPopulation = (): any => {
  const [categories, setCategories] = useState<string[]>([])
  const [series, setSeries] = useState<Highcharts.SeriesOptionsType[]>([])

  const addPrefecture = (
    populationDatas: PerYearPopulationData[],
    prefName: string
  ): void => {
    let copyCategories: string[] = []
    const copySeries = [...series]
    let perYearPopulationdatas: number[] = []
    populationDatas.forEach((populationData) => {
      if (minYear <= populationData.year && populationData.year <= maxYear) {
        copyCategories.push(String(populationData.year))
        perYearPopulationdatas.push(populationData.value)
      }
    })
    copySeries.push({
      type: 'line',
      name: prefName,
      data: perYearPopulationdatas
    })
    setCategories(copyCategories)
    setSeries(copySeries)
  }

  const removePrefecture = (prefName: string): void => {
    setSeries([...series].filter((copySeries) => copySeries.name !== prefName))
  }

  return { categories, series, addPrefecture, removePrefecture }
}
