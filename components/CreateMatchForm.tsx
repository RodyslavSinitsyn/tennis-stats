import { Button, CheckBox, Input, ListItem } from '@rneui/themed';
import React from 'react';
import { Alert } from 'react-native';
import { TennisMatchModel } from '../model/Models';

type Props = {
    onSubmit: Function
}

export const CreateMatchForm = (props: Props) => {

    const [firstPlayer, setFirstPlayer] = React.useState('')
    const [firstScore, setFirstScore] = React.useState(0)
    const [secondScore, setSecondScore] = React.useState(0)
    const [secondPlayer, setSecondPlayer] = React.useState('')
    const [longMatch, setLongMatch] = React.useState(false)

    const [warnVisible, setWarnVisible] = React.useState(false)

    const handleSubmit = () => {
        const minScore = longMatch ? 21 : 11
        const match = new TennisMatchModel(firstPlayer, firstScore, secondPlayer, secondScore)
        if (firstPlayer && secondPlayer &&
            (secondScore === minScore || firstScore === minScore)) {
            setFirstPlayer('')
            setFirstScore(0)
            setSecondScore(0)
            setSecondPlayer('')
            props.onSubmit(match)
        } else {
            setWarnVisible(true)
        }
    }

    if (warnVisible) {
        Alert.alert('Warning', 'Match details not completed', [
            {
                text: 'OK',
                onPress: () => setWarnVisible(false)
            }
        ])
    }

    return (

        <ListItem.Content>
            <ListItem.Title>Create new Tennis Match</ListItem.Title>
            <Input placeholder='Player 1' value={firstPlayer} onChangeText={text => setFirstPlayer(text)} />
            <Input keyboardType='numeric' value={firstScore.toString()} placeholder='0' onChangeText={num => setFirstScore(parseInt(num))} />
            <Input keyboardType='numeric' value={secondScore.toString()} placeholder='0' onChangeText={num => setSecondScore(parseInt(num))} />
            <Input placeholder='Player 2' value={secondPlayer} onChangeText={text => setSecondPlayer(text)} />
            <CheckBox checked={longMatch} size={32} title='Длинная партия' onPress={() => setLongMatch(v => !v)} />
            <Button title='Save' onPress={handleSubmit} />
        </ListItem.Content>
    )
}