import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query Navigation {
        allStoryblokLink(
          filter: { parent_id: { eq: 0 }, slug: { ne: "categories" } }
          sort: { fields: [name], order: ASC }
        ) {
          edges {
            node {
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
      <div className="container">
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
          <li className="text-white ml-auto">
            <a href="mailto:ac@tiac.design">ac@tiac.design</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
