import React from 'react'
import './credits.css'

const Credits = props => {
  if (props.pageSlug === '51-53') {
    // console.log(props)
    // var credits = []

    // for (const [index, value] of props.credit) {
    //   credits.push(<li key={index}>{value.credit_name}</li>)
    // }

    return (
      <div className="bg-white py-6">
        <div className="credits container">
          <h2>Credits</h2>
          <ul>
            <li>
              <ul>
                <li className="credits__name">Andy Cooke</li>
                <li className="credits__role">Designer</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="credits__name">Andy Cooke</li>
                <li className="credits__role">Designer</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="credits__name">Andy Cooke</li>
                <li className="credits__role">Designer</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="credits__name">Andy Cooke</li>
                <li className="credits__role">Designer</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Credits
