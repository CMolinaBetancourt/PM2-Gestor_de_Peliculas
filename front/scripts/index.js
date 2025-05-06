//console.log(tempData);


const { fetchMovies } = require('./services');
const { createMovie } = require("./submit");



document.addEventListener('DOMContentLoaded', () => {
  const moviesContainer = document.getElementById("movieContainer");
  fetchMovies(moviesContainer);
});

  const form = document.querySelector('.createMovie');
 if (form) {
    form.addEventListener('submit', createMovie);
  }





