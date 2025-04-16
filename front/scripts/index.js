//console.log(tempData);

    tempData.map((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("moviecard");
      
        const title = document.createElement("h2");
        title.textContent = `${movie.title}`;
        
        const poster = document.createElement("img");
        poster.src = movie.poster; 
        poster.alt = movie.title; 
            
        const description = document.createElement("div");
        description.classList.add("moviedescription");
        description.innerHTML = `
          <p class="year">Año: ${movie.year}</p>
          <p class="duration">Duración: ${movie.duration}</p>
          <p class="genre">Género: ${movie.genre.join(", ")}</p>
          <p class="rate">Calificación: ${movie.rate}</p>
        `;

        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        movieCard.appendChild(description);
      
        movieContainer.appendChild(movieCard);

        return movieCard;
      });
      