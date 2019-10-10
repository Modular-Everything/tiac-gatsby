import React from 'react'
import './tailwind.css'
import Header from '../header'

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
