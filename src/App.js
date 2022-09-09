import React from 'react'
import LOGO from './assets/logo_medium.png'
import GO from './assets/go.png'
import WAVEFORM from './assets/waveform.png'
import styled from 'styled-components'
import {useState} from 'react'
import Colors from './Colors'

const App = () => {
    return (
        <Container>
            <Logo src={LOGO} />
            <InputSection>
                <Input />
                <Input />
            </InputSection>
            <WaveForm src={WAVEFORM} />
            <BottomContainer>
                <GoButton>
                    <Go src={GO} />
                </GoButton>
            </BottomContainer>
        </Container>
    )
}

export default App

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.BLUE};
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: flex-start;
`
const Logo = styled.img`
    margin-top: 100px;
    margin-bottom: 50;
    // background: ${Colors.LIGHT_PURPLE_NEW};
`
const Go = styled.img`
    height: 150px;
    width: 300px;
`
const GoButton = styled.button`
    background: transparent;
    border: 0px;
`
const BottomContainer = styled.div``
const WaveForm = styled.img`
    margin-top: 50px;
    margin-bottom: 20px;
`
const InputSection = styled.div`
    flex: column;
    padding: 10px;
`
const Input = styled.input`
    display: flex;
    margin: 10px;
    width: 400px;
    height: 50px;
    border-radius: 20px;
    background: ${Colors.LIGHT_GREY};
`
