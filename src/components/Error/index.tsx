import { css } from '@emotion/react'

type Props = {
  error: Error
}
const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
export const Error: React.FC<Props> = (props) => {
  return (
    <div css={container}>
      <h1>{props.error.name}</h1>
      <p>Error: {props.error.message}</p>
    </div>
  )
}
