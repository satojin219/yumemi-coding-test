import React from 'react'
import { css } from '@emotion/react'

type Props = {
  label: string
  value: number
  onChange: (_: number) => void
}

export const CheckBox: React.FC<Props> = (props) => {
  // const container = css`
  //   margin: 1 2;
  //   color: red;
  // `
  const container = css({
    color: 'red',
    margin: '0 auto',
    padding: '10px'
  })
  const checkbox = css`
    color: red;
  `

  return (
    <div css={container}>
      <input
        type="checkbox"
        value={props.value}
        id={`check_box_${props.value}`}
        onClick={() => props.onChange(props.value)}
      />
      <label htmlFor="" css={checkbox}>
        {props.label}
      </label>
    </div>
  )
}
