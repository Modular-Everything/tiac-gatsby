import React from 'react'
import Components from '../components.js'
import SbEditable from 'storyblok-react'
import './grid.css'

const Grid = props => {
  return (
    <SbEditable content={props.blok}>
      <div
        className={`grid mb-16 md:mb-24 container ${
          props.blok.grid_type === undefined ? '' : props.blok.grid_type
        }`}
        data-sal="slide-up"
        data-sal-delay="175"
        data-sal-easing="ease"
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
