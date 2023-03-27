import React from 'react';
import {  ScrollView } from 'react-native';
import Header from '../components/Header';
import Popular from '../components/Popular';
import Top from '../components/Top';
import Trending from '../components/Trending';

const HomeScreen = props => {
console.log(props.toString());

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
			<Header />
			<Top navigation={props.navigation}/>
			<Trending navigation={props.navigation}/>
			<Popular navigation={props.navigation}/>
		</ScrollView>

	);

}

export default HomeScreen;