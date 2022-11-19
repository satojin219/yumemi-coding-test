export type Prefecture = {
  prefCode: number
  prefName: string
}
type PerYearPupulationData = {
  year: number
  value: number
}

type populationType = {
  label: string
  data: PerYearPupulationData[]
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
