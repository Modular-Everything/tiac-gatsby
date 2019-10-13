import React from 'react'

const ComponentNotFound = props => (
  <div className="container border border-dashed border-red-600 bg-red-100 my-6 py-6">
    Component {props.blok.component} is not defined. Make sure it's added to{' '}
    <code className="text-red-800">components.js</code>
  </div>
)

export default ComponentNotFound
