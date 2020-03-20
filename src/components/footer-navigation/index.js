import React from 'react'
import { Link } from 'gatsby'

const FooterNavigation = () => {
  function scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="bg-brand-gray-700">
      <div className="container py-24 sm:py-16 sm:mx-auto">
        <ul className="flex justify-between text-xs text-brand-gray-100">
          <li>
            <Link
              to="/projects"
              className="p-4 -ml-4 hover:text-brand-gray-600"
            >
              Back to Projects
            </Link>
          </li>
          <li>
            <span
              className="p-4 -mr-4 hover:text-brand-gray-600 cursor-pointer"
              onClick={() => scrollTop()}
            >
              Top of page
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterNavigation
