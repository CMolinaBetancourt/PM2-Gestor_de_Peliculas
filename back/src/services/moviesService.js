const Movie = require("../models/Movie");

const getMoviesService = async () => {
  const movies = await Movie.find();
  console.log(movies)
  return movies;
};

//newMovie es diferente a createdMovie porque esta última tiene el id
const createMovieService = async (newMovie) => {
  const createdMovie = await Movie.create(newMovie);
  return createdMovie;
};

const updateMovieService = () => {};
const deleteMovieService = () => {};

module.exports = { getMoviesService, 
  createMovieService, 
  updateMovieService,
  deleteMovieService  
};