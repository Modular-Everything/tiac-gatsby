import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query Navigation {
        allStoryblokLink(
          filter: { parent_id: { eq: 0 } }
          sort: { fields: [name], order: ASC }
        ) {
          edges {
            node {
              id
              name
              slug
              parent_id
            }
          }
        }
      }
    `
  )

  return (
    <header className="bg-brand-black px-4 py-8 text-xs tracking-wide lg:text-sm">
      <ul className="inline-flex w-full">
        {data.allStoryblokLink.edges.map(({ node }, index) => (
          <li key={index} className="mr-6 last:mr-0">
            <Link
              to={node.slug === 'home' ? '' : node.slug}
              className="text-white hover:text-brand-gray-600"
            >
              {node.name}
            </Link>
          </li>
        ))}
        <li className="text-white ml-auto">ac@tiac.design</li>
      </ul>
    </header>
  )
}

export default Header
