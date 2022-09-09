import {apiRoutes} from '../routes'
import axios from "axios"
import React from 'react'


export default function pollUpdates(songId) {
    axios.get(apiRoutes.pollUpdates).then((response) => { //Add songId to query
        if (response) {
            if (response.data?.isReady) {
                (response.data.file) // TODO: add logic to fix song
            }
            return (response.data.state)
        }
    }).catch((e) => {
        console.error("[TAMIR] Im a error!" + e.message || e)
    })
}
