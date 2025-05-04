// const axios = require("axios");
// const form = document.querySelector('.createMovie');
// console.log(form);

// const errorsSection = document.querySelector(".errors")



// form.addEventListener('submit', event => {
//     event.preventDefault();
//     event.stopPropagation();


//     let errores = [];

//     const title = document.querySelector('#title').value;
//     const year = document.querySelector('#year').value;
//     const director = document.querySelector('#director').value;
//     const duration = document.querySelector('#duration').value;
//     const genre = document.querySelector('#genre').value;
//     const rate = document.querySelector('#rate').value;
//     const poster = document.querySelector('#poster').value;

//     const newMovie = {
//         title: title,
//         year: year,
//         director: director,
//         duration: duration,
//         genre: genre,
//         rate: rate,
//         poster: poster,
//     };

//     if (!title ) {
//         errores.push("El título es requerido");
//     }

//     if ( !director) {
//         errores.push("El director es requerido");
//     }

//      if (year < 1900 || year > 2026) {
//         errores.push('El año no es válido');
//     }

//     let regexDuration = /^\d+h\s\d{1,2}min$/;
//     if (!regexDuration.test(duration)) {
//         errores.push('El formato de la duración no es válido');
//     }

//     if ( rate < 0 || rate > 10) {
//         errores.push("La calificación no es valida debe ser entre 0 y 10");
//     }

//     // if (!poster.startsWith('http://') && !poster.startsWith('https://')) {
//     //     errores.push("Verifique que URL inicie con http:// o https:// ");
//     // }

//     // if (!poster.endsWith('.jpg') && !poster.endsWith('.jpeg') && !poster.endsWith('.png') && !poster.endsWith('.gif') && !poster.endsWith('.bmp') && !poster.endsWith('.webp')) {
//     //     errores.push("Verifique que la URL termine con una extensión de imagen válida (.jpg, .jpeg, .png, .gif, .bmp, o .webp)");
//     // }


//     if (errores.length > 0) {
//         errorsSection.innerHTML = '';
//         const ul = document.createElement('ul');
//         errorsSection.appendChild(ul);
//         errores.forEach((err) => {
//           const li = document.createElement('li');
//           li.textContent = err;
//           ul.appendChild(li);
//         });
//         return;
//       }

//axios
//.post('http://localhost:3000/movies', newMovie)
//.then(res => console.log(res))
// .catch(err => console.log(err));

// });