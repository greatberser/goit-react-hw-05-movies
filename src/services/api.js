import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
    api_key: '16a76550fab4a9d620c3cb364bb90d65',
}

export const getTrending = async () => {
    const response = await axios.get(`3/trending/movie/day`);
    return response.data.results;
}

export const getByQuery = async query => {
    const response = await axios.get(`3/search/movie?query=${query}`);
    return response.data.results;
}

export const getMovieDetails = async movieId => {
    const response = await axios.get(`3/movie/${movieId}`);
    return response.data;
}

export const getMovieCredits = async id => {
    const response = await axios.get(`3/movie/${id}/credits`);
    return response.data.cast;
}

export const getMovieReviews = async id => {
    const response = await axios.get(`3/movie/${id}/reviews`);
    return response.data.results;
}