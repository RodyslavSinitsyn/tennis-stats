import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text } from '@rneui/themed'
import React from 'react'
import { TennisMatchModel } from '../model/Models'
import { TennisMatchList } from '../components/TennisMatchList'
import { StorageApi } from '../service/StorageApi'
import { useIsFocused } from '@react-navigation/native'

const storageApi = new StorageApi()

type Props = {}

export const MatchesScreen = (props: Props) => {

    const [items, setItems] = React.useState<TennisMatchModel[]>([])
    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (!isFocused) return
        storageApi.getMatches()
            .then((arr: TennisMatchModel[]) => setItems(arr))
            .finally(() => console.log('Items restored.'))
    }, [isFocused])

    return (
        <TennisMatchList matches={items} />
    )
}