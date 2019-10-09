import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'

// Component Styled
const PageHeader = styled.header`
  background: hsl(0, 0%, 0%);
  color: hsl(0, 100%, 100%);
  padding: 32px;

  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-right: 16px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`
// ---

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query Navigation {
        allStoryblokEntry {
          edges {
            node {
              name
              full_slug
            }
          }
        }
      }
    `
  )

  return (
    <PageHeader>
      <ul>
        {data.allStoryblokEntry.edges.map(({ node }, index) => (
          <li key={index}>
            <Link to={node.full_slug == 'home' ? '' : node.full_slug}>
              {node.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* 
        Things to do next:
          - Navigation
              - The above works but it doesn't show folders.
              - Try using `allStoryblokLink` instead
          - Try out styled-components ThemeProvider (https://www.styled-components.com/docs/advanced)
          - Utilise Typography.js for vertical rhythm and general type-niceness (https://www.gatsbyjs.org/docs/typography-js/)
      */}
    </PageHeader>
  )
}

export default Header
