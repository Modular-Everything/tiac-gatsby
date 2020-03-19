/** @jsx jsx */
import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { css, jsx } from '@emotion/core'
import Layout from '../components/layout'
import '../components/grid/grid.css'
import Header from '../components/header'
import PageHeading from '../components/page-heading'
import Footer from '../components/footer'

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
              published_at(formatString: "Do MMMM YYYY")
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Header />
      <PageHeading />

      <section className="bg-white pb-16">
        {data.allStoryblokEntry.edges.map(article => (
          <div
            className="hover:bg-brand-gray-50"
            css={css`
              &:last-of-type a {
                border-bottom: 1px solid #d8d8d8;
              }
            `}
          >
            <div className="container">
              <Link
                to={`/${article.node.full_slug}`}
                className="items-center py-4"
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 4fr 1fr;
                  border-top: 1px solid #d8d8d8;
                `}
              >
                <div className="text-xs text-brand-gray-800 pt-1">
                  {article.node.published_at}
                </div>
                <div className="text-2xl font-bold text-brand-gray-800">
                  {article.node.name}
                </div>
                <div className="text-xs text-brand-gray-600 pt-1">
                  {article.node.field_read_time_string} minute read
                </div>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Footer alt />
    </Layout>
  )
}

export default Writing
