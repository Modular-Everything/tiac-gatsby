// import { graphql, useStaticQuery } from 'gatsby'

const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.auth ? JSON.parse(window.localStorage.auth) : {}

const setUser = user => (window.localStorage.auth = JSON.stringify(user))

export const handleLogin = ({ password, match }) => {
  if (!isBrowser) return false

  if (password === match) {
    window.location.reload()
    return setUser({
      loggedIn: true,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.loggedIn
}
