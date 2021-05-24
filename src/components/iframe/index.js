import React from 'react'
import SbEditable from 'storyblok-react'
import { AnimateIn } from '../reveal';

const iFrame = props => {
  const { blok } = props

  console.log(blok);

  return (
    <SbEditable content={props.blok}>
      <AnimateIn>
      <div
        className={`mb-16 md:mb-24 container`}
        dangerouslySetInnerHTML={{ __html: blok.src }}
      />
      </AnimateIn>
    </SbEditable>
  )
}

export default iFrame
