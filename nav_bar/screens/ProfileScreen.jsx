import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { GET } from '../services/API';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { movieKey } from '../constants/constants';
import { styles } from '../style/style';


const ProfileScreen = props => {
    const [movieId, setMovieId] =useState([])
    var mid;
    const Data = displayData = async() => {
        try{
            mid = await AsyncStorage.getItem(movieKey)
            setMovieId(mid)
            // console.log(mid.size)
            // return mid
        } catch(error) {
            console.log(error)
        }
    }
    console.log(movieId)
    console.log(movieId.length)

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            const data = await GET(`/movie/${movieId}`)
            console.log(data)
        }
        getDetails()
    }, [])



    return (
        <View>
            <Text
                style={styles.sectionHeading}
                onPress={Data}
            >Profile</Text>
        </View>
    );
};

export default ProfileScreen;