import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <style type="text/css">{`
            :root {
              --sal-duration: 1500ms;
            }
          `}</style>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
