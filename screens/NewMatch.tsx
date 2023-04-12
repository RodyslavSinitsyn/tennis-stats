import { Text } from '@rneui/themed'
import React from 'react'
import { CreateMatchForm } from '../components/CreateMatchForm'
import { StorageApi } from '../service/StorageApi'
import { TennisMatchModel } from '../model/Models'

const storageApi = new StorageApi()

type Props = {
    navigation: any
}

export const NewMatchScreen = (props: Props) => {

    const formSubmitHandler = (match: TennisMatchModel) => {
        storageApi.addMatch(match)
            .then(() => props.navigation.navigate('Matches'))
    }

    return (
        <CreateMatchForm onSubmit={formSubmitHandler} />
    )
}