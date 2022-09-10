import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import PlayButton from './PlayArea/PlayButton'
import PingButton from './PlayArea/PingButton'
import {InputContext} from '../App'
import {PROMPT_BY_REQUEST_STATUS} from '../app_constants'
import axios from "axios";
import {apiRoutes} from "../Api/routes";

const PlayArea = () => {
    const {trackingId, setRequestStatus, requestStatus} =
        useContext(InputContext)
    console.log(trackingId)
    const [audioResult, setAudioResult] = useState(null)
    const [error, setError] = useState(null)

    const canPlay = requestStatus === PROMPT_BY_REQUEST_STATUS.DONE && audioResult

    const pollUpdates = () => {
        axios
            .get(apiRoutes.pollUpdates + trackingId)
            .then((response) => {
                    console.log("got response from get", response.data)
                    const status = response?.data?.status
                    if (response.data?.isReady && response.data?.file64) {
                        const song = response.data?.file64
                        const audio = new Audio('data:audio/wav;base64,' + song)
                        setAudioResult(audio)
                    }
                    setRequestStatus(status)
                    if (status === PROMPT_BY_REQUEST_STATUS.ERROR) {
                        setError(status)
                    }
            })
    }

    const checkRequestStatus = () => {
        pollUpdates()
    }

    const playResult = () => audioResult?.play()

    return (
        <Container>
            <InnerContainer>
                {!canPlay ? <PingButton onclick={checkRequestStatus}/> : null}
                {canPlay ? <PlayButton onclick={playResult}/> : null}
            </InnerContainer>
            <StatusUpdate>{error ?? requestStatus}</StatusUpdate>
        </Container>
    )
}

export default PlayArea

const Container = styled.div`
    align-items: center;
    justify-content: space-around;
`
const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`
const StatusUpdate = styled.div`
    font-size: 28px;
    color: black;
    align-content: center;
    text-align: center;
    font-style: italic;
`
