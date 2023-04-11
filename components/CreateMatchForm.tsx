import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput } from 'react-native'
import styled from 'styled-components/native'
import { TennisMatchModel } from '../model/Models'
import AsyncStorage from '@react-native-async-storage/async-storage';


type Props = {
    onSubmit: Function
}

const FormContainer = styled.View`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom-width: 3px;
    border-bottom-color: blue;
`

const InputsContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const CreateMatchForm = (props: Props) => {

    const [firstPlayer, setFirstPlayer] = React.useState('')
    const [firstScore, setFirstScore] = React.useState(0)
    const [secondScore, setSecondScore] = React.useState(0)
    const [secondPlayer, setSecondPlayer] = React.useState('')

    const handleClick = () => {
        const match = new TennisMatchModel(firstPlayer, firstScore, secondPlayer, secondScore)
        if (firstPlayer && secondPlayer && secondScore > 0 && firstScore > 0) {
            console.log(match)
            props.onSubmit(match)
        } else {
            console.error('Validation error')
        }
    }

    return (
        <FormContainer>
            <InputsContainer>
                <TextInput style={styles.inputField} placeholder='1st' onChangeText={text => setFirstPlayer(text)} />
                <TextInput keyboardType='numeric' style={styles.inputField} placeholder='0' onChangeText={num => setFirstScore(parseInt(num))} />
                <TextInput keyboardType='numeric' style={styles.inputField} placeholder='0' onChangeText={num => setSecondScore(parseInt(num))} />
                <TextInput style={styles.inputField} placeholder='2nd' onChangeText={text => setSecondPlayer(text)} />
            </InputsContainer>
            <Button title='Save' onPress={handleClick}/>
            {/* <Pressable style={styles.button} onPress={handleClick}>
                <Text style={styles.text}>Save</Text>
            </Pressable> */}
        </FormContainer>
    )
}

export const styles = StyleSheet.create({
    inputField: {
        fontSize: 25,
        borderBottomColor: 'blue',
        borderBottomWidth: 3
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})