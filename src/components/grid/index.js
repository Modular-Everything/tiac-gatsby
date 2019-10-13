import React from 'react'
import Components from '../components.js'
import SbEditable from 'storyblok-react'
import './grid.css'

const Grid = props => {
  return (
    <SbEditable content={props.blok}>
      <div
        className={`grid mb-12 container ${
          props.blok.grid_type === undefined ? '' : props.blok.grid_type
        }`}
      >
        {props.blok.columns.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
          })
        )}
      </div>
    </SbEditable>
  )
}

export default Grid
