import React from 'react'
import { graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Components from '../components/components.js'
import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import SelectedProjects from '../components/selected-projects'
import Credits from '../components/credits'
import Header from '../components/header'
import PrevNext from '../components/prev-next-projects'
import FooterNavigation from '../components/footer-navigation'
import Footer from '../components/footer'

// Credit where credit is due
console.log(
  '%c Built with 🤟 by Chrish Dunne\nhttps://modular-everything.com/\n 👆👆👆👆👆👆👆👆👆👆👆👆👆',
  'background: #9FF1FF; color: #141414'
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
    const name = this.state.story.name
    const content = this.state.story.content
    const slug = this.state.story.full_slug
    const selectedProjects = this.state.story.content.selected_projects
    const credits = this.state.story.content.credits
    const parent_id = this.state.story.parent_id

    const projects = this.props.data.allStoryblokEntry.edges
    const currentProject = projects.findIndex(
      ({ node }) => node.full_slug === slug
    )
    const prevProject = currentProject - 1
    const nextProject = currentProject + 1

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
          <>
            <PrevNext
              prev={projects[prevProject]}
              next={projects[nextProject]}
            />
            <SelectedProjects projects={selectedProjects} />
            <FooterNavigation />
          </>
        )}
        <Footer />
      </Layout>
    )
  }
}

export const data = graphql`
  query ProjectPages {
    allStoryblokEntry(filter: { parent_id: { eq: 2875854 } }) {
      edges {
        node {
          name
          field_cover_string
          full_slug
        }
      }
    }
  }
`

export default StoryblokEntry
