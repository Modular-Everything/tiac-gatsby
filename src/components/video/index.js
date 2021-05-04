import React from 'react'
import SbEditable from 'storyblok-react'
import { AnimateIn } from '../reveal';

const Video = props => {
  return (
    <SbEditable content={props.blok}>
        <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
          <AnimateIn>
            <div className="relative">
              <video height="100%" width="100%" autoPlay loop muted playsInline>
                <source src={props.blok.video} type="video/mp4"></source>
              </video>
            </div>

            {props.blok.caption !== '' ? (
              <h4
                className={`my-3 text-brand-gray-600 text-xxs text-${
                  props.blok.caption_align ? props.blok.caption_align : 'left'
                } lg:text-xs lg:leading-relaxed tracking-normal`}
              >
                {props.blok.caption}
              </h4>
            ) : (
              ''
            )}
          </AnimateIn>
        </div>
    </SbEditable>
  )
}

export default Video
