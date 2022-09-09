import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'
import {YOUTUBE_LINK_PLACEHOLDER} from '../app_constants'

const LinkInput = ({link, setLink, submit, disabled}) => {
    return (
        <Form onSubmit={submit}>
            <label>
                <Input
                    onChange={(e) => setLink(e.target.value)}
                    type="url"
                    value={link}
                    placeholder={YOUTUBE_LINK_PLACEHOLDER}
                    disabled={disabled}
                />
            </label>
        </Form>
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
const Form = styled.form``
