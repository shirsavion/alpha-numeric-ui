import React, {useContext} from 'react'
import styled from 'styled-components'
import InputRow from './InputRow'
import {InputContext} from '../App'

const PlayArea = ({resetError}) => {
    const {firstUrl, setFirstUrl, secondUrl, setSecondUrl} =
        useContext(InputContext)

    return (
        <Container>
            <InputRow
                resetError={resetError}
                url={firstUrl}
                setUrl={setFirstUrl}
            />
            <InputRow
                resetError={resetError}
                url={secondUrl}
                setUrl={setSecondUrl}
            />
        </Container>
    )
}

export default PlayArea

const Container = styled.div`
    display: flex-column;
    align-items: center;
    justify-content: center;
`
