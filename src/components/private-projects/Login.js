import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby'
import { isLoggedIn, handleLogin } from '../../utils/auth'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { Helmet } from 'react-helmet'
import Lock from '../../images/lock.svg'

const Login = () => {
  const [showPasswordField, setShowPasswordField] = React.useState(false)
  const [password, setPassword] = React.useState('')

  if (isLoggedIn()) {
    navigate(`/private-projects/list`)
  }

  const data = useStaticQuery(
    graphql`
      query PrivateProjectsLogin {
        pwd: allStoryblokEntry(filter: { slug: { eq: "globals" } }) {
          edges {
            node {
              field_password_string
            }
          }
        }
      }
    `
  )

  const match =
    data.pwd.edges[0].node.field_password_string || 'set_your_password'

  return (
    <Layout>
      <Header />
      <Helmet>
        <meta name={`robots`} content={`noindex, nofollow`} />
      </Helmet>

      <div className="w-full h-login -mt-20 flex items-center justify-center">
        {showPasswordField ? (
          <div>
            <form
              onSubmit={() => handleLogin({ password, match })}
              className="flex space-x-4"
            >
              <input
                type="password"
                className="w-64 pt-5 p-4 rounded"
                onChange={e => setPassword(e.currentTarget.value)}
              />
              <button
                className="w-full text-center justify-center text-xs text-white bg-brand-pink rounded p-4 pt-5 flex flex-row items-center hover:bg-brand-black transition-colors"
                type="submit"
              >
                Unlock
              </button>
            </form>
          </div>
        ) : (
          <button
            type="button"
            className="text-xs text-white bg-brand-pink rounded p-4 pt-5 flex flex-row items-center hover:bg-brand-black transition-colors"
            onClick={() => setShowPasswordField(true)}
          >
            Reveal Hidden Projects
            <span className="w-4 h-4 ml-2 -mt-1">
              <img src={Lock} alt="Unlock" />
            </span>
          </button>
        )}
      </div>
    </Layout>
  )
}

export default Login
