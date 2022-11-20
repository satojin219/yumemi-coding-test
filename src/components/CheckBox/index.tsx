import React from 'react'
import { css } from '@emotion/react'

type Props = {
  label: string
  value: number
  onChange: (_: number) => void
}

export const CheckBox: React.FC<Props> = (props) => {
  const container = css`
    margin: 0.3em 1em;
  `

  return (
    <div css={container}>
      <input
        type="checkbox"
        value={props.value}
        id={`check_box_${props.value}`}
        onClick={() => props.onChange(props.value)}
      />
      <label htmlFor="">{props.label}</label>
    </div>
  )
}
