import React, { Component } from 'react'
import SbEditable from 'storyblok-react'
import Components from '../components/components'
import config from '../../gatsby-config'

import Layout from '../components/layout'

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === 'gatsby-source-storyblok'
})
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

const loadStoryblokBridge = function loadStoryblokBridge(cb) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

class StoryblokEntry extends Component {
  constructor(props) {
    super(props)
    this.state = { story: null }
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents()
    })
  }

  loadStory() {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam('path'),
        version: 'draft',
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        this.setState({ story: data.story })
      }
    )
  }

  initStoryblokEvents() {
    this.loadStory()

    const sb = window.storyblok

    sb.on(['change', 'published'], () => {
      this.loadStory()
    })

    sb.on('input', payload => {
      const { story } = this.state
      if (story && payload.story.id === story.id) {
        const storyPayload = payload
        storyPayload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        )
        this.setState({ story: payload.story })
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    const { story } = this.state
    if (story == null) {
      return null
    }

    const { content } = story

    return (
      <Layout>
        <SbEditable content={content}>
          <>
            {React.createElement(Components(content.component), {
              key: content.uid,
              blok: content,
            })}
          </>
        </SbEditable>
      </Layout>
    )
  }
}

export default StoryblokEntry
