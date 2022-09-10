import {apiRoutes} from './routes'
import axios from 'axios'

const postSongs = (urls, queryOptions) => {
    axios
        .post(apiRoutes.dummyPost, {
            urls: urls,
            advanced: queryOptions,
        })
        .then((response) => {
            const {requestId, msg: status} = response?.data
            return {status, requestId}
        })
        .catch((e) => {
            console.error(e?.message || e)
        })
}

export default postSongs
