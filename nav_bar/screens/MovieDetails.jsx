import React, { useEffect, useState } from 'react'
import { View, Text, Image, TurboModuleRegistry } from 'react-native'
import { IMAGE_URL } from '../config/config';
import { GET } from '../services/API';
import { styles } from '../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { movieKey } from '../constants/constants';
import Loader from '../loader/loader'
import { ScrollView } from 'react-native-gesture-handler';

export var FAVOURITE_MOVIES = new Set();
// FAVOURITE_MOVIES.add(3)
const MovieDetails = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  var data;
  useEffect(() => {
    const getDetails = async () => {
      data = await GET(`/movie/${props.route.params.movieId}`)
      setDetails(data)
      setLoading(false)
      // console.log(data)
    }

    getDetails()
  }, [])
  const [liked, setLiked] = useState(false)

  function test() {
    if (!liked) {
      FAVOURITE_MOVIES.add(props.route.params.movieId)
      AsyncStorage.setItem(movieKey, [...FAVOURITE_MOVIES].join(', '))

    } else {
      if (FAVOURITE_MOVIES.has(props.route.params.movieId)) {
        FAVOURITE_MOVIES.delete(props.route.params.movieId)
      }
    }
  }
  // console.log(FAVOURITE_MOVIES)
  // displayData = async () => {
  //   try {
  //     let mid = await AsyncStorage.getItem(movieKey)
  //     console.log(mid)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getGenre = () => {
    return details.genres.map((genre) => (
      <View style={styles.ratingText}>
        <Text style={[styles.genreName, styles.movieDescription]}>{genre.name} </Text>
      </View>
    ));
  }

  var releaseDate = details.release_date + "";
  releaseDate = releaseDate.substring(0, releaseDate.length - 6)
  var rating = details.vote_average + ""
  rating = rating.substring(0, rating.length - 2)
  console.log(details)

  return (
    <ScrollView 
      scrollEnabled = {false}
      style={styles.movieDetailsContainer}>
      {loading? (
        <Loader/>
      ): (
      <View>
        <Image
          source={{ uri: `${IMAGE_URL}${details.poster_path}` }}
          style={styles.movieDetailImg}
        />
        <Pressable
          onPress={() => {
            setLiked((isLiked) => !isLiked)
            test()
            displayData()
            // storeData()
          }}
        >
          <Ionicons
            style={styles.movieLikeBtn}
            name={liked ? 'heart' : 'heart-outline'}
            size={28}
            color={liked ? 'red' : 'white'}
          />
        </Pressable>
        <View style={styles.movieDetailTextContainer}>
          <Text style={styles.detailMovieTitle}>{details.original_title} {"("}{releaseDate}{")"}</Text>

          <Text style={styles.ratingText}>Rating: {rating}</Text>

          <Text style={styles.ratingText}>Overview: </Text>
          <Text style={styles.movieDescription}>{details.overview}</Text>
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.ratingText}>Release Date</Text>
              <Text style={styles.movieDescription}>{details.release_date}</Text>
            </View>
            <View>
              <Text style={styles.ratingText}>Duration</Text>
              <Text style={styles.movieDescription}>{details.runtime} min</Text>
            </View>
          </View>
          {console.log(details.genre_ids)}
          <Text style={styles.ratingText}>Genres</Text>
          <View style={styles.genreType} >{getGenre()}</View>
        </View>
      </View>
      )}
    </ScrollView>
  )
}

export default MovieDetails;