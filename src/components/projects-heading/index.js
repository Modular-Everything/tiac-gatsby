/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Arrow from '../../images/arrow.svg'
import { css, jsx, keyframes } from '@emotion/core'

const ProjectsHeading = props => {
  const data = useStaticQuery(graphql`
    query Credentials {
      allStoryblokEntry(filter: { field_component: { eq: "global" } }) {
        edges {
          node {
            field_credentials_string
          }
        }
      }
    }
  `)

  const download = keyframes`
    0%,
    50%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    25%,
    75% {
      -webkit-transform: translateY(6px);
      transform: translateY(6px);
    }
  `

  return (
    <div className="bg-white">
      <div className="container py-6 sm:py-12 md:py-16">
        <div className="flex flex-col-reverse justify-between sm:flex-row sm:flex-1">
          <div />

          <div>
            <a
              href={
                data.allStoryblokEntry.edges[0].node.field_credentials_string
              }
              target="_blank"
              className="text-xs text-brand-black flex flex-row items-center"
              css={css`
                &:hover {
                  span {
                    animation: ${download} 0.75s ease-out;
                  }
                }
              `}
            >
              Credentials
              <span
                className="bg-brand-black inline-block rounded-full flex justify-center items-center ml-4 relative"
                css={css`
                  width: 1.5rem;
                  height: 1.5rem;
                  top: -2px;
                `}
              >
                <img
                  src={Arrow}
                  alt="Download"
                  css={css`
                    transform: rotate(90deg);
                  `}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHeading
