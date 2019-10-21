import React from 'react'
import SbEditable from 'storyblok-react'
import './image.css'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

const Image = props => {
  const fluidProps = getFluidGatsbyImage(props.blok.image, {
    maxWidth: 1800,
  })

  return (
    <SbEditable content={props.blok}>
      <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
        <div className="relative overflow-hidden">
          <Img fixed={fluidProps} />
        </div>
        {props.blok.caption !== '' ? (
          <h4
            className={`mt-3 cen text-brand-gray-600 text-xs text-${
              props.blok.caption_align ? props.blok.caption_align : 'left'
            } lg:text-sm tracking-wide`}
          >
            {props.blok.caption}
          </h4>
        ) : (
          ''
        )}
      </div>
    </SbEditable>
  )
}

export default Image
