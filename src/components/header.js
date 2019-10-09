import React from 'react'
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

const Header = () => (
  <PageHeader>
    <ul>
      <li>Profile</li>
      <li>Projects</li>
    </ul>

    {/* 
      Things to do next:
        - Build the website navigation into Storyblok (https://www.storyblok.com/tp/cms-website-header-menu-navigation)
        - Try out styled-components ThemeProvider (https://www.styled-components.com/docs/advanced)
        - Utilise Typography.js for vertical rhythm and general type-niceness (https://www.gatsbyjs.org/docs/typography-js/)
    */}
  </PageHeader>
)

export default Header
