import { Text } from '@rneui/themed'
import React from 'react'
import { FlatList } from 'react-native'
import { PlayerInfo } from '../model/Models'
import ProfileInfo from '../components/ProfileInfo'
import { useIsFocused } from '@react-navigation/native'
import { StorageApi } from '../service/StorageApi'


type Props = {}

const storageApi = new StorageApi()

export const ProfileScreen = (props: Props) => {

  const [items, setItems] = React.useState<PlayerInfo[]>([])
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) return
    storageApi.getPlayersDetails()
      .then((arr: PlayerInfo[]) => {
        setItems(arr)
      })
  }, [isFocused])

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ProfileInfo playerInfo={item} />}
    />
  )
}