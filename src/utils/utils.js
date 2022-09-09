const YOUTUBE_LINK_URL_PREFIX = 'https://youtu'

export const validateYoutubeLink = (url) => {
    if (!url || !url.startsWith(YOUTUBE_LINK_URL_PREFIX)) {
        return false
    }
    return true
}
