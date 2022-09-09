import React from 'react'
import styled from 'styled-components'

const InputSection = () => {
    return (
        <Container>
            <Input />
            <Input />
        </Container>
    )
}

const Container = styled.div`
    flex: column;
    padding: 10px;
`
const Input = styled.input`
    display: flex;
    margin: 10px;
    width: 400px;
    height: 50px;
    border-radius: 20px;
    background: ${Colors.LIGHT_GREY};
`
