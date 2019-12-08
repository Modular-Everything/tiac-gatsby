import React from 'react'
import SbEditable from 'storyblok-react'
import YouTube from '@u-wave/react-youtube'
import './youtube.css'

const YouTubeEmbed = props => {
  return (
    <SbEditable content={props.blok}>
      <div className="container mb-12">
        <div className="youtubePlayer">
          <YouTube video={props.blok.source} muted />
        </div>
      </div>
    </SbEditable>
  )
}

export default YouTubeEmbed
