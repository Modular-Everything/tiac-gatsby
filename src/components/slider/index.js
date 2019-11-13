import React from 'react'
import SbEditable from 'storyblok-react'
import Swiper from 'react-id-swiper'
import '../image/image.css'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import './swiper-base.css'
import './slider.css'

const Slider = props => {
  if (props.blok.slides.length === 1) {
    var params = {
      init: false,
    }
  } else {
    var params = {
      init: true,
      loop: true,
      lazy: true,
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
            const fluidProps = getFluidGatsbyImage(slide.image, {
              maxWidth: 1800,
            })

            if (slide.caption === '') {
              var hasCaption = false
            } else {
              hasCaption = true
            }

            return (
              <div key={index}>
                <div>
                  <Img fixed={fluidProps} />
                </div>
                {hasCaption ? (
                  <p className="text-brand-gray-600 text-center text-xxs tracking-wide leading-loose mt-16 mb-0">
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
