const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const moviesRoutes = require("./routes/moviesRoutes");

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/movies", moviesRoutes);

module.exports = app;