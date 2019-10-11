import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'

const Teaser = props => (
  <SbEditable content={props.blok}>
    <div className="w-full bg-gray-200 p-6">
      <h1 className="text-gray-800 font-bold text-3xl mb-2">
        {props.blok.headline}
      </h1>
      <p className="mb-8 text-gray-700 text-sm max-w-lg">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent. This is a modified jumbotron that occupies the entire
        horizontal space of its parent.This is a modified jumbotron that
        occupies the entire horizontal space of its parent.
      </p>
      <div>
        <Link
          className="py-3 px-5 rounded-sm uppercase text-sm text-white font-bold leading-relaxed bg-teal-500 shadow-md inline-block"
          to={'/blog/'}
        >
          View More
        </Link>
      </div>
    </div>
  </SbEditable>
)

export default Teaser
