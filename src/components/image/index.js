import React from 'react'
import SbEditable from 'storyblok-react'
import './image.css'
// import Img from 'gatsby-image'
// import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

const Image = props => {
  if (props.blok.image) {
    // const fluidProps = getFluidGatsbyImage(props.blok.image.toLowerCase(), {
    //   maxWidth: 1000,
    // })

    return (
      <SbEditable content={props.blok}>
        <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* <Img fixed={fluidProps} /> */}
              <div className="gatsby-image-wrapper">
                <img src={props.blok.image.toLowerCase()} alt="" />
              </div>
            </div>

            {/* {props.blok.hover_caption !== undefined ? (
              <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-brand-black opacity-75 text-white text-xs">
                <p>{props.blok.hover_caption}</p>
              </div>
            ) : (
              ''
            )} */}
          </div>

          {props.blok.caption !== '' ? (
            <h4
              className={`mt-3 cen text-brand-gray-600 text-xxs text-${
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
  } else {
    return (
      <p className="container border border-dashed border-red-600 bg-red-100 my-6 py-6">
        Add an image asset
      </p>
    )
  }
}

export default Image
