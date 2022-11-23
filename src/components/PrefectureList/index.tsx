import { css } from '@emotion/react'
import { Prefecture } from '../../types/globalType'
import { CheckBox } from '../CheckBox'

type Props = {
  prefectureList?: Prefecture[]
  onChange: (prefCode: number, prefName: string, isCheck: boolean) => {}
}

const prefectureList = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  place-items: left;
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`

export const PrefectureList: React.FC<Props> = (props) => {

  return (
    <div css={prefectureList}>
      {props.prefectureList?.map((prefectureItem: Prefecture) => {
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
