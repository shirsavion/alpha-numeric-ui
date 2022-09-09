import React, {useContext, useState} from 'react'
import {InputContext} from '../App'
import styled from 'styled-components'
import Colors from '../Colors'
import LinkInput from './LinkInput'
import YOUTUBE_ICON from '../assets/youtube.png'
import PLUS from '../assets/plus.png'
import READY from '../assets/V.png'
import {validateYoutubeLink} from '../utils/utils'
import {YOUTUBE_BASE_URL} from '../app_constants'

const InputRow = ({url, setUrl, resetError}) => {
    const [link, setLink] = useState('')
    const [ready, setReady] = useState(false)

    const handleAddUrl = (e) => {
        e.preventDefault()
        resetError()
        console.log('handling event: ', e)
        if (validateYoutubeLink(link)) {
            setUrl(link)
            setReady(true)
        }
    }

    if (!ready)
        return (
            <LinkRow>
                <Link href={url ?? YOUTUBE_BASE_URL} target="_blank">
                    <IconYT src={YOUTUBE_ICON}></IconYT>
                </Link>
                <LinkInput
                    link={link}
                    url={url}
                    setLink={setLink}
                    submit={(e) => handleAddUrl(e)}
                />
                <SubmitButton onClick={(e) => handleAddUrl(e)}>
                    <PlusIcon src={PLUS} />
                </SubmitButton>
            </LinkRow>
        )
    return (
        <LinkRow>
            <IconYT src={YOUTUBE_ICON} />
            <LinkInput link={link} disabled />
            {/* <UrlReady /> */}
            <SubmitButton>
                <ReadyIcon src={READY} />
            </SubmitButton>
        </LinkRow>
    )
}

export default InputRow

const LinkRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`
const IconYT = styled.img`
    height: 70px;
    background: transparent;
`
const PlusIcon = styled(IconYT)``
const ReadyIcon = styled(IconYT)``
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
const UrlReady = styled.div`
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
const Link = styled.a``
