import React from 'react'
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
    <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
      <div className="aspect-ratio-3/2 relative overflow-hidden">
        <img
          src={props.blok.image}
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      {props.blok.caption !== '' ? (
        <h4 className="mt-3 text-brand-gray-600 text-xs tracking-wide lg:text-sm">
          {props.blok.caption}
        </h4>
      ) : (
        ''
      )}
    </div>
  )
}

export default Image
