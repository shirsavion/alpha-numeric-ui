import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'
import {useContext, useState} from 'react'
import {InputContext} from '../App'
import {YOUTUBE_LINK_PLACEHOLDER} from '../app_constants'
import {validateYoutubeLink} from '../utils/utils'

const LinkInput = () => {
    const {urls, setUrls} = useContext(InputContext)
    const [link, setLink] = useState(null)

    const addUrl = () => {
        console.log(link)
        if (validateYoutubeLink(link) && urls?.length < 2) {
            setUrls((prev) => [...prev, link])
        }
    }

    return (
        <Input
            onsubmit={addUrl}
            onChange={(e) => setLink(e.target.value)}
            type="url"
            placeholder={YOUTUBE_LINK_PLACEHOLDER}
        />
    )
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
    border-color: ${Colors.TRANSPARENT_GREY};
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: ${Colors.BLUE};
`
