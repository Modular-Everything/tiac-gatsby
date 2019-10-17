import React from 'react'

const Footer = props => (
  <div className="bg-brand-gray-300">
    <div className="container py-12">
      <ul className="flex justify-center">
        <li className="relative mr-6 md:mr-8 lg:mr-12">
          <i className="absolute right-0 left-0 text-center">temp.</i>
          <a href="http://instagram.com">Instagram</a>
        </li>

        <li className="relative mr-6 md:mr-8 lg:mr-12">
          <i className="absolute right-0 left-0 text-center">temp.</i>
          <a href="http://twitter.com">Twitter</a>
        </li>

        <li className="relative mr-6 md:mr-8 lg:mr-12">
          <i className="absolute right-0 left-0 text-center">temp.</i>
          <a href="http://linkedin.com">LinkedIn</a>
        </li>

        <li className="relative">
          <i className="absolute right-0 left-0 text-center">temp.</i>
          <a href="http://behance.com">Behance</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
