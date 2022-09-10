import {apiRoutes} from '../routes'
import axios from "axios"
import React from 'react'


export default function pollUpdates(songId) {
    axios.get(apiRoutes.pollUpdates + songId ).then((response) => { //Add songId to query
        if (response) {
            if (response.data?.isReady) {
                const song = response.data?.file64
                var snd = new Audio("data:audio/wav;base64," + song);
                snd.play();
            }
            return (response.data.state)
        }
    }).catch((e) => {
        console.error("[TAMIR] Im a error!" + e.message || e)
    })
}
