import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  /** Header.js Style */
  homeHeaderBackground: {
    width: '100%',
    height: 200,
  },

  homeHeaderGradient: {
    flex: 1,
  },

  homeHeaderTextContainer: {
    height: 200,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  homeHeaderFirst: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900'
  },

  homeHeaderSecond: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700'
  },

  /** Header.js Style end */

  /** Trending.js && Popular.js Style */

  sliderContainer: {
		backgroundColor: 'rgb(1, 27, 36)',
  },

  sectionHeading: {
    color: 'rgb(86, 135, 153)',
    fontSize: 22,
    padding: 20,
    fontWeight: '700'
  },

  flatList: {
    padding: 20,
    backgroundColor: 'rgb(1, 42, 56)',
    
  },

  sliderImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
    marginRight: 10,
  },

  movieTitle: {
    fontSize: 16,
    paddingTop:  5,
    textAlign: "center",
    width: 150,
    color: 'white',
  },

  /** Trending.js && Popular.js Style end */


  /** MovieDetails.js Style start */
  movieDetailsContainer: {
    backgroundColor: 'rgb(1, 42, 56)',
  },

  movieDetailImg: {
    backgroundColor: 'black',
    width: '100%',
    height: 200,
    resizeMode: "contain",
  },

  movieLikeBtn: {
    marginTop: -35,
    marginRight: 20,
    alignSelf: 'flex-end'
    
  },

  movieDetailTextContainer: {
    padding: 20,
    height: '100%'
  },

  detailMovieTitle: {
    color: 'white',
    fontSize: 24, 
    fontWeight: '800',
    paddingBottom: 8,
  },

  ratingText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    paddingTop: 8,
    paddingBottom: 8,
  },

  movieDescription: {
    color: 'rgb(204, 204, 204)',
    fontSize: 16,


  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },  

  genreName: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },

  genreType: {
    display: 'flex',
    flexDirection: 'row',
  },

  /** MovieDetails.js Style end */

  /** SearchScreen.js Style start*/

  searchScreenIcons: {
    alignSelf: 'flex-end',
    marginTop: -50,
    marginRight: 20
  },

  searchScreenContainer: {
    backgroundColor: 'rgb(1, 42, 56)',

  },

  searchScreenImgContainer: {
    width: windowWidth,
    backgroundColor: 'rgb(1, 42, 56)',

    // flex: 1,
    alignItems: "center"
  },



  searchScreenImg: {
    margin: 10,
    borderRadius: 10,
    width: 150,
    height: 250,
  }
  /** SearchScreen.js Style end*/

});

export {styles};