import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import ProjectsHeading from '../components/projects-heading'
import '../components/grid/grid.css'

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

  function ProjectHover(e) {
    const cursor = document.querySelector('#cursor')
    cursor.style.opacity = 1
    cursor.style.top = `${e.pageY - 38}px`
    cursor.style.left = `${e.pageX - 38}px`

    const label = e.currentTarget.getAttribute('data-label')
    cursor.innerHTML = label

    const extraCopy = e.currentTarget.querySelector('.extraCopy')
    extraCopy.style.opacity = 1
  }

  function ProjectOut(e) {
    const cursor = document.querySelector('#cursor')
    cursor.style.opacity = 0

    const extraCopy = e.currentTarget.querySelector('.extraCopy')
    extraCopy.style.opacity = 0
  }

  return (
    <Layout>
      <Cursor />
      <Header />
      <ProjectsHeading />

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

          // Image rendering / cropping
          const imageService = '//img2.storyblok.com/'
          const path = node.field_cover_string.replace('//a.storyblok.com', '')
          const resizedImage = imageService + '1200x675' + path
          // ***

          if (
            node.field_isInvisible_boolean === 'null' ||
            node.field_isInvisible_boolean === false
          ) {
            return (
              <Fade up>
                <div key={index} className="relative">
                  <Link
                    to={'/' + node.full_slug}
                    className="flex flex-col-reverse"
                  >
                    <div className="flex flex-col-reverse">
                      <h2 className="text-xl text-brand-gray-800 font-semibold mb-2 leading-tight tracking-tight">
                        {node.name}
                      </h2>
                      <ul className="flex text-brand-gray-600 text-xxs mt-4 mb-1">
                        {tags}
                      </ul>
                    </div>

                    <div
                      data-label="View"
                      className="aspect-ratio-16/9 overflow-hidden relative"
                      onMouseMove={e => ProjectHover(e)}
                      onFocus={e => ProjectHover(e)}
                      onMouseOut={e => ProjectOut(e)}
                      onBlur={e => ProjectOut(e)}
                      role="link"
                      tabindex="0"
                    >
                      <h2 className="extraCopy opacity-0 bg-brand-white-overlay transition ease-in duration-200 text-xl text-brand-gray-800 font-semibold mb-2 leading-tight tracking-tight absolute top-0 left-0 z-50 p-16 flex justify-center flex-col text-center h-full leading-normal">
                        Viva A Revolucão Bonita; ‘The Beautiful Revolution’.
                        Pelé Sports needed a new visual language that would not
                        only bring Pelé and his identity to a 21st century
                        market, but also show off the rich heritage that the
                        player represents.
                      </h2>
                      {!isVideo ? (
                        <img src={resizedImage} alt="" className="absolute" />
                      ) : (
                        <video
                          height="100%"
                          width="100%"
                          className="absolute"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source
                            src={node.field_cover_string}
                            type="video/mp4"
                          ></source>
                        </video>
                      )}
                    </div>
                  </Link>
                </div>
              </Fade>
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
