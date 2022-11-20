export type Prefecture = {
  prefCode: number
  prefName: string
}
export type PerYearPopulationData = {
  year: number
  value: number
}

type populationType = {
  label: string
  data: PerYearPopulationData[]
}

export type populationComposition = {
  boudaryYear: number
  data: populationType[]
}

export type PrefecutresResponse = {
  message: null
  result: Prefecture[]
}
export type APIResponse<T> = {
  message: null
  result: T
}

export type CheckedPopulation = {
  categories?: string[]
  series?: Highcharts.SeriesOptionsType[]
}
