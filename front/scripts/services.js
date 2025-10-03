const axios = require('axios');
const renderCards = require('./renderCards');
const API_BASE_URL= process.env.BACKDEPLOY;

//$.get("https://students-api.up.railway.app/movies", (data) => {
//  renderCards(data); 
//console.log(data)
//});

//https://students-api.up.railway.app/movies


const fetchMovies = async (container) => {
  try {
    const { data } = await axios.get("${API_BASE_UR}/movies");
    const movies = data.movies;
    renderCards(movies, container);
    console.log('Películas cargadas:', movies);
  } catch (error) {
    console.error('Error al cargar las películas:', error);
  }
}

const postMovie = async newMovie => {
  try {
    const res = await axios.post('${API_BASE_UR}/movies', newMovie);
    console.log('Película creada con éxito:', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchMovies,
  postMovie
};