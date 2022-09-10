// import {apiRoutes} from './routes'
// import axios from 'axios'
//
// const postSongs = (urls, queryOptions) => {
//     let state, trackingId
//     axios
//         .post(apiRoutes.postSongs, {
//             urls: urls,
//             advanced: queryOptions,
//         })
//         .then((response) => {
//             console.log("got response from post", response.data)
//             const {id: requestId, msg: status} = response?.data
//             state = status
//             trackingId = requestId
//         })
//         .catch((e) => {
//             console.error(e?.message || e)
//         })
//     console.log("state && trackingId", state, trackingId)
//     if (state && trackingId)
//         return {status: state, requestId: trackingId}
//     else
//         return false
// }
//
// export default postSongs
