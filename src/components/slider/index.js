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
    params = {
      init: true,
      loop: true,
      lazy: false,
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
            let fluidProps = ''
            if (slide.image !== 'undefined' && slide.image !== '') {
              fluidProps = getFluidGatsbyImage(slide.image, {
                maxWidth: 1000,
                maxHeight: 585,
              })
            }

            if (slide.caption === '') {
              var hasCaption = false
            } else {
              hasCaption = true
            }

            return (
              <div key={index}>
                <div>
                  <Img fluid={fluidProps} />
                </div>
                {hasCaption ? (
                  <p className="text-brand-gray-600 text-center text-xxs tracking-wide leading-loose mt-10 mb-0 px-4">
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
