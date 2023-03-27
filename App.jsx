import React from 'react';
import { LogBox } from "react-native";
import { ImagePropTypes } from 'deprecated-react-native-prop-types';
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MovieDetails from './nav_bar/screens/MovieDetails';
import MainContainer from './nav_bar/MainContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './nav_bar/screens/HomeScreen';
import ProfileScreen from './nav_bar/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="mainContainer"
            component={MainContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="movieDetails"
            component={MovieDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    

  )
}


export default App;
