import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export default class Entry extends PureComponent {
  render() {
    const { data } = this.props
    const { storyblokEntry } = data
    return (
      <div>
        <h4>{storyblokEntry.name}</h4>
      </div>
    )
  }
}

export const query = graphql`
  query ProjectQuery($STORY_ID: String!) {
    storyblokEntry(uuid: { eq: $STORY_ID }) {
      name
      slug
      tag_list
      parent_id
      full_slug
      field_cover_string
      content
    }
  }
`

Entry.propTypes = {
  data: PropTypes.shape({
    storyblokEntry: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
}
