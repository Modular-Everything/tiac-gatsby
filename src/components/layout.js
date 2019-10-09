import React from 'react'
import { Link } from 'gatsby'
import Header from './header'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
