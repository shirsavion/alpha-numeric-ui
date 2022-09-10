// import {apiRoutes} from './routes'
// import axios from 'axios'
// import postSongs from './createPostSongs'
// import {PROMPT_BY_REQUEST_STATUS} from "../app_constants";
//
// const pollUpdates = (requestId) => {
//     let state
//     let finalResult = null
//     axios
//         .get(apiRoutes.pollUpdates + requestId)
//         .then((response) => {
//             if (response) {
//                 console.log("got response from get", response.data)
//                 const status = response?.data?.state
//                 let audio = null
//                 if (response.data?.isReady) {
//                     const song = response.data?.file64
//                     audio = new Audio('data:audio/wav;base64,' + song)
//                     state = status
//                     finalResult = audio?.error ? null : audio
//                 }
//             }
//         })
//         .catch((e) => {
//             console.error(e?.message || e)
//             state =  PROMPT_BY_REQUEST_STATUS.ERROR
//         })
//     return {status: state, audio: finalResult}
// }
// export default pollUpdates
