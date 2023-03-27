import axios from 'axios'

import { BASE_URL, API_KEY } from '../config/config'

export const fetchMovies = async (search, movies) => {
  if(!search) {
    console.log("in if")
    const response = await axios.get(
      `${BASE_URL}movie/popular?api_key=${API_KEY}`
    );
    return [...movies,...response.data.results];
  } else {
    console.log("in else")

    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
    );
    return [...response.data.results]
  }
}
