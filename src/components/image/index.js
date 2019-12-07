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

    const imageService = '//img2.storyblok.com/'
    const path = props.blok.image.replace('//a.storyblok.com', '')
    const height = props.blok.rows === 'two' ? '1530' : '746'
    const width = props.blok.columns === 'two' ? '2496' : '1232'
    const resizedImage = imageService + width + 'x' + height + path

    return (
      <SbEditable content={props.blok}>
        <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* <Img fixed={fluidProps} /> */}
              <img
                src={resizedImage}
                alt=""
                width={width / 2}
                height={height / 2}
              />
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
              className={`my-3 text-brand-gray-600 text-xxs text-${
                props.blok.caption_align ? props.blok.caption_align : 'left'
              } lg:text-xs lg:leading-relaxed tracking-normal`}
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
