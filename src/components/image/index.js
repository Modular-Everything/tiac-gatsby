import React from 'react'
import SbEditable from 'storyblok-react'
import { Link } from 'gatsby'
import './image.css'
import { AnimateIn } from '../reveal'

const Image = props => {
  if (props.blok.image) {
    const imageService = '//img2.storyblok.com/'
    const path = props.blok.image.replace('//a.storyblok.com', '')
    const height = props.blok.rows === 'two' ? '1530' : '746'
    const width = props.blok.columns === 'two' ? '2496' : '1232'
    const resizedImage = imageService + width + 'x' + height + path

    const imageLink =
      props.blok.image_link && props.blok.image_link.cached_url !== '' ? (
        <Link to={`/` + props.blok.image_link.cached_url}>
          <img
            src={resizedImage}
            alt=""
            width={width / 2}
            height={height / 2}
          />
        </Link>
      ) : (
        <img src={resizedImage} alt="" width={width / 2} height={height / 2} />
      )

    return (
      <SbEditable content={props.blok}>
        <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
          <AnimateIn>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                {imageLink}
              </div>
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
          </AnimateIn>
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
