/** @jsx jsx */
import { graphql, useStaticQuery, Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import Layout from '../components/layout'
import Header from '../components/header'
import PageHeading from '../components/page-heading'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import '../components/grid/grid.css'
import { AnimateIn } from '../components/reveal';

const Writing = () => {
  const data = useStaticQuery(
    graphql`
      query Articles {
        allStoryblokEntry(filter: { parent_id: { eq: 8360195 } }) {
          edges {
            node {
              field_read_time_string
              name
              full_slug
              first_published_at(formatString: "Do MMMM YYYY")
            }
          }
        }
      }
    `
  )

  function WritingHover(e) {
    const cursor = document.querySelector('#cursor')
    cursor.style.opacity = 1
    cursor.style.top = `${e.pageY - 38}px`
    cursor.style.left = `${e.pageX - 38}px`

    const label = e.currentTarget.getAttribute('data-label')
    cursor.innerHTML = label
  }

  function WritingOut(e) {
    const cursor = document.querySelector('#cursor')
    cursor.style.opacity = 0
  }

  return (
    <Layout>
      <Cursor />
      <Header />
      <PageHeading />

      <section className="bg-white pb-16">
        {data.allStoryblokEntry.edges.map(article => (
          <AnimateIn>
            <div
              className="hover:bg-brand-gray-50"
              css={css`
                &:last-of-type a {
                  border-bottom: 1px solid #d8d8d8;
                }
              `}
              data-label="Read"
              onMouseMove={e => WritingHover(e)}
              onFocus={e => WritingHover(e)}
              onMouseOut={e => WritingOut(e)}
              onBlur={e => WritingOut(e)}
              role="link"
              tabIndex="0"
            >
              <Link
                to={`/${article.node.full_slug}`}
                className="items-center py-4"
                css={css`
                  cursor: none;
                `}
              >
                <div
                  className="container"
                  css={css`
                    display: grid;
                    grid-template-columns: 1fr 3fr 1fr;
                    border-top: 1px solid #d8d8d8;
                    padding: 2rem 0;

                    @media (max-width: 440px) {
                      grid-template-columns: 1fr;

                      & > div {
                        margin-bottom: 0.25rem;
                      }

                      & > div:last-of-type {
                        margin-bottom: 0;
                      }
                    }
                  `}
                >
                  <div className="mr-4 flex justify-center flex-col ml-4 sm:mr-0 text-brand-gray-800 text-xs">
                    {article.node.first_published_at}
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-brand-gray-800 mr-4 ml-4 sm:ml-0">
                    {article.node.name}
                  </div>
                  <div className="flex flex-col justify-center ml-4 mr-4 sm:ml-0 text-brand-gray-600 text-right text-xs">
                    {article.node.field_read_time_string} minute read
                  </div>
                </div>
              </Link>
            </div>
          </AnimateIn>
        ))}
      </section>

      <Footer alt />
    </Layout>
  )
}

export default Writing
