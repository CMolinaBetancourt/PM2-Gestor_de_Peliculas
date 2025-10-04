const axios = require('axios');
const renderCards = require('./renderCards');

// 1. Lógica correcta: usa Render, o usa Localhost como respaldo
const API_BASE_URL = process.env.BACKDEPLOY || 'http://localhost:3000'; 

// ...

const fetchMovies = async (container) => {
  try {
    // CORRECCIÓN: Se cambió `${API_BASE_UR}` por `${API_BASE_URL}`
    const { data } = await axios.get(`${API_BASE_URL}/movies`); 
    const movies = data.movies;
    renderCards(movies, container);
    console.log('Películas cargadas:', movies);
  } catch (error) {
    console.error('Error al cargar las películas:', error);
  }
}

const postMovie = async newMovie => {
  try {
    // CORRECCIÓN: Se cambió `${API_BASE_UR}` por `${API_BASE_URL}`
    const res = await axios.post(`${API_BASE_URL}/movies`, newMovie);
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