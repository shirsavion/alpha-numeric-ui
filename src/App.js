import React from 'react'
import LOGO from './assets/logo_medium.png'
import WAVEFORM from './assets/waveform.png'
import styled from 'styled-components'
import {useState, createContext} from 'react'
import Colors from './Colors'
import InputSection from './Components/InputSection'
import postSongs from './Api/createPostSongs'
import {DEFAULT_SETTINGS, ERROR_PROMPT} from './app_constants'
import SettingsButton from './Components/SettingsButton'
import SettingsArea from './Components/SettingsArea'
import MainBottomContainer from './Components/MainBottomContainer'
import MainUpperContainer from './Components/MainUpperContainer'

export const InputContext = createContext()

const App = () => {
    const [firstUrl, setFirstUrl] = useState(null)
    const [secondUrl, setSecondUrl] = useState(null)
    const [error, setError] = useState(null)
    const [ready, setReady] = useState(false)
    const [move, setMove] = useState(false)
    const [queryOptions, setQueryOptions] = useState(DEFAULT_SETTINGS)
    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false)

    const didInsertLinks = firstUrl && secondUrl

    const go = () => {
        if (didInsertLinks) {
            setMove(true)
            setReady(true)
            postSongs([firstUrl, secondUrl], queryOptions)
            if (error) {
                resetError()
            }
        } else {
            setError(ERROR_PROMPT)
        }
    }
    const resetError = () => {
        setError(null)
    }

    const doShowSettings = () => setShowAdvancedSettings(true)
    const dontShowSettings = () => setShowAdvancedSettings(false)

    return (
        <Container>
            <Page>
                <Logo src={LOGO} />
                <InputContext.Provider
                    value={{
                        firstUrl,
                        setFirstUrl,
                        secondUrl,
                        setSecondUrl,
                        queryOptions,
                        setQueryOptions,
                    }}>
                    <MainUpperContainer
                        error={error}
                        resetError={resetError}
                        isready={ready}
                        isShowSettings={showAdvancedSettings}
                        doShowSettings={doShowSettings}
                        dontShowSettings={dontShowSettings}
                    />
                    {/* {!showAdvancedSettings ? (
                        <InputSection resetError={resetError} />
                    ) : (
                        <SettingsArea save={() => dontShowSettings()} />
                    )}
                    {error && <ErrorArea>{error}</ErrorArea>}
                    {!showAdvancedSettings && !ready && (
                        <SettingsButton
                            onClick={doShowSettings}
                            text={ADVANCED_SETTINGS_TEXT}
                        />
                    )} */}
                </InputContext.Provider>

                <WaveForm src={WAVEFORM} move={move} />
                <MainBottomContainer
                    onClick={go}
                    isready={ready}
                    showSettings={showAdvancedSettings}
                />
            </Page>
        </Container>
    )
}

export default App

const Container = styled.div`
    width: 100vw;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #fffdd0;
    display: flex;
`
const Page = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    background-color: ${Colors.BLUE_NEW_BACKGROUND};
    padding: 2px;
    width: 40%;
    border-radius: 100px;
    align-items: center;
    justify-content: flex-start;
`
const Logo = styled.img`
    margin-top: 50px;
    // background: ${Colors.LIGHT_PURPLE_NEW};
`

const WaveForm = styled.img`
    height: 140px;
    width: 38vw;
    margin-top: 10px;
    margin-bottom: 10px;
    transform: rotate(0deg);
    transition: transform 100s ease-out;
    ${(props) =>
        props.move &&
        `
            transform: rotate(7200deg);
        `};
`
const ErrorArea = styled.div`
    text-color: ${Colors.RED}
    font-size: 24px;
`
