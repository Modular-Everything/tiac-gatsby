import React from 'react'
import SbEditable from 'storyblok-react'
import Swiper from 'react-id-swiper'
import '../image/image.css'
// import Img from 'gatsby-image'
// import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import './swiper-base.css'
import './slider.css'

const Slider = props => {
  if (props.blok.slides.length === 1) {
    var params = {
      init: true,
      pagination: false,
      effect: 'fade',
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

  if (props.blok.slides.length >= 1 && props.blok.slides[0].image) {
    return (
      <SbEditable content={props.blok}>
        <div className={props.blok.container ? 'container' : ''}>
          <Swiper {...params}>
            {props.blok.slides.map((slide, index) => {
              // let fluidProps = ''
              // if (slide.image !== 'undefined' && slide.image !== '') {
              //   fluidProps = getFluidGatsbyImage(slide.image, {
              //     maxWidth: 1000,
              //     maxHeight: 585,
              //   })
              // }

              if (slide.caption === '') {
                var hasCaption = false
              } else {
                hasCaption = true
              }

              const imageService = '//img2.storyblok.com/'
              const path = slide.image.replace('//a.storyblok.com', '')
              const resizedImage = imageService + '2560x1388' + path

              return (
                <div key={index}>
                  {/* <Img fluid={fluidProps} /> */}
                  <div>
                    <img src={resizedImage} alt="" />
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
  } else {
    return (
      <p className="container border border-dashed border-red-600 bg-red-100 my-6 py-6">
        Add an asset
      </p>
    )
  }
}

export default Slider
