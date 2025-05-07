const { Router } = require ("express");
const {validations} = require("../middleware/validation");
const { getMovies,createMovie, updateMovie, deleteMovie} = require ("../controllers/moviesController");
const router = Router ();


router.get("/", getMovies);
router.post("/", validations, createMovie);
router.put("/", updateMovie);
router.delete("/", deleteMovie);


module.exports = router;