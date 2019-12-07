import React from 'react'
import SbEditable from 'storyblok-react'

const Video = props => {
  return (
    <SbEditable content={props.blok}>
      <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
        <div className="relative">
          <video height="100%" width="100%" autoPlay loop muted playsInline>
            <source src={props.blok.video} type="video/mp4"></source>
          </video>

          {/* {props.blok.hover_caption !== '' ? ( 
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-brand-black text-white text-xs opacity-75">
          <p>{props.blok.hover_caption}</p>
          </div>
          ) : (
            ''
          )} */}
        </div>

        {props.blok.caption !== '' ? (
          <h4
            className={`mt-3 cen text-brand-gray-600 text-xxs text-${
              props.blok.caption_align ? props.blok.caption_align : 'left'
            } lg:text-sm tracking-wide`}
          >
            {props.blok.caption}
          </h4>
        ) : (
          ''
        )}
      </div>
    </SbEditable>
  )
}

export default Video
