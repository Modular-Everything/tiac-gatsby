import React from 'react'
import SbEditable from 'storyblok-react'
import Swiper from 'react-id-swiper'
import './swiper-base.css'
import './slider.css'

const Slider = props => {
  if (props.blok.slides.length > 1) {
    var params = {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }
  }

  if (props.blok.caption === undefined) {
    var hasCaption = false
  } else {
    hasCaption = true
  }

  return (
    <SbEditable content={props.blok}>
      <Swiper {...params}>
        {props.blok.slides.map((slide, index) => (
          <div key={index}>
            <div className="aspect-ratio-3/2 relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            {hasCaption ? (
              <p className="slide-caption text-brand-gray-600 text-center text-xs tracking-wide m-0">
                {props.blok.caption}
              </p>
            ) : (
              ''
            )}
            {/* <p className="slide-caption text-brand-gray-600 text-center text-xs tracking-wide m-0">
              test
            </p> */}
          </div>
        ))}
      </Swiper>
    </SbEditable>
  )
}

export default Slider
