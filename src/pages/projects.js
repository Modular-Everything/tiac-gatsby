/* eslint-disable */
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
              published_at
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div className="grid projects container container-wide py-4">
        {data.allStoryblokEntry.edges.map(({ node }, index) => {
          var regex = RegExp(/(.mp4)/)
          if (regex.test(node.field_cover_string)) {
            var isVideo = true
          }

          if (node.parent_id === 2875854) {
            return (
              <div
                key={index}
                className={`${
                  !isVideo ? 'aspect-ratio-43/25' : ''
                } relative overflow-hidden`}
              >
                <Link to={node.full_slug}>
                  <h2 className="text-xs sm:text-white mb-2 sm:absolute sm:flex sm:justify-center sm:items-center sm:w-full sm:h-full sm:mb-0 sm:z-10 sm:p-2 sm:bg-brand-black-overlay sm:opacity-0 sm:hover:opacity-100">
                    {node.name}
                  </h2>
                  {!isVideo ? (
                    <img
                      src={node.field_cover_string}
                      alt=""
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  ) : (
                    <video height="100%" width="100%" autoPlay loop muted>
                      <source
                        src={node.field_cover_string}
                        type="video/mp4"
                      ></source>
                    </video>
                  )}
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
