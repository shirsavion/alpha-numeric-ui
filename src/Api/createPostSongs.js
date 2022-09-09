import {apiRoutes} from '../routes'
import axios from 'axios'

export default function postSongs(urls) {
    axios
        .post(apiRoutes.dummyPost, urls || 'checkcheckcheck')
        .then((response) => {
            // debugger;
            console.log('[TAMIR] Im ok!' + response.data)
            return response.data
        })
        .catch((e) => {
            console.error('[TAMIR] Im a error!' + e.message || e)
            return -1
        })
}
