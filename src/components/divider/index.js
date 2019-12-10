import React from 'react'
import SbEditable from 'storyblok-react'

const Divider = props => (
  <SbEditable content={props.blok}>
    <div className="container mb-16 md:mb-24">
      <hr className="border-brand-gray-300" />
    </div>
  </SbEditable>
)

export default Divider
