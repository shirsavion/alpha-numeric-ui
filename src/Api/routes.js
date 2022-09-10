const ENV = 'dev'
const HOST = ENV === 'dev' ? 'http://0.0.0.0:8080/' : 'later'

export const apiRoutes = {
    // TODO: valid with roi
    pollUpdates: `${HOST}/pollForUpdates/`,
    PostSongs: `${HOST}/addSongsFromUrl`,
    dummyPost: `${HOST}/postSongs`,
}
