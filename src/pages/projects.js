import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../components/grid/grid.css'

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query Projects {
        allStoryblokEntry {
          edges {
            node {
              name
              full_slug
              parent_id
              field_cover_string
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div className="container pt-8">
        <ul className="flex flex-row justify-center">
          {data.allStoryblokEntry.edges.map(({ node }, index) => {
            if (node.parent_id === 3050741) {
              return (
                <li
                  key={index}
                  className="bg-brand-gray-300 p-3 mr-4 last:mr-0"
                >
                  {node.name}
                </li>
              )
            }
          })}
        </ul>
      </div>

      <div className="grid projects container">
        {data.allStoryblokEntry.edges.map(({ node }, index) => {
          if (node.parent_id === 2875854) {
            return (
              <div
                key={index}
                className="aspect-ratio-3/2 relative overflow-hidden"
              >
                <Link to={node.full_slug}>
                  <img
                    src={node.field_cover_string}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="absolute">{node.caption}</div>
                </Link>
              </div>
            )
          }
        })}
      </div>
    </Layout>
  )
}

export default Projects
