import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const ghostClient = new GhostContentAPI({
  url: import.meta.env.GHOST_CONTENT_API_URL!,
  key: import.meta.env.GHOST_CONTENT_API_KEY!,
  version: 'v5.0',
})

export default ghostClient
