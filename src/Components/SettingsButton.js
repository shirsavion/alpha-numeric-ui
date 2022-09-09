import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'

const SettingsButton = ({showSettings, text, onClick}) => {
    return <AdvancedButton onClick={onClick}>{text}</AdvancedButton>
}

export default SettingsButton

const AdvancedButton = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border-width: 1px;
    background: ${Colors.LIGHT_PURPLE_NEW};
    margin-top: 10px;
    margin-bottom: -25px;
    color: ${Colors.YELLOW};
    align-self: center;
`
