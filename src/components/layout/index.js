import React from 'react'
import Header from '../header'
import Footer from '../footer'
import './tailwind.css'
import './layout.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout
