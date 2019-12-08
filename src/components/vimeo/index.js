import React from 'react'
import SbEditable from 'storyblok-react'
import Vimeo from '@u-wave/react-vimeo'

const VimeoEmbed = props => {
  return (
    <SbEditable content={props.blok}>
      <div className="container mb-12">
        <Vimeo video={props.blok.source} responsive="true" muted autoplay />
      </div>
    </SbEditable>
  )
}

export default VimeoEmbed
