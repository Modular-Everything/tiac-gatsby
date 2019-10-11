import React from 'react'
import Header from '../header'
import './tailwind.css'
import './layout.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    )
  }
}

export default Layout
