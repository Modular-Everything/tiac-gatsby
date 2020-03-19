/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Cursor = props => {
  const { children } = props
  return (
    <div
      className="cursor absolute z-50 pointer-events-none rounded-full shadow-md flex justify-center items-center font-serif text-md leading-6 text-white opacity-0"
      id="cursor"
      css={css`
        width: 74px;
        height: 74px;
        background-color: #ff8172;
        transition: opacity 150ms ease;
      `}
    >
      {children}
    </div>
  )
}

export default Cursor
