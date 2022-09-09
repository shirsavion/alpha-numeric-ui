import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'

const SettingInput = ({setting, setSetting}) => {
    return (
        <Form onSubmit={() => setSetting(setting)}>
            <label>
                <Input
                    onChange={(e) => setSetting(e.target.value)}
                    type="number"
                    value={setting}
                    placeholder={setting}
                />
            </label>
        </Form>
    )
}

export default SettingInput

const Input = styled.input`
    display: flex;
    margin: 10px;
    width: 200px;
    height: 50px;
    border-radius: 20px;
    border-width: 8px;
    background: ${Colors.LIGHT_GREY};
    border-color: ${Colors.TRANSPARENT_GREY};
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    color: ${Colors.BLUE};
    align-self: flex-end;
`
const Form = styled.form``
