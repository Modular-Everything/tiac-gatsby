import React from 'react'
import Components from '../components.js'
import SbEditable from 'storyblok-react'
import Fade from 'react-reveal/Fade'
import './grid.css'

const Grid = props => {
  return (
    <SbEditable content={props.blok}>
      <Fade up>
        <div
          className={`grid mb-16 md:mb-24 container ${
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
      </Fade>
    </SbEditable>
  )
}

export default Grid
