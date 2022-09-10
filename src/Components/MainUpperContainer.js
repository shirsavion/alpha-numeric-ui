import React from 'react'
import styled from 'styled-components'
import {ADVANCED_SETTINGS_TEXT} from '../app_constants'
import InputSection from './InputSection'
import SettingsArea from './SettingsArea'
import SettingsButton from './SettingsButton'
import PlayArea from './PlayArea'

const MainUpperContainer = ({
    error,
    resetError,
    isready,
    isShowSettings,
    doShowSettings,
    dontShowSettings,
}) => {
    const ErrorRow = () => {
        return error ? <ErrorArea>{error}</ErrorArea> : null
    }

    if (isready) {
        return (
            <Container>
                <PlayArea />
            </Container>
        )
    }
    if (isShowSettings) {
        return (
            <Container>
                <SettingsArea save={() => dontShowSettings()} />
                <ErrorRow />
            </Container>
        )
    }
    return (
        <Container>
            <InputSection resetError={resetError} />
            <ErrorRow />
            <InnerContainer>
                <SettingsButton
                    onClick={doShowSettings}
                    text={ADVANCED_SETTINGS_TEXT}
                />
            </InnerContainer>
        </Container>
    )
}

export default MainUpperContainer

const Container = styled.div`
    display: flex-column;
    align-items: center;
    justify-content: center;
`
const InnerContainer = styled(Container)`
    display: flex;
`
const ErrorArea = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    color: black;
`
