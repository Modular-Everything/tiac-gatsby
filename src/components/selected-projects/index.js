import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'
// import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import './selected-projects.css'

const SelectedProjects = props => {
  if (Array.isArray(props.projects) && props.projects.length !== 0) {
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
        if (value.content.cover !== '') {
          // const fluidProps = getFluidGatsbyImage(value.content.cover, {
          //   maxWidth: 216,
          // })
          thumbnail = (
            <div className="sp__project-card overflow-hidden sm:z-0 sm:cursor-pointer">
              {/* <Img fluid={fluidProps} /> */}
              <img src={value.content.cover} alt="" />
            </div>
          )
        }

        projects.push(
          <li
            key={index}
            className="relative overflow-hidden text-white mr-4 last:mr-0 sm:mt-2 sm:mb-2 sm:relative sm:flex-1"
          >
            <Link to={'/' + value.full_slug}>
              <div className="hidden sm:visible sm:absolute sm:flex sm:justify-center sm:flex-col sm:items-center sm:w-full sm:h-full sm:z-10 sm:p-2 sm:bg-brand-black-overlay sm:opacity-0 sm:hover:opacity-100 transition-opacity transition-ease-in-out">
                <h2 className="text-xs sm:text-white">{value.name}</h2>
                <h3 className="text-xxs mt-2 sm:text-white sm:text-center">
                  {value.tag_list[0]}
                </h3>
              </div>

              <h2 className="visible sm:hidden text-xs mb-3 text-white">
                {value.name}
              </h2>

              {thumbnail}

              <h3 className="visible sm:hidden text-xxs mt-4 text-brand-gray-600">
                {value.tag_list[0]}
              </h3>
            </Link>
          </li>
        )
      }
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
