import React from 'react'

const Footer = props => (
  <div className="bg-brand-gray-300">
    <div className="container py-12">
      <ul className="flex justify-center">
        <li className="relative mr-6 md:mr-8 lg:mr-12">
          <i className="absolute right-0 left-0 text-center opacity-0 hover:opacity-1">
            temp.
          </i>
          <a href="http://instagram.com" className="hover:opacity-0">
            Instagram
          </a>
        </li>

        <li className="relative mr-6 md:mr-8 lg:mr-12">
          <i className="absolute right-0 left-0 text-center opacity-0 hover:opacity-1">
            temp.
          </i>
          <a href="http://twitter.com" className="hover:opacity-0">
            Twitter
          </a>
        </li>

        <li className="relative mr-6 md:mr-8 lg:mr-12">
          <i className="absolute right-0 left-0 text-center opacity-0 hover:opacity-1">
            temp.
          </i>
          <a href="http://linkedin.com" className="hover:opacity-0">
            LinkedIn
          </a>
        </li>

        <li className="relative">
          <i className="absolute right-0 left-0 text-center opacity-0 hover:opacity-1">
            temp.
          </i>
          <a href="http://behance.com" className="hover:opacity-0">
            Behance
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
