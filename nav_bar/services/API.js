import { BASE_URL,  API_KEY } from '../config/config'

export const GET = async url => {
    const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`

    let response = await fetch(API_URL, {method: 'GET'});
    response = response.json();

    return response;
}