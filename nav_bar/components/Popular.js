import React, { useEffect, useState} from 'react'
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native'
import { IMAGE_URL } from '../config/config'
import { GET } from '../services/API'
import { styles } from '../style/style'

export var Data;

export const Popular = props => {
	const [images, setImages] = useState([])

	useEffect(() => {
		const getPopularMovies = async () => {
			const response = await GET('/movie/popular')
			setImages(response.results)
		}

		getPopularMovies()
	}, [])

	Data = '315162'

	return (
		<View style={styles.sliderContainer}>
			<Text style={styles.sectionHeading}>Most popular movies</Text>
			<FlatList 
				style={styles.flatList}
				data={images}
				keyExtractor={item => item.id}
				horizontal
				renderItem={item => displayImages(item, props)}	
			/>
		</View>
	)
}

const displayImages = ({item}, props) => {
	return (
		<TouchableOpacity
		onPress={() => {
			props.navigation.navigate('movieDetails', {movieId:item.id})
		}}
		>
			<Image 
				style={styles.sliderImage}
				source={{uri: `${IMAGE_URL}${item.backdrop_path}`}}
			/>

			<Text style={styles.movieTitle}>{item.original_title}</Text>
		</TouchableOpacity>
	)
}

export default Popular;
