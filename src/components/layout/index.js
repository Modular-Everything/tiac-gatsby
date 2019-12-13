import React from 'react'
import './tailwind.css'
import './layout.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <main>{children}</main>
      </>
    )
  }
}

export default Layout
