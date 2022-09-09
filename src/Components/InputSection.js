import React from 'react'
import styled from 'styled-components'
import InputRow from './InputRow'

const InputSection = () => {
    return (
        <Container>
            <InputRow />
            <InputRow />
        </Container>
    )
}

export default InputSection

const Container = styled.div`
    display: flex-column;
    width: 80%;
`
