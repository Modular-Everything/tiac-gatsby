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

  return (
    <SbEditable content={props.blok}>
      <div className={props.blok.container ? 'container' : ''}>
        <Swiper {...params}>
          {props.blok.slides.map((slide, index) => {
            if (slide.caption === undefined) {
              var hasCaption = false
            } else {
              hasCaption = true
            }

            return (
              <div key={index}>
                <div className="aspect-ratio-3/2 relative overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
                {hasCaption ? (
                  <p className="slide-caption text-brand-gray-600 text-center text-xs tracking-wide mt-8 mb-0">
                    {slide.caption}
                  </p>
                ) : (
                  ''
                )}
              </div>
            )
          })}
        </Swiper>
      </div>
    </SbEditable>
  )
}

export default Slider
