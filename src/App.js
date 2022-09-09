import React from 'react'
import LOGO from './assets/logo_medium.png'
import GO from './assets/go.png'
import WAVEFORM from './assets/waveform.png'
import styled from 'styled-components'
import {useState, createContext} from 'react'
import Colors from './Colors'
import InputSection from './Components/InputSection'
import postSongs from './Api/createPostSongs'
import {ERROR_PROMPT, NUMBER_OF_URLS_NEEDED} from './app_constants'
import LOADING from './assets/loading.png'

export const InputContext = createContext()

const App = () => {
    const [urls, setUrls] = useState([])
    const [error, setError] = useState(null)
    const [ready, setReady] = useState(false)
    const [move, setMove] = useState(false)

    const go = () => {
        if (urls?.length === NUMBER_OF_URLS_NEEDED) {
            setMove(true)
            setReady(true)
            postSongs(urls)
            console.log('SENT HTTP REQUEST')
            if (error) {
                setError(null)
            }
        } else {
            setError(ERROR_PROMPT)
        }
    }
    const resetError = () => {
        setError(null)
    }

    console.log(urls)

    return (
        <Container>
            <Page>
                <Logo src={LOGO} />
                <InputContext.Provider value={{urls, setUrls}}>
                    <InputSection resetError={resetError} />
                </InputContext.Provider>
                {error && <ErrorArea>{error}</ErrorArea>}
                <WaveForm src={WAVEFORM} move={move} />
                {!ready ? (
                    <BottomContainer>
                        <GoButton onClick={go}>
                            <Go src={GO} />
                        </GoButton>
                    </BottomContainer>
                ) : (
                    <BottomContainer>
                        <Loading src={LOADING} />
                    </BottomContainer>
                )}
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
const Go = styled.img`
    height: 200px;
`
const Loading = styled(Go)``
const GoButton = styled.button`
    background: transparent;
    height: 200px;
    border: 0px;
    margin-top: -30px;
`
const BottomContainer = styled.div``
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
    font-size: 24px;`
