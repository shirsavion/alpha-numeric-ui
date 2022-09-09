const YOUTUBE_LINK_URL_CORE = 'youtu'

export const validateYoutubeLink = (url) => {
    console.log('validating url: ', url)
    if (!url || !url.includes(YOUTUBE_LINK_URL_CORE)) {
        return false
    }
    console.log('added url: ', url)
    return true
}
