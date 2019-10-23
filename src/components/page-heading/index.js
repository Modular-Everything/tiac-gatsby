import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const PageHeading = props => {
  var isHome = false
  if (props.pageSlug === 'home') {
    var isHome = true
  }

  const data = useStaticQuery(
    graphql`
      query {
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

  return (
    <div className="container py-6 sm:py-12 md:py-16">
      <div className="flex flex-col-reverse justify-between sm:flex-row sm:flex-1">
        <h1 className="text-xl mt-2 sm:mt-0 sm:text-xl sm:flex sm:flex-col sm:justify-center md:text-2xl">
          {isHome ? data.allStoryblokSpace.edges[0].node.name : props.pageName}
        </h1>
        <ul className="flex flex-row sm:justify-end">
          {props.pageData.pageCategories.map(({ node }, index) => {
            return (
              <li
                key={index}
                className="rounded-sm text-brand-gray-600 text-xs mr-1 sm:mr-6 sm:p-3 sm:bg-brand-gray-100 sm:text-brand-gray-800 last:mr-0"
              >
                {node}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PageHeading
