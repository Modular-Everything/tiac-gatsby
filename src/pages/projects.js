import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import ProjectCard from '../components/project-card'

const Entry = ({ data }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-2">Projects:</h2>
      <div>
        {data.allStoryblokEntry.edges.map(project => (
          <ProjectCard meta={project} key={project.uuid} />
        ))}
      </div>
    </div>
  )
}

export default Entry

export const query = graphql`
  query ProjectsQuery {
    allStoryblokEntry(filter: { parent_id: { eq: 2875854 } }) {
      edges {
        node {
          name
          full_slug
          tag_list
          parent_id
        }
      }
    }
  }
`

Entry.propTypes = {
  data: PropTypes.shape({
    allStoryblokEntry: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
}
