import {apiRoutes} from '../routes'
import axios from 'axios'

export default function postSongs(urls, queryOptions) {
    axios({
        method: 'post',
        url: apiRoutes.dummyPost,
        headers: {},
        data: {
            urls: urls,
            advanced: queryOptions
        }
    }).then((response) => {
        console.log('[TAMIR] Im ok!' + response.data)
        return response.data
    })
        .catch((e) => {
            console.error('[TAMIR] Im a error!' + e.message || e)
            return -1
        })
}
