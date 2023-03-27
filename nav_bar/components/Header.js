import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { styles } from '../style/style';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <ImageBackground
      style={styles.homeHeaderBackground}
      source={{
        uri: "https://coolhdwall.com/storage1/202107/control-video-game-4K-wallpaper-pc-preview-15.jpg",
      }}
    >
      <LinearGradient
        style={styles.homeHeaderBackground}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={['rgba(3, 37, 50, 0.75)', 'rgba(72, 151, 181, 0.35)','rgba(149, 189, 204, 0.4)','rgba(72, 151, 181, 0.35)', 'rgba(3, 37, 50, 0.75)']}
      >
      <View style={styles.homeHeaderTextContainer}>
        <Text style={styles.homeHeaderFirst}>Welcome.</Text>
        <Text style={styles.homeHeaderSecond}>Millions of movies and people to discover. Explore now.</Text>

      </View>
      </LinearGradient>
    </ImageBackground>

  )
}

export default Header;
