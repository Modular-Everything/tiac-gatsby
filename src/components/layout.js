import React from 'react'
import Header from './header'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
