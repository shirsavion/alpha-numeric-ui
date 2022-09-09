import React from 'react'
import LOGO from './assets/logo_medium.png'
import GO from './assets/go.png'
import WAVEFORM from './assets/waveform.png'
import styled from 'styled-components'
import {useState, createContext} from 'react'
import Colors from './Colors'
import InputSection from './Components/InputSection'
import postSongs from "./Api/createPostSongs";
import pollUpdates from "./Api/pollUpdates";


export const InputContext = createContext()

const App = () => {
    // const [value, setValue] = useState(0)
    const [urls, setUrls] = useState([])
    const [error, setError] = useState(null)

    const clickToPost = (values) => {
        // postSongs(values)
        pollUpdates(values)
    }

    // const go = () => {
    //     if (urls?.length === NUMBER_OF_URLS_NEEDED) {
    //         // TODO: post urls
    //     } else {
    //         // setError('')
    //     }
    // }

    return (
        <Container>
            <Page>
                <Logo src={LOGO} />
                <InputContext.Provider value={{urls, setUrls}}>
                    <InputSection />
                </InputContext.Provider>
                {error ?? <WaveForm src={WAVEFORM} />}
                <BottomContainer>
                    <GoButton
                        onClick={(e) => clickToPost('id')}
                    >
                        <Go src={GO} />
                    </GoButton>
                </BottomContainer>
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
    width: 32%;
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
`
