import React from 'react'
import SbEditable from 'storyblok-react'
import Vimeo from '@u-wave/react-vimeo'
import { AnimateIn } from '../reveal';

const VimeoEmbed = props => {
  return (
    <SbEditable content={props.blok}>
      <AnimateIn>
        <div className="container mb-16 md:mb-24">
          <Vimeo video={props.blok.source} responsive="true" muted autoplay />
        </div>
      </AnimateIn>
    </SbEditable>
  )
}

export default VimeoEmbed
