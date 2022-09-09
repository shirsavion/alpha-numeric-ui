import React from 'react'
import styled from 'styled-components'
import InputRow from './InputRow'

const InputSection = ({resetError}) => {
    return (
        <Container>
            <InputRow resetError={resetError} />
            <InputRow resetError={resetError} />
        </Container>
    )
}

export default InputSection

const Container = styled.div`
    display: flex-column;
    width: 80%;
`
