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
    <header>
      <ul>
        {data.allStoryblokLink.edges.map(({ node }, index) => (
          <li key={index}>
            <Link to={node.slug === 'home' ? '' : node.slug}>{node.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
