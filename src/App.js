import React from 'react'
import LOGO from './assets/logo_medium.png'
import GO from './assets/go.png'
import WAVEFORM from './assets/waveform.png'
import styled from 'styled-components'
import {useState} from 'react'
import Colors from './Colors'
import InputSection from './Components/InputSection'

const App = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue((prev) => prev + 1)
    }

    return (
        <Container>
            <Page>
                <Logo src={LOGO} />
                <InputSection />
                <WaveForm src={WAVEFORM} />
                <BottomContainer>
                    <GoButton onClick={increment}>
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
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #fffdd0;
    display: flex;
`
const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.BLUE};
    width: 32vw;
    border-radius: 100px;
    height: 100vh;
    align-items: center;
    justify-content: flex-start;
`
const Logo = styled.img`
    margin-top: 100px;
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
    height: 150px;
    width: 38vw;
`
