const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve(`./src/templates/storyblok-entry.js`)

    resolve(
      graphql(`
        {
          allStoryblokEntry {
            edges {
              node {
                id
                name
                created_at
                uuid
                slug
                full_slug
                content
                is_startpage
                parent_id
                group_id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.allStoryblokEntry.edges
        entries.forEach((entry, index) => {
          if (entry.node.full_slug == 'private-projects') {
            return null
          }
          let pagePath =
            entry.node.full_slug == 'home' ? '' : `${entry.node.full_slug}/`
          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node,
            },
          })
        })
      })
    )
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/private-projects/)) {
//     page.matchPath = `/private-projects/*`

//     // Update the page.
//     createPage(page)
//   }
// }
