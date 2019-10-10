import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import tw from 'tailwind.macro'

const Button = tw.button`
  font-bold text-2xl
`

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
    <div>
      {data.allStoryblokLink.edges.map(({ node }, index) => (
        <Button key={index}>
          <Link to={node.slug === 'home' ? '' : node.slug}>{node.name}</Link>
        </Button>
      ))}
      {/* 
        Things to do next:
          x Navigation
          - Try out styled-components ThemeProvider (https://www.styled-components.com/docs/advanced)
          - Utilise Typography.js for vertical rhythm and general type-niceness (https://www.gatsbyjs.org/docs/typography-js/)
      */}
    </div>
  )
}

export default Header
