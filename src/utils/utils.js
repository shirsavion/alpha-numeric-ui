import DONE from '../assets/done.png'
import FETCH from '../assets/fetch.png'
import MIX from '../assets/mix.png'
import ERROR from '../assets/error.png'
import {PROMPT_BY_REQUEST_STATUS} from '../app_constants'

export const IMAGE_BY_STATUS = {
    [PROMPT_BY_REQUEST_STATUS.PRE]: FETCH,
    [PROMPT_BY_REQUEST_STATUS.INIT]: FETCH,
    [PROMPT_BY_REQUEST_STATUS.IN_PROGRESS]: MIX,
    [PROMPT_BY_REQUEST_STATUS.DONE]: DONE,
    [PROMPT_BY_REQUEST_STATUS.ERROR]: ERROR,
}

const YOUTUBE_LINK_URL_CORE = 'youtu'

export const validateYoutubeLink = (url) => {
    console.log('validating url: ', url)
    if (!url || !url.includes(YOUTUBE_LINK_URL_CORE)) {
        return false
    }
    console.log('added url: ', url)
    return true
}
