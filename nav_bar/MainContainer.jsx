import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SeachScreen';

const homeScreen = "Home";
const searchScreen = "Search";
const profileScreen = "Profile";

const Tab = createBottomTabNavigator();

const MainContainer = props => {

	return (
			<Tab.Navigator
				initialRouteName={homeScreen}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName = "hi";

						if (route.name === homeScreen) {
							iconName = focused
								? 'ios-home'
								: 'ios-home-outline';
						} else if (route.name === searchScreen) {
							iconName = focused
								? 'ios-search'
								: 'ios-search-outline'
						} else if (route.name === profileScreen) {
							iconName = focused
								? 'ios-person'
								: 'ios-person-outline'
						}

						return <Ionicons name={iconName} color={color} size={size} />
					},
					tabBarActiveTintColor: 'rgb(86, 135, 153)',
					tabBarInactiveTintColor: 'gray',
					tabBarStyle: {backgroundColor: 'rgb(1, 19, 26)'}
				})}
			>
				<Tab.Screen name={homeScreen} component={HomeScreen} options={{ headerShown: false }} />
				<Tab.Screen name={searchScreen} component={SearchScreen} options={{ headerShown: false }} navigation={props.navigation}/>
				<Tab.Screen name={profileScreen} component={ProfileScreen} options={{ headerShown: false }} />
			</Tab.Navigator>
	)
}

export default MainContainer;