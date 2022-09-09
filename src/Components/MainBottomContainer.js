import React from 'react'
import styled from 'styled-components'
import GO from '../assets/go.png'
import LOADING from '../assets/loading.png'

const MainBottomContainer = ({onClick, isready, showSettings}) => {
    if (isready) {
        return (
            <BottomContainer>
                <Loading src={LOADING} />
            </BottomContainer>
        )
    }
    if (!showSettings) {
        return (
            <BottomContainer>
                <GoButton onClick={onClick}>
                    <Go src={GO} />
                </GoButton>
            </BottomContainer>
        )
    }
    return null
}

export default MainBottomContainer

const BottomContainer = styled.div``

const Go = styled.img`
    height: 200px;
`
const GoButton = styled.button`
    background: transparent;
    height: 200px;
    border: 0px;
    margin-top: -30px;
`
const Loading = styled(Go)``
