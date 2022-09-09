import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import Colors from '../Colors'
import SettingInput from './SettingInput'
import {DEFAULT_SETTINGS} from '../app_constants'
import {InputContext} from '../App'
import SettingsButton from './SettingsButton'

const SUBMIT = 'SAVE ADVANCED SETTINGS'

const SettingsArea = ({save}) => {
    const {setQueryOptions} = useContext(InputContext)
    const [generations, setGenerations] = useState(DEFAULT_SETTINGS.generations)
    const [population, setPopulation] = useState(DEFAULT_SETTINGS.population)
    const [selection, setSelection] = useState(DEFAULT_SETTINGS.selection)
    const [mutation, setMutation] = useState(DEFAULT_SETTINGS.mutation)
    const [crossover, setCrossover] = useState(DEFAULT_SETTINGS.crossover)

    const submit = () => {
        save()
        setQueryOptions({
            generations,
            population,
            selection,
            mutation,
            crossover,
        })
    }
    return (
        <Container>
            <SettingInput setting={generations} setSetting={setGenerations} />
            <SettingInput setting={population} setSetting={setPopulation} />
            <SettingInput setting={selection} setSetting={setSelection} />
            <SettingInput setting={mutation} setSetting={setMutation} />
            <SettingInput setting={crossover} setSetting={setCrossover} />
            <SettingsButton onClick={submit} text={SUBMIT}></SettingsButton>
        </Container>
    )
}

export default SettingsArea

const Container = styled.div`
    display: grid;
`
const AdvancedButton = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border-width: 1px;
    background: ${Colors.LIGHT_PURPLE_NEW};
    margin-top: 10px;
    margin-bottom: -25px;
    color: ${Colors.YELLOW};
`
