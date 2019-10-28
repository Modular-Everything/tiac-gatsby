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
      <div className="container pt-8">
        <ul className="hidden md:flex flex-row justify-center">
          {data.allStoryblokEntry.edges.map(({ node }, index) => {
            if (node.parent_id === 3050741 && node.published_at != null) {
              return (
                <li
                  key={index}
                  className="rounded-sm text-brand-gray-600 text-xs mr-1 sm:mr-6 sm:p-3 sm:bg-brand-gray-100 sm:text-brand-gray-800 last:mr-0"
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
