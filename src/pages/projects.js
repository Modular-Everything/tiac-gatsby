import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import ProjectCard from '../components/project-card'

export default class Entry extends PureComponent {
  render() {
    const { data } = this.props
    const { allStoryblokEntry } = data
    return (
      <div>
        <h4>Projects:</h4>
        <div>
          {allStoryblokEntry.edges.map(project => (
            <ProjectCard meta={project} />
          ))}
        </div>
      </div>
    )
  }
}

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
          name: PropTypes.string.isRequired,
        })
      ),
    }),
  }).isRequired,
}
