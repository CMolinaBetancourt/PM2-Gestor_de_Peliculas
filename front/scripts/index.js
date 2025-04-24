//console.log(tempData);

const moviesContainer = document.getElementById("movieContainer");
const renderCards = require('./renderCards');

$.get("https://students-api.up.railway.app/movies", (data) => {
  renderCards(data); 
//console.log(data)
 });
