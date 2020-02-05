import React from 'react'
import { Link } from 'gatsby'
import './selected-projects.css'

const SelectedProjects = props => {
  console.log(props.projects)
  if (props.projects.length !== 0 && props.projects !== undefined) {
    var projects = []

    for (const [index, value] of props.projects.entries()) {
      const regex = RegExp(/(.mp4)/) // is it a video?

      if (regex.test(value.content.cover)) {
        var thumbnail = (
          <div className="sp__project-card overflow-hidden sm:z-0 sm:cursor-pointer">
            <video height="100%" width="100%" autoPlay loop muted playsInline>
              <source src={value.content.cover} type="video/mp4"></source>
            </video>
          </div>
        )
      } else if (value.content.cover !== '') {
        const imageService = '//img2.storyblok.com/'
        const path = value.content.cover.replace('//a.storyblok.com', '')
        const resizedImage = imageService + '600x345' + path

        thumbnail = (
          <div className="sp__project-card sm:z-0 sm:cursor-pointer aspect-ratio-16/9">
            <img
              src={resizedImage}
              alt=""
              className="object-cover sm:absolute sm:top-0 sm:left-0 sm:w-full sm:h-full"
            />
          </div>
        )
      }

      projects.push(
        <li
          key={index}
          className="relative overflow-hidden text-white relative"
        >
          <Link to={'/' + value.full_slug}>
            <div className="hidden sm:block sm:absolute sm:flex sm:justify-center sm:flex-col sm:items-center sm:w-full sm:h-full sm:z-10 sm:p-2 sm:bg-brand-black-overlay sm:opacity-0 sm:hover:opacity-100 transition-opacity transition-ease-in-out">
              <h2 className="text-xs sm:text-white">{value.name}</h2>
            </div>

            <h2 className="block sm:hidden text-xs mb-3 text-white">
              {value.name}
            </h2>

            {thumbnail}
          </Link>
        </li>
      )
    }

    return (
      <div className="bg-brand-gray-850">
        <div className="container px-0 sm:px-4 pt-10 pb-20">
          <h2 className="text-xs mb-16 text-brand-gray-600 pl-4 sm:pl-0">
            Selected Projects
          </h2>
          <ul className="sp__scrolling-wrapper overflow-x-auto pl-4 sm:pl-0">
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
