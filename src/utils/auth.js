const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.auth ? JSON.parse(window.localStorage.auth) : {}

const setUser = user => (window.localStorage.auth = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (password === `demo`) {
    console.log(`Credentials match! Setting the active user.`)
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
