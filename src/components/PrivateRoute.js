import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../utils/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/private-projects/login`) {
    // If we’re not logged in, redirect to the login page.
    navigate(`/private-projects/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
