import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import { TennisMatchModel } from '../model/Models'

const TennisMatchContainer = styled.View`
    padding: 10px;
    margin: 5px;
    width: 90%;
    border-bottom-color: black;
    border-bottom-style: solid;
    border-bottom-width: 2px;

    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`

const TennisMatchText = styled.Text`
    font-size: 25px;
    font-weight: normal;
    color: black;
`

type Props = {
    match: TennisMatchModel
}


export const TennisMatch = (props: Props) => {

    const subName = (username: string) => {
        return username.length > 5
            ? username.substring(0, 5).concat(".")
            : username
    }

    return (
        <>

            <TennisMatchContainer>
                <TennisMatchText>{subName(props.match.leftPlayer)}</TennisMatchText>
                <TennisMatchText>{props.match.leftScore}</TennisMatchText>
                <TennisMatchText> : </TennisMatchText>
                <TennisMatchText>{props.match.rightScore}</TennisMatchText>
                <TennisMatchText>{subName(props.match.rightPlayer)}</TennisMatchText>
            </TennisMatchContainer>

        </>
    )
}