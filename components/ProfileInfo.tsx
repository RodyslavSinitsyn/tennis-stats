import React from 'react'
import { View } from 'react-native'
import { PlayerInfo } from '../model/Models'
import { ListItem, Text } from '@rneui/themed'

type Props = {
    playerInfo: PlayerInfo
}

const ProfileInfo = (props: Props) => {
    return (
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>{props.playerInfo.name}</ListItem.Title>
                <ListItem.Subtitle>Short matches details</ListItem.Subtitle>
                <Text>Win: {props.playerInfo.shortWinScore}</Text>
                <Text>Lose: {props.playerInfo.shortLoseScore}</Text>
                <Text>Coef: {props.playerInfo.getEffectiveCoefShort()}</Text>
                <ListItem.Subtitle>Long matches details</ListItem.Subtitle>
                <Text>{props.playerInfo.longWinScore}</Text>
                <Text>{props.playerInfo.shortWinScore}</Text>
                <Text>{props.playerInfo.getEffectiveCoefShort()}</Text>
                <Text>-------------------------------------------</Text>
            </ListItem.Content>
        </ListItem>
    )
}

export default ProfileInfo