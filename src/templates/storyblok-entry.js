import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Components from '../components/components.js'
import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import SelectedProjects from '../components/selected-projects'
import Credits from '../components/credits'

library.add(fab)

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)

    return { story }
  }

  constructor(props) {
    super()
    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let name = this.state.story.name
    let content = this.state.story.content
    let slug = this.state.story.slug
    let selectedProjects = this.state.story.content.selected_projects
    let credits = this.state.story.content.credits

    return (
      <Layout>
        <PageHeading pageName={name} pageData={content} pageSlug={slug} />
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
        <Credits who={credits} />
        <SelectedProjects projects={selectedProjects} />
      </Layout>
    )
  }
}

export default StoryblokEntry
