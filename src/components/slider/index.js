import React from 'react'
import SbEditable from 'storyblok-react'
import Swiper from 'react-id-swiper'
import './swiper-base.css'
import './slider.css'

const Slider = props => {
  console.table(props.blok.slides)

  const params = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  return (
    <SbEditable content={props.blok}>
      <Swiper {...params}>
        {props.blok.slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.alt} />
            <p className="slide-caption text-gray-500 text-center text-sm mt-5">
              {slide.caption}
            </p>
          </div>
        ))}
      </Swiper>
    </SbEditable>
  )
}

export default Slider