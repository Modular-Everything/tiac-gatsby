import React from 'react'
import Components from '../components/components.js'
import Layout from '../components/layout'
import PageHeading from '../components/page-heading'

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

    return (
      <Layout>
        <PageHeading pageName={name} pageData={content} pageSlug={slug} />
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
      </Layout>
    )
  }
}

export default StoryblokEntry
