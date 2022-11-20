import { css } from '@emotion/react'
import { useFetchPrefectures } from '../../hooks/useFetchPrefectures'
import { Prefecture } from '../../types/globalType'
import { CheckBox } from '../CheckBox'

type Props = {
  onChange: (prefCode: number, prefName: string, isCheck: boolean) => {}
}

const prefectureList = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  text-align: left;
`

export const PrefectureList: React.FC<Props> = (props) => {
  const { data, isLoading } = useFetchPrefectures()

  if (isLoading) return <div>...isLoadingx</div>
  return (
    <div css={prefectureList}>
      {data?.result.map((prefectureItem: Prefecture) => {
        return (
          <CheckBox
            key={prefectureItem.prefCode}
            value={prefectureItem.prefCode}
            label={prefectureItem.prefName}
            onChange={props.onChange}
          />
        )
      })}
    </div>
  )
}
