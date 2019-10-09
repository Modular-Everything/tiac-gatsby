import React from 'react'

const ComponentNotFound = props => (
  <div>
    Component {props.blok.component} is not defined. Make sure it's added to{' '}
    <code>components.js</code>
  </div>
)

export default ComponentNotFound
