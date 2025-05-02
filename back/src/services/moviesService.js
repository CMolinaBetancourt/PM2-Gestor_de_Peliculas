const tempData = require('../tempData/tempData');
const getMoviesService = () => {
  return tempData;
};

const createMovieService = newMovie => {
  // Guarda newMovie en la DB (esta lógica se implementaría aquí)
  return newMovie;
};

const updateMovieService = () => {
  
};

const deleteMovieService = () => {
  
};

module.exports = { getMoviesService, 
  createMovieService, 
  updateMovieService,
  deleteMovieService  
};