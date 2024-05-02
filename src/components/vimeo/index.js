import React from 'react'
import SbEditable from 'storyblok-react'
import ReactPlayer from 'react-player'
import { AnimateIn } from '../reveal'
import { isBrowser } from '../../utils/auth'

const VimeoEmbed = props => {
  const url = `https://vimeo.com/${props.blok.source}`
  return (
    <SbEditable content={props.blok}>
      <AnimateIn>
        <div className="container mb-16 md:mb-24">
          <div className="aspect-ratio-16/9 relative rounded-xl overflow-hidden">
            <ReactPlayer
              url={url}
              playing
              muted
              controls
              width="100%"
              height="auto"
              className="absolute top-0 left-0 w-full h-full"
              config={{
                vimeo: {
                  playerOptions: {
                    responsive: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </AnimateIn>
    </SbEditable>
  )
}

export default VimeoEmbed
