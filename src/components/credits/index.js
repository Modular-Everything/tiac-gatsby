import React from 'react'
import './credits.css'

const Credits = props => {
  if (typeof props.who !== 'undefined') {
    if (props.who.length !== 0) {
      var credits = []
      for (const [index, value] of props.who.entries()) {
        credits.push(
          <li key={index}>
            <ul>
              <li className="credits__name">{value.credit.credit_name}</li>
              <li className="credits__role">{value.credit.credit_role}</li>
            </ul>
          </li>
        )
      }

      return (
        <div className="bg-white py-12">
          <div className="credits container">
            <h2>Credits</h2>
            <ul>{credits}</ul>
          </div>
        </div>
      )
    } else {
      return null
    }
  } else {
    return null
  }
}

export default Credits
