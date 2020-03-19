import React, { useState, useEffect, useCallback } from 'react'
import config from '../../gatsby-config'
import StoryblokComponents from '../components/components'

// ============================================================================

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === `gatsby-source-storyblok`
})
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

// ============================================================================

const LoadStoryblokBridge = cb => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

// ============================================================================

const StoryblokEntry = () => {
  const [story, setStory] = useState()

  const loadStory = useCallback(() => {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam(`path`),
        version: `draft`,
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        setStory(data.story)
      }
    )
  })

  const initStoryblokEvents = useCallback(() => {
    loadStory()

    const sb = window.storyblok

    sb.on(['change', 'published'], () => {
      loadStory()
    })

    sb.on(['input'], payload => {
      const pl = payload
      pl.story.content = sb.addComments(pl.story.content, pl.story.id)
      setStory(payload.story)
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }, [loadStory, story])

  useEffect(() => {
    LoadStoryblokBridge(() => {
      initStoryblokEvents()
    })
  }, [])

  if (!story) {
    return <div />
  }

  const { content } = story

  return (
    <>
      {React.createElement(StoryblokComponents(content.component), {
        // eslint-disable-next-line no-underscore-dangle
        key: content._uid,
        blok: content,
      })}
    </>
  )
}

// ============================================================================

export default StoryblokEntry
