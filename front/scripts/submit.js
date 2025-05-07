    const {postMovie} = require("./services");

const createMovie = event => {
    event.preventDefault();
    const errorsSections = document.querySelector('.errors');
    const selectedGenres = Array.from(
      document.querySelectorAll('input[name="genre"]:checked')
    ).map(checkbox => checkbox.value);
    
    let errores = [];

  const newMovie = {
    title: document.querySelector('#title').value,
    rate: document.querySelector('#rate').value,
    duration: document.querySelector('#duration').value,
    poster: document.querySelector('#poster').value,
    director: document.querySelector('#director').value,
    year: document.querySelector('#year').value,
    genre: selectedGenres
  };
  console.log(newMovie);
  let regexDuration = /^\d+h\s\d{1,2}min$/;
  let regexImageUrl = /\.(jpg|png|webp)$/i;

  if (!newMovie.title) {
    errores.push('El título es requerido');
  }
  if (newMovie.year < 1900 || newMovie.year > 2026) {
    errores.push('El año no es válido');
  }
  if (!newMovie.director) {
    errores.push('El nombre del director es requerido');
  }
  if (!regexDuration.test(newMovie.duration)) {
    errores.push('El formato de la duracion no es válido');
  }
  if (newMovie.genre.length === 0) {
    errores.push('El género es requerido');
  }
  if (!newMovie.rate) {
    errores.push('El rating es requerido');
  }
 if (!regexImageUrl.test(newMovie.poster)) {
    errores.push("La URL de la imagen debe terminar con .jpg, .png o .webp");
  }

 
  if (errores.length > 0) {
    errorsSections.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('errorlist');
    errorsSections.appendChild(ul);
    errores.forEach(err => {
      const li = document.createElement('li');
      li.textContent = err;
      ul.appendChild(li);
    });
    return;
  
  }
  postMovie(newMovie)
  errorsSections.innerHTML = '';
  
}

module.exports = {createMovie}