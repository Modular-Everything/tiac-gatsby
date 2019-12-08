import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './page-heading.css'

const PageHeading = props => {
  if (props.pageSlug === 'home') {
    var isHome = true
  }

  const data = useStaticQuery(
    graphql`
      query PageData {
        allStoryblokSpace {
          edges {
            node {
              name
            }
          }
        }
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

  if (props.pageData.pageCategories !== undefined) {
    var categories = []

    for (const [index, value] of props.pageData.pageCategories.entries()) {
      categories.push(
        <li
          key={index}
          className="rounded-sm text-brand-gray-600 text-xxs sm:text-xs mr-1 sm:mr-6 sm:p-3 sm:bg-brand-gray-100 sm:text-brand-gray-800 last:mr-0 pageCategories"
        >
          {value.name}
          <span className="sm:hidden">, </span>
        </li>
      )
    }
  }

  const parsed_content = JSON.parse(
    data.allStoryblokEntry.edges[0].node.content
  )

  return (
    <div className="bg-white">
      <div className="container py-6 sm:py-12 md:py-16">
        <div className="flex flex-col-reverse justify-between sm:flex-row sm:flex-1">
          {isHome ? (
            <>
              <h1 className="hidden text-xl font-semibold leading-tight text-brand-gray-800 tracking-tight mt-2 sm:mt-0 sm:flex sm:flex-col sm:justify-center md:text-2xl">
                {data.allStoryblokSpace.edges[0].node.name}
              </h1>
              <p className="text-sm max-w-xs">{parsed_content.byline}</p>
            </>
          ) : (
            <>
              <h1 className="text-brand-black text-xl mt-2 sm:mt-0 sm:text-xl sm:flex sm:flex-col sm:justify-center md:text-2xl">
                {props.pageName}
              </h1>
              <ul className="flex flex-row sm:justify-end">{categories}</ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeading
