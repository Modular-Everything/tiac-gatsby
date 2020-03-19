import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Components from '../components/components.js'
import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import SelectedProjects from '../components/selected-projects'
import Credits from '../components/credits'
import Header from '../components/header'
import Footer from '../components/footer'

// Credit where credit is due
console.log(
  '%c Built with 🤟 by Chrish Dunne\nhttp://chrish.design/\n 👆👆👆👆👆👆👆👆👆👆👆👆👆',
  'background: #222; color: #bada55'
)

// Add Font Awesome brand icons globally
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
    let slug = this.state.story.full_slug
    let selectedProjects = this.state.story.content.selected_projects
    let credits = this.state.story.content.credits
    let parent_id = this.state.story.parent_id

    return (
      <Layout>
        <Header />
        <PageHeading pageName={name} pageData={content} pageSlug={slug} />
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
        <Credits who={credits} />
        {parent_id === 2875854 && (
          <SelectedProjects projects={selectedProjects} />
        )}
        <Footer />
      </Layout>
    )
  }
}

export default StoryblokEntry
