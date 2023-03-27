import React, { useEffect, useState } from 'react';
import {  View, TextInput, TouchableOpacity, FlatList, Image, } from 'react-native';
import { Card } from 'react-native-paper';
import { fetchMovies } from '../services/Fetch';
import { IMAGE_URL } from '../config/config';
import { styles } from '../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchScreen = props  => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchNow, setSearchNow] = useState(false);

  useEffect(() => {
    fetchMovies(searchTerm, movies).then((data) => {
      setMovies(data);
    });
   
  }, [searchNow]);


  return (
    <View style={styles.searchScreenContainer}>
      <View >
        <TextInput
          style={styles.sectionHeading}
          placeholder={'search movies'}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          
        />

        <TouchableOpacity
          onPress={() => {
            setSearchNow(!searchNow);
          }}
        >
          <Ionicons
            name={searchTerm ? 'search-outline' : 'refresh-outline'}
            size={24}
            style={styles.searchScreenIcons}
          />
        </TouchableOpacity>
      </View>
      
          
      <View style={styles.searchScreenImgContainer}>
        <FlatList 
          data={movies}
          numColumns={2}
          renderItem={({item}) => {
            return(
              <Card style={styles.searchScreenContainer}>
                <TouchableOpacity
                  
                  onPress={() => {
                    props.navigation.navigate('movieDetails', {movieId: item.id})
                  }}
                >
                  <Image 
                    source={{
                      uri: `${IMAGE_URL}${item.poster_path}`
                    }}
                    style={styles.searchScreenImg}
                  />

                </TouchableOpacity>
              </Card>
            )
          }}
        />
      </View>
    </View>
  );
};

export default SearchScreen;