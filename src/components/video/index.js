import React from 'react'

const Video = props => {
  return (
    <div className={`rows-${props.blok.rows} cols-${props.blok.columns}`}>
      <video height="100%" width="100%" autoPlay loop muted>
        <source src={props.blok.source} type="video/mp4"></source>
      </video>
      {props.blok.caption !== '' ? (
        <h4 className="mt-3 text-brand-gray-600 text-xs tracking-wide lg:text-sm">
          {props.blok.caption}
        </h4>
      ) : (
        ''
      )}
    </div>
  )
}

export default Video
