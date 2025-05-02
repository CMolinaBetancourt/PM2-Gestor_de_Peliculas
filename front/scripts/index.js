//console.log(tempData);

const moviesContainer = document.getElementById("movieContainer");
const renderCards = require('./renderCards');


//$.get("https://students-api.up.railway.app/movies", (data) => {
//  renderCards(data); 
//console.log(data)
 //});

 //https://students-api.up.railway.app/movies
 
 const axios = require('axios');

 document.addEventListener("DOMContentLoaded", () => {
   const fetchMovies = async () => {
     try {
       const {data} = await axios.get("http://localhost:3000/movies");
       const movies = data.movies; // Accede a la propiedad 'movies' del objeto de respuesta
       renderCards(movies);
       console.log('Películas cargadas:', movies);
     } catch (error) {
       console.error('Error al cargar las películas:', error);
       moviesContainer.innerHTML = '<p class="error-message">Error al cargar las películas. Intente más tarde.</p>';
     }
   }
   fetchMovies();
 
 });