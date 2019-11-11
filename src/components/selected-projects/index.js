import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import './selected-projects.css'

const SelectedProjects = props => {
  console.log(props)
  if (Array.isArray(props.projects) && props.projects.length) {
    var projects = []

    for (const [index, value] of props.projects.entries()) {
      const regex = RegExp(/(.mp4)/) // is it a video?
      if (regex.test(value.content.cover)) {
        var thumbnail = (
          <div className="sp__project-card overflow-hidden sm:z-0 sm:cursor-pointer">
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
          <div className="sp__project-card overflow-hidden sm:z-0 sm:cursor-pointer">
            <Img fluid={fluidProps} />
          </div>
        )
      }

      projects.push(
        <li key={index} className="text-white mr-4 sm:relative sm:flex-1">
          <Link to={value.full_slug}>
            <h2 className="text-xs mb-2 sm:absolute sm:flex sm:justify-center sm:items-center sm:w-full sm:h-full sm:mb-0 sm:z-10 sm:p-2 sm:bg-brand-black-overlay sm:opacity-0 sm:hover:opacity-100">
              {value.name}
            </h2>
            {thumbnail}
            <h3 className="text-xxs text-brand-gray-600 mt-3 sm:hidden">
              {value.tag_list[0]}
            </h3>
          </Link>
        </li>
      )
    }

    return (
      <div className="bg-brand-gray-850">
        <div className="container pl-0 pr-0 pt-10 pb-20 sm:pl-8 sm:pr-8 sm:mx-auto">
          <h2 className="text-xs mb-16 text-brand-gray-600 pl-8">
            Selected Projects
          </h2>
          <ul className="sp__scrolling-wrapper pl-8 overflow-x-auto">
            {projects}
            <li className="w-2 sm:w-2 sm:hidden"></li>
          </ul>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default SelectedProjects
