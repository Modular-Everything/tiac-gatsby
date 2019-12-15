import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../components/grid/grid.css'
import Header from '../components/header'
import Footer from '../components/footer'
import '../components/page-heading/page-heading.css'

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query Projects {
        allStoryblokEntry(filter: { parent_id: { eq: 2875854 } }) {
          edges {
            node {
              name
              full_slug
              parent_id
              field_cover_string
              tag_list
              published_at
              field_isInvisible_boolean
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Header />
      <div className="grid projects container container-wide py-4">
        {data.allStoryblokEntry.edges.map(({ node }, index) => {
          var regex = RegExp(/(.mp4)/)
          if (regex.test(node.field_cover_string)) {
            var isVideo = true
          }

          let tags = []
          for (const [index, value] of node.tag_list.entries()) {
            tags.push(
              <li key={index} className="mr-1 last:mr-0 pageCategories">
                {value}
                <span>,</span>
              </li>
            )
          }

          if (
            node.field_isInvisible_boolean === 'null' ||
            node.field_isInvisible_boolean === false
          ) {
            return (
              <div key={index} className="relative overflow-hidden">
                <Link
                  to={'/' + node.full_slug}
                  className="flex flex-col-reverse"
                >
                  <div className="flex flex-col-reverse">
                    <h2 className="text-xl font-semibold mb-2 leading-tight tracking-tight">
                      {node.name}
                    </h2>
                    <ul className="flex text-brand-gray-600 text-xxs mt-4 mb-1">
                      {tags}
                    </ul>
                  </div>
                  {!isVideo ? (
                    <img
                      src={node.field_cover_string}
                      alt=""
                      className="w-full h-full object-cover"
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
          } else {
            return null
          }
        })}
      </div>
      <Footer />
    </Layout>
  )
}

export default Projects
