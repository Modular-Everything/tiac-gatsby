import React from 'react'
import Components from '../components/components.js'
import Layout from '../components/layout'

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
    let content = this.state.story.content

    return (
      <Layout>
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
      </Layout>
    )
  }
}

export default StoryblokEntry
