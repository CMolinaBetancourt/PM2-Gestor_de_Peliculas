//console.log(tempData);

class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    tempData.map((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("moviecard"); // Añadimos una clase para estilos CSS
      
        const poster = document.createElement("img");
        poster.src = movie.poster;
        poster.alt = movie.title;
      
        const title = document.createElement("h2");
        title.textContent = movie.title;
      
        const details = document.createElement("div");
        details.innerHTML = `
          <p><strong>Año:</strong> ${movie.year}</p>
          <p><strong>Director:</strong> ${movie.director}</p>
          <p><strong>Duración:</strong> ${movie.duration}</p>
          <p><strong>Género:</strong> ${movie.genre.join(", ")}</p>
          <p><strong>Calificación:</strong> ${movie.rate}</p>
        `;
      
        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        movieCard.appendChild(details);
      
        movieContainer.appendChild(movieCard);
      });
      