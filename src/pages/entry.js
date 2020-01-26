import React, { Component } from 'react'
import { graphql } from 'gatsby'

export default class Entry extends Component {
  render() {
    const { storyblokEntry } = this.props.data
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
