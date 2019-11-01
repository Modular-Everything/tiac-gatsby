import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import './selected-projects.css'

const SelectedProjects = props => {
  console.log(props)

  if (props.projects !== undefined) {
    var projects = []

    for (const [index, value] of props.projects.entries()) {
      const regex = RegExp(/(.mp4)/) // is it a video?
      if (regex.test(value.content.cover)) {
        var thumbnail = (
          <div className="sp__project-card">
            <video height="100%" width="100%" autoPlay loop muted>
              <source src={value.content.cover} type="video/mp4"></source>
            </video>
          </div>
        )
      } else {
        const fluidProps = getFluidGatsbyImage(value.content.cover, {
          maxWidth: 216,
        })
        thumbnail = (
          <div className="sp__project-card">
            <Img fluid={fluidProps} />
          </div>
        )
      }

      projects.push(
        <li key={index} className="text-white mr-8 last:mr-0">
          <h2 className="text-xs mb-2">{value.name}</h2>
          {thumbnail}
          <h3 className="text-xxs text-brand-gray-600 mt-3">
            {value.tag_list[0]}
          </h3>
        </li>
      )
    }
  }

  return (
    <div className="bg-brand-gray-850">
      <div className="pt-10 pb-20">
        <h2 className="text-xs mb-16 text-brand-gray-600 pl-8">
          Selected Projects
        </h2>
        <ul className="sp__scrolling-wrapper pl-8 overflow-x-auto">
          {projects}
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default SelectedProjects
