import React from 'react'
import { css } from '@emotion/react'

type Props = {
  label: string
  value: number
  onChange: (prefCode: number, prefName: string, isCheck: boolean) => void
}

export const CheckBox: React.FC<Props> = (props) => {
  const container = css`
    margin: 0.3em 1em;
  `
  const input = css`
    cursor: pointer;
    :checked + label {
      color: #0075ff;
    }
  `

  const label = css`
    margin-left: 0.5em;
  `

  return (
    <div css={container}>
      <input
        type="checkbox"
        value={props.value}
        id={`check_box_${props.value}`}
        onClick={(event) => {
          props.onChange(props.value, props.label, event.currentTarget?.checked)
        }}
        css={input}
      />
      <label htmlFor={`check_box${props.value}`} css={label}>
        {props.label}
      </label>
    </div>
  )
}
