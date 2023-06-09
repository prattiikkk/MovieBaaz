# MovieBaaz (A movie search react-native app using tmdb api.)

## Overview
MovieBaaz, this is a react-native app that shows information related to Movies. It shows which movies are trending in the current week, which movies are most popular and top rated movies..
You can search any movie you want with the search feature.
Along with this you can see movie overview, genre, release date, rating, duration and soon will add movie cast, related movies, etc.
It uses tmdb api. The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.
It uses AsyncStorage to store the favourite movies, although it marks favourite movies but the implementation of showing favourite movies will be done later.

### Technologies used.
react-native (0.71).
tmdb api.

### Dependencies/library used.
#### 1)React Navigation: 
Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack. Used this to switch between screens, also used in the bottom navigation bar.
#### 2)Ionicons:
Designed icons for web, android, ios and desktop. Used ionicons in the bottom navigation bar and in the favourite button.
#### 3)AsyncStorage: 
AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. Used AsyncStorage to store the data of movie liked.
#### 4)React native paper: 
Used "Card" from react native paper for searched images.
#### 5)Linear Gradient: 
Provides a native React view that transitions between multiple colours in a linear direction. Used linear gradient in header background image to give horizontal gradient.

## Installation Guide
1) git clone https://github.com/prattiikkk/MovieBaaz.git
2) cd MovieBaaz
3) npm install
4) react-native start

## Screenshots
![alt text](https://github.com/prattiikkk/MovieBaaz/blob/master/screenshots/HomeScreen.jpg?raw=true)
![alt text](https://github.com/prattiikkk/MovieBaaz/blob/master/screenshots/SearchScreen.jpg?raw=true)
![alt text](https://github.com/prattiikkk/MovieBaaz/blob/master/screenshots/AfterSearch.jpg?raw=true)
![alt text](https://github.com/prattiikkk/MovieBaaz/blob/master/screenshots/MovieDetails.jpg?raw=true)

## Credits
react-native documatation (https://reactnative.dev/docs/environment-setup)


