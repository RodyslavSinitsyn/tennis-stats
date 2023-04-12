import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import 'react-native-gesture-handler';
import { TennisMatchModel } from './model/Models';
import { MatchesScreen } from './screens/Matches';
import { ProfileScreen } from './screens/Profile';
import { NewMatchScreen } from './screens/NewMatch';
import { StyleSheet, View } from 'react-native';

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

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Tab.Navigator initialRouteName='Profile'>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Matches" component={MatchesScreen} />
          <Tab.Screen name="NewMatch" component={NewMatchScreen} />
        </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export const MAIN_STYLES = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})