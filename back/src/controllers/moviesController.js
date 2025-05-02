const { getMoviesService, createMovieService,} = require("../services/moviesService");
const tempData = require("../tempData/tempData");

const getMovies = (req, res) => {
  const movies = getMoviesService();
  res
    .status(200)
    .json({message: 'Próximamente estarán las películas', movies: movies});
  };

const createMovie = (req, res) => {
  const body = req.body;
  console.log ("createMovie: body linea 14 en MoviesController.js", body)
  const newMovie = createMovieService (body);
  res
    .status(201)
    .json({message: 'Película creada correctamente', movie: newMovie});
};

const updateMovie = (req, res) => {};
const deleteMovie = (req, res) => {};

module.exports = { getMovies, createMovie, updateMovie, deleteMovie };