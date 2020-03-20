import React from 'react'
import SbEditable from 'storyblok-react'
import Fade from 'react-reveal/Fade'
import Vimeo from '@u-wave/react-vimeo'

const VimeoEmbed = props => {
  return (
    <SbEditable content={props.blok}>
      <Fade up>
        <div className="container mb-16 md:mb-24">
          <Vimeo video={props.blok.source} responsive="true" muted autoplay />
        </div>
      </Fade>
    </SbEditable>
  )
}

export default VimeoEmbed
