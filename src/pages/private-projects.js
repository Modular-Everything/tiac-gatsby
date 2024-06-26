import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import PrivateProjectsAuthd from '../components/private-projects/PrivateProjects'
import Login from '../components/private-projects/Login'
import PrivateRoute from '../components/PrivateRoute'
import { isLoggedIn, isBrowser } from '../utils/auth'
import { navigate } from 'gatsby'

const PrivateProjects = () => {
  if (!isBrowser) {
    return null
  }

  if (isLoggedIn()) {
    navigate(`/private-projects/list`)
  } else {
    navigate(`/private-projects/login`)
  }

  return (
    <Layout>
      <Router>
        <PrivateRoute
          path="/private-projects/list"
          component={PrivateProjectsAuthd}
        />
        <Login path="/private-projects/login" />
      </Router>
    </Layout>
  )
}

export default PrivateProjects
