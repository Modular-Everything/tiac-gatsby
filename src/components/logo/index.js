import React from 'react'
// import SbEditable from 'storyblok-react'

const Logo = props => {
  const { blok } = props
  console.log(blok)

  const imageService = '//img2.storyblok.com/'
  const path = blok.image.replace('//a.storyblok.com', '')
  const resizedImage = imageService + 200 + 'x' + 0 + path

  return (
    <div>
      <img className="mx-auto w-full" src={resizedImage} alt="Logo" />
    </div>
  )
}

export default Logo
