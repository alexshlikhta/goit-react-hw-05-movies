import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const API_KEY = "c3dfb97c4e42ba6803ce4a8859444b9b";
const popularMovies = "trending/all/day";
const queriedMovies = "search/movie";
const byIdMovies = "movie";

export async function getAllMovies() {
  const response = await axios.get(`${popularMovies}?api_key=${API_KEY}`);
  return response.data.results;
}

export async function getQueriedMovie(query) {
  const response = await axios.get(`${queriedMovies}?api_key=${API_KEY}&page=1&query=${query}`);
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(`${byIdMovies}/${id}?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieCredits(id) {
  const response = await axios.get(`${byIdMovies}/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}

export async function getMovieReviews(id) {
  const response = await axios.get(`${byIdMovies}/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
}
