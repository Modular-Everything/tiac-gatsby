import React from 'react'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import Components from '../components/components'
import PageHeading from '../components/page-heading'
import SelectedProjects from '../components/selected-projects'
import Credits from '../components/credits'
import Header from '../components/header'
import Footer from '../components/footer'

// Credit where credit is due
/* eslint no-console: "off" */
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
    const story = { ...props.pageContext.story }
    story.content = JSON.parse(story.content)

    return { story }
  }

  constructor(props) {
    super()
    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    const { story } = this.state
    const { name, content } = story
    const slug = story.full_slug
    const selectedProjects = story.content.selected_projects
    const { credits } = story.content

    return (
      <Layout>
        <Header />
        <PageHeading pageName={name} pageData={content} pageSlug={slug} />
        {React.createElement(Components(content.component), {
          key: content.uid,
          blok: content,
        })}
        <Credits who={credits} />
        <SelectedProjects projects={selectedProjects} />
        <Footer />
      </Layout>
    )
  }
}

export default StoryblokEntry

StoryblokEntry.propTypes = {
  pageContext: PropTypes.shape({
    story: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
    }),
  }).isRequired,
}
