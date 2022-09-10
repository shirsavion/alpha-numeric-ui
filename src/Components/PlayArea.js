import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import PlayButton from './PlayArea/PlayButton'
import PingButton from './PlayArea/PingButton'
import {InputContext} from '../App'
import pollUpdates from '../Api/pollUpdates'
import {PROMPT_BY_REQUEST_STATUS} from '../app_constants'

const PlayArea = () => {
    const {trackingId, setRequestStatus, requestStatus} =
        useContext(InputContext)

    const [audioResult, setAudioResult] = useState(null)
    const [error, setError] = useState(null)

    const canPlay = requestStatus === PROMPT_BY_REQUEST_STATUS.DONE

    const checkRequestStatus = () => {
        const response = pollUpdates(trackingId)
        if (response?.error) {
        }
        const {status, audio} = pollUpdates(trackingId)
        if (status === PROMPT_BY_REQUEST_STATUS.ERROR) {
            // TAMIR TODO: ERROR LOGIC
            setError(status)
        }
        if (status === PROMPT_BY_REQUEST_STATUS.DONE) {
            setAudioResult(audio)
        }
        setRequestStatus(status)
    }

    const playResult = () => audioResult?.play()

    return (
        <Container>
            <InnerContainer>
                {!canPlay ? <PingButton onclick={checkRequestStatus} /> : null}
                {canPlay ? <PlayButton onclick={playResult} /> : null}
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
