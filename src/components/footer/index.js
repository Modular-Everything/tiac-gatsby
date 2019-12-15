import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query Social {
        allStoryblokEntry(filter: { field_component: { eq: "global" } }) {
          edges {
            node {
              content
            }
          }
        }
      }
    `
  )

  const parsed_nav = JSON.parse(data.allStoryblokEntry.edges[0].node.content)
  const social_entries = Object.entries(parsed_nav.social_links)
  var social_links = []
  social_entries.forEach(([key, value]) => {
    social_links.push(
      <li
        key={key}
        className="text-brand-gray-800 text-sm relative mr-12 sm:mr-16 last:mr-0"
      >
        <a
          href={value.link.cached_url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <div className="text-2xl text-brand-gray-800 sm:rounded-full sm:bg-white sm:h-16 sm:w-16 sm:flex sm:justify-center sm:items-center sm:shadow-focus sm:absolute sm:opacity-0 sm:hover:opacity-100 sm:transition-ease-in-out sm:transition-opacity z-50">
            <FontAwesomeIcon icon={['fab', value.icon]} />
          </div>
          <div className="hidden sm:visible sm:h-16 sm:flex sm:items-center">
            {value.name}
          </div>
        </a>
      </li>
    )
  })

  return (
    <div className="bg-white">
      <div className="container py-12">
        <ul className="flex justify-center items-center">{social_links}</ul>
      </div>
    </div>
  )
}

export default Footer
