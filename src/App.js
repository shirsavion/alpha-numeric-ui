import React from 'react'
import LOGO from './assets/logo_full.png'
import GO from './assets/go.png'
import styled from 'styled-components'
import {useState} from 'react'
import Colors from './Colors'

const App = () => {
    return (
        <Container>
            <Logo src={LOGO} />
            <GoButton>
                <Go src={GO} />
            </GoButton>
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
    justify-content: center;
`
const Logo = styled.img`
    height: 500px;
`
const Go = styled.img`
    height: 100px;
    width: 200px;
`
const GoButton = styled.button`
    background: transparent;
    border: 0px;
`
