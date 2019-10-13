import React from 'react'
import SbEditable from 'storyblok-react'
import * as markdownit from 'markdown-it'
import './markdown.css'

const Markdown = props => {
  console.table(props.blok)

  const md = markdownit()
  md.use(require('markdown-it-highlightjs'))
  const htmlContent = md.render(props.blok.copy)

  return (
    <SbEditable content={props.blok}>
      <div
        className="md container"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </SbEditable>
  )
}

export default Markdown
