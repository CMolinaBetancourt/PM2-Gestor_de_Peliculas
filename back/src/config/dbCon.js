require("dotenv").config();

const mongoose = require ("mongoose");


const dbCon = async () => {
    await mongoose.connect("mongodb+srv://cathemolinab:smkyZstpj8gb2NSm@movies.fq3qtgh.mongodb.net/movies?retryWrites=true&w=majority&appName=movies");
};

module.exports = dbCon;
