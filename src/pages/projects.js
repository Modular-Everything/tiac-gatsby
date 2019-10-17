import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import '../components/grid/grid.css'

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query Projects {
        allStoryblokEntry(filter: { parent_id: { eq: 2875854 } }) {
          edges {
            node {
              name
              slug
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
      <div className="grid projects container">
        {data.allStoryblokEntry.edges.map(({ node }, index) => (
          <div
            key={index}
            className="aspect-ratio-3/2 relative overflow-hidden"
          >
            <img
              src={node.field_cover_string}
              alt=""
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
