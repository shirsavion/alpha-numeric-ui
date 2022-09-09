import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'

const YOUTUBE_LINK = 'Paste your link HERE'

const LinkInput = () => {
    return <Input type="url" placeholder={YOUTUBE_LINK} />
}

export default LinkInput

const Input = styled.input`
    display: flex;
    margin: 10px;
    width: 400px;
    height: 50px;
    border-radius: 20px;
    border-width: 8px;
    background: ${Colors.LIGHT_GREY};
    border-color: ${Colors.RED};
`
