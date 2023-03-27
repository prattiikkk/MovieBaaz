import React from 'react';
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])

import MovieDetails from './nav_bar/screens/MovieDetails';
import MainContainer from './nav_bar/MainContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
