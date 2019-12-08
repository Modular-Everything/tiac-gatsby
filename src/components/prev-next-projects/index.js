import React from 'react'
import { Link } from 'gatsby'

const PrevNext = props => {
  if (Array.isArray(props.projects) && props.projects.length !== 0) {
    return (
      <div className="bg-brand-black">
        <div className="container pt-10 pb-20 sm:pl-8 sm:pr-8 sm:mx-auto">
          <ul className="flex justify-between text-xs mb-16 text-brand-gray-600">
            <li>
              <Link
                to="/"
                className="p-4 -ml-4 hover:bg-black text-white transition-ease-in-out transition-bg"
              >
                Previous Project
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="p-4 -mr-4 hover:bg-black text-white transition-ease-in-out transition-bg"
              >
                Next Project
              </Link>
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="w-6/12 mr-2">
              <div className="aspect-ratio-3/2 bg-blue-500"></div>
            </li>
            <li className="w-6/12 ml-2">
              <div className="aspect-ratio-3/2 bg-red-500"></div>
            </li>
          </ul>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default PrevNext
