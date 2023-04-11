import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TennisMatchList } from './components/TennisMatchList';
import { TennisMatchModel } from './model/Models';
import { CreateMatchForm } from './components/CreateMatchForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';


let MOCK_DATA = [
  new TennisMatchModel("Радик", 11, "Леша", 10),
  new TennisMatchModel("Папа", 11, "Леша", 5),
  new TennisMatchModel("Радик", 5, "Настя", 10),
  new TennisMatchModel("Радик", 7, "Леша", 11),
  new TennisMatchModel("Радик", 2, "Леша", 11),
  new TennisMatchModel("Папа", 11, "Анастасия Скутельникова", 7),
  new TennisMatchModel("Радик", 11, "Леша", 10),
  new TennisMatchModel("Папа", 11, "Леша", 5),
  new TennisMatchModel("Алексей Заякин", 5, "Настя", 10),
  new TennisMatchModel("Радик", 7, "Леша", 11),
  new TennisMatchModel("Настя", 11, "Папа", 10),
  new TennisMatchModel("Радик", 2, "Леша", 11),
  new TennisMatchModel("Папа", 11, "Настя", 7),
]

export default function App() {

  React.useEffect(() => {
    AsyncStorage.getItem('matches')
      .then((data: string) => JSON.parse(data))
      .then((arr: Array<TennisMatchModel>) => setItems(arr))
      .finally(() => console.log('Items restored.'))
  }, [])

  const [items, setItems] = React.useState<TennisMatchModel[]>([])

  React.useEffect(() => {
    console.log('Matches updated')
  }, [items])

  const formSubmitHandler = (match: TennisMatchModel) => {
    setItems(arr => [...arr, match])
    AsyncStorage.removeItem('matches')
      .finally(() => AsyncStorage.setItem('matches', JSON.stringify(items))
        .finally(() => console.log('Items persisted')))

  }

  return (
    <View style={MAIN_STYLES.container}>
      <CreateMatchForm onSubmit={formSubmitHandler} />
      <TennisMatchList matches={items} />
    </View>
  );
}

export const MAIN_STYLES = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center'
  }
})