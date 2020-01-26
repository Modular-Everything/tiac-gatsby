const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allStoryblokEntry {
            edges {
              node {
                uuid
                full_slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const entries = result.data.allStoryblokEntry.edges

        entries.forEach(entry => {
          const pagePath =
            entry.node.full_slug === 'home' ? '' : `${entry.node.full_slug}/`

          createPage({
            path: `/${pagePath}`,
            component: path.resolve(`./src/pages/entry.js`),
            context: {
              STORY_ID: entry.node.uuid,
            },
          })
        })
      })
    )
  })
}
