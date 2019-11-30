import React, { useState } from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query Navigation {
        allStoryblokLink(
          filter: { parent_id: { eq: 0 }, slug: { ne: "categories" } }
          sort: { fields: [name], order: DESC }
        ) {
          edges {
            node {
              name
              slug
              parent_id
            }
          }
        }
        allStoryblokSpace {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )

  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={
        `bg-brand-black py-8 tracking-wide fixed w-full z-50 ` +
        (isMenuOpen ? `h-full` : `h-20`) +
        ` sm:h-auto overflow-hidden transition-h transition-250 transition-ease-in-out`
      }
    >
      <Helmet>
        <title>{data.allStoryblokSpace.edges[0].node.name}</title>
      </Helmet>
      <div className="container flex flex-row">
        <ul className="flex flex-col h-full sm:h-auto sm:flex-row w-full">
          <li className="text-white text-sm sm:hidden mb-12">
            {data.allStoryblokSpace.edges[0].node.name}
          </li>
          {data.allStoryblokLink.edges.map(({ node }, index) => (
            <li
              key={index}
              className="mb-4 sm:mb-0 sm:mr-6 last:mb-0 last:mr-0 text-2xl sm:text-xs ml-8 sm:ml-0"
            >
              <Link
                to={node.slug === 'home' ? '/' : '/' + node.slug}
                className="text-white hover:text-brand-gray-600"
              >
                {node.name}
              </Link>
            </li>
          ))}
          <li
            className={
              `text-white ml-8 sm:ml-auto fixed sm:static bottom-0 sm:bottom-auto mb-12 sm:mb-auto text-sm sm:text-xs ` +
              (isMenuOpen ? `visible` : `hidden`)
            }
          >
            <a href="mailto:ac@tiac.design">ac@tiac.design</a>
          </li>
        </ul>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-brand-gray-50"
          >
            <svg
              className="fill-current h-3 w-6"
              viewBox="0 0 29 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu-Icon</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Group" fill="#EFEFEF" fill-rule="nonzero">
                  <path
                    d="M0.5,0 L28.5,0 C28.776142,0 29,0.2238576 29,0.5 C29,0.7761424 28.776142,1 28.5,1 L0.5,1 C0.223858,1 0,0.7761424 0,0.5 C0,0.2238576 0.223858,0 0.5,0 Z M0.5,7 L28.5,7 C28.776142,7 29,7.2238576 29,7.5 C29,7.7761424 28.776142,8 28.5,8 L0.5,8 C0.223858,8 0,7.7761424 0,7.5 C0,7.2238576 0.223858,7 0.5,7 Z"
                    id="Menu-Icon"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
