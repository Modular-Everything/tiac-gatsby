// import { graphql, useStaticQuery } from 'gatsby'

export const isBrowser =
  typeof window !== 'undefined' && typeof window.EventTarget !== 'undefined'

const getUser = () =>
  window.localStorage.auth ? JSON.parse(window.localStorage.auth) : {}

const setUser = user => (window.localStorage.auth = JSON.stringify(user))

export const handleLogin = ({ password, match }) => {
  if (!isBrowser) return false

  if (password === match) {
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
