const { Router } = require ("express");
const { getMovies,createMovie, updateMovie, deleteMovie} = require ("../controllers/moviesController");
const router = Router ();

router.get("/", getMovies);
router.post("/", createMovie);
router.put("/", updateMovie);
router.delete("/", deleteMovie);


module.exports = router;