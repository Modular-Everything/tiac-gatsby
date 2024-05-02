import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { isLoggedIn } from '../../utils/auth'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Cursor from '../../components/cursor'
import Footer from '../../components/footer'
import { AnimateIn } from '../../components/reveal'
import { Helmet } from 'react-helmet'

const PrivateProjectsAuthd = () => {
  const data = useStaticQuery(
    graphql`
      query PrivateProjectsContent {
        content: allStoryblokEntry(filter: { parent_id: { eq: 477500109 } }) {
          edges {
            node {
              name
              full_slug
              parent_id
              field_cover_string
              tag_list
              published_at
              field_isInvisible_boolean
              field_projectDescription_string
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
    if (extraCopy !== null) {
      extraCopy.style.opacity = 1
    }
  }

  function ProjectOut(e) {
    const cursor = document.querySelector('#cursor')
    cursor.style.opacity = 0

    const extraCopy = e.currentTarget.querySelector('.extraCopy')
    if (extraCopy !== null) {
      extraCopy.style.opacity = 0
    }
  }

  return (
    <Layout>
      <Cursor />
      <Header />
      <Helmet>
        <meta name={`robots`} content={`noindex, nofollow`} />
      </Helmet>

      <div className="grid projects container container-wide py-4">
        {data.content.edges.map(({ node }, index) => {
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

          if (isLoggedIn()) {
            return (
              <AnimateIn>
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
                      tabIndex="0"
                    >
                      {node.field_projectDescription_string && (
                        <h2 className="absolute bg-brand-white-overlay duration-200 ease-in extraCopy flex flex-col font-semibold h-full justify-center leading-normal leading-tight left-0 mb-2 opacity-0 p-16 text-brand-gray-800 text-center text-xl top-0 tracking-tight transition z-50 hidden sm:flex">
                          {node.field_projectDescription_string}
                        </h2>
                      )}
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
              </AnimateIn>
            )
          }
        })}
      </div>
      <Footer />
    </Layout>
  )
}

export default PrivateProjectsAuthd
