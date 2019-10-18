import React from 'react'
import SbEditable from 'storyblok-react'
// import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = props => {
  return (
    <SbEditable content={props.blok}>
      <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
        <div className="relative overflow-hidden">
          <img
            src={props.blok.image}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
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
