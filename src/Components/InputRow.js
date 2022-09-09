import React from 'react'
import styled from 'styled-components'
import LinkInput from './LinkInput'
import YOUTUBE_ICON from '../assets/youtube_orange.png'
import PLUS from '../assets/plus.png'

const InputRow = () => {
    return (
        <LinkRow>
            <IconYT src={YOUTUBE_ICON} />
            <LinkInput />
            <SubmitButton>
                <PlusIcon src={PLUS} />
            </SubmitButton>
        </LinkRow>
    )
}

export default InputRow

const LinkRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const IconYT = styled.img`
    height: 70px;
    background: transparent;
`
const PlusIcon = styled(IconYT)`
    height: 50px;
    border-radius: 50px;
`
const SubmitButton = styled.button`
    border-radius: 20px;
    border-width: 0px;
    background: transparent;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
`
