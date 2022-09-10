import React from 'react'
import styled from 'styled-components'
import InputSection from './InputSection'
import SettingsArea from './SettingsArea'
import SettingsButton from './SettingsButton'
import {ADVANCED_SETTINGS_TEXT} from '../app_constants'
import PlayArea from './PlayArea'

const MainUpperContainer = ({
    error,
    resetError,
    isready,
    isShowSettings,
    doShowSettings,
    dontShowSettings,
}) => {
    console.log('isShowSettings', isShowSettings)
    console.log('doShowSettings', doShowSettings)
    console.log('dontShowSettings', dontShowSettings)
    console.log('isready', isready)

    if (isready) {
        return (
            <Container>
                <PlayArea />
            </Container>
        )
    }
    return (
        <Container>
            {!isShowSettings ? (
                <InputSection resetError={resetError} />
            ) : (
                <SettingsArea save={() => dontShowSettings()} />
            )}
            {error && <ErrorArea>{error}</ErrorArea>}
            {!isShowSettings && (
                <InnerContainer>
                    <SettingsButton
                        onClick={doShowSettings}
                        text={ADVANCED_SETTINGS_TEXT}
                    />
                </InnerContainer>
            )}
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
