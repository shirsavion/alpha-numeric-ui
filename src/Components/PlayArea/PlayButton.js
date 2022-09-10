import React from 'react'
import styled from 'styled-components'
import PLAY from '../../assets/play.png'

const PlayButton = ({onclick}) => {
    return (
        <Container onClick={onclick}>
            <Icon src={PLAY} />
        </Container>
    )
}

export default PlayButton

const Container = styled.button`
    border-radius: 20px;
    border-width: 0px;
    background: transparent;
    align-items: center;
    justify-content: center;
`
const Icon = styled.img`
    height: 150px;
    border-radius: 150px;
`
