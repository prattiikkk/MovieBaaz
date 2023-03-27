import React, { useState, useEffect } from 'react'
import { GET } from '../services/API'
import { IMAGE_URL } from '../config/config';
import { FlatList, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { styles } from '../style/style';

const Top = props => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const response = await GET('/movie/top_rated');
      setImages(response.results);
    }
    getTrendingMovies();
  }, [])
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sectionHeading}>Top rated</Text>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item.id}
        data={images}
        horizontal
        renderItem={item => displayImages(item, props)}
      />
    </View>
  )
}

export const displayImages = ({ item }, props) => {
	return (
		<TouchableOpacity 
			onPress={() => {
				props.navigation.navigate('movieDetails', {movieId:item.id})
			}}
		>
			
			<Image
				source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
				style={styles.sliderImage}
			/>
			<Text style={styles.movieTitle}>{item.original_title}</Text>
		</TouchableOpacity>
	)
}

export default Top