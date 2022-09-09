import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'
import LinkInput from './LinkInput'
import YOUTUBE_ICON from '../assets/youtube.png'

const InputSection = () => {
    return (
        <Container>
            <LinkRow>
                <IconYT src={YOUTUBE_ICON} />
                <LinkInput />
            </LinkRow>
            <LinkRow>
                <IconYT src={YOUTUBE_ICON} />
                <LinkInput />
            </LinkRow>
        </Container>
    )
}

export default InputSection

const Container = styled.div`
    flex: column;
`
const LinkRow = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`
const IconYT = styled.img`
    height: 50px;
`
