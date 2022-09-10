import {apiRoutes} from './routes'
import axios from 'axios'

const postSongs = (urls, queryOptions) => {
    axios.post(apiRoutes.dummyPost, {
        urls: urls,
        advanced: queryOptions}
    )
        .then((response) => {
            const {requestId, msg: status} = response?.data
            return {status , requestId}
    }
    ).catch((e) => {
        console.error(e?.message || e)
    })
}

    //     axios({
//         method: 'post',
//         url: apiRoutes.dummyPost,
//         headers: {},
//         data: {
//             urls: urls,
//             advanced: queryOptions,
//         },
//     })
//         .then((response) => {
//             console.log('[TAMIR] Im ok!' + response.data)
//             return response.data
//         })
//         .catch((e) => {
//             console.error('[TAMIR] Im a error!' + e.message || e)
//             return -1
//         })
// }
export default postSongs
