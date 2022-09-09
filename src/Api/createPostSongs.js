import {apiRoutes} from '../routes'
import axios from "axios"
import React from 'react'


export default function postSongs(urls) {
    axios.post(apiRoutes.postSongs, urls || 'checkcheckcheck').then((response) => {
        // debugger;
        console.log("[TAMIR] Im ok!" + response.data)
        return response.data
    }).catch((e)=> {
        console.error("[TAMIR] Im a error!" + e.message || e)
        return -1
    })
}
