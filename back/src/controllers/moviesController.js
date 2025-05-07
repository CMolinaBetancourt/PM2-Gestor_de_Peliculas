const { getMoviesService, createMovieService, } = require("../services/moviesService");

const getMovies = async (req, res) => {
  try {
    const movies = await getMoviesService();
    console.log(movies)
    res
      .status(200)
      .json({ movies: movies });
  }
  catch (err) {
    res.status(500).json({ message: "Error al acceder a las películas"})
  }
};

const createMovie = async (req, res) => {
    const body =  req.body;
    const newMovie = await createMovieService(body);
    res
      .status(201)
      .json({ message: 'Película creada correctamente', movie: newMovie });
};

const updateMovie = (req, res) => { };
const deleteMovie = (req, res) => { };

module.exports = { getMovies, createMovie, updateMovie, deleteMovie };