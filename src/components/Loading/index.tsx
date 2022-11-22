import { css } from '@emotion/react'
import ReactLoading from 'react-loading'

type LoadingType =
  | 'blank'
  | 'balls'
  | 'bars'
  | 'bubbles'
  | 'cubes'
  | 'cylon'
  | 'spin'
  | 'spinningBubbles'
  | 'spokes'

type Props = {
  type: LoadingType
  color: string
  height: number
  width: number
  text: string
}

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

export const Loading: React.FC<Props> = (props) => {
  return (
    <div css={container}>
      <ReactLoading
        type={props.type}
        color={props.color}
        height={`${props.height}px`}
        width={`${props.width}px`}
      />
      <p>{props.text}</p>
    </div>
  )
}
