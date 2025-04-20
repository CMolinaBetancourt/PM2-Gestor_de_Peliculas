const moviesContainer = document.getElementById("movieContainer");

function renderCards(movies) {
  movies.forEach((movie) => { 
    const movieCard = document.createElement("div");
    movieCard.classList.add("moviecard");

    const title = document.createElement("a");
    title.href = movie.title;
    title.textContent = `${movie.title}`;

    const poster = document.createElement("img");
    poster.src = movie.poster;
    poster.alt = movie.title;

    const description = document.createElement("div");
    description.classList.add("moviedescription");

    const year = document.createElement("p");
    year.innerHTML = `Año: ${movie.year}`;

    const duration = document.createElement("p");
    duration.innerHTML = `Duración: ${movie.duration}`;

    const genre = document.createElement("p");
    genre.innerHTML = `Género: ${movie.genre.join(", ")}`;

    const rate = document.createElement("p");
    rate.classList.add("rate");
    rate.innerHTML = `Calificación: ${movie.rate}`;

    movieCard.appendChild(poster);
    movieCard.appendChild(title);
    movieCard.appendChild(description);

    description.appendChild(year);
    description.appendChild(duration);
    description.appendChild(genre);
    description.appendChild(rate);

    moviesContainer.appendChild(movieCard);
  });
}

$.get("https://students-api.up.railway.app/movies", (data) => {
  renderCards(data); 
});
