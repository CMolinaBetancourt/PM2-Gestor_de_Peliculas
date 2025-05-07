const validations = (req, res, next) => {
  
  
    const { title, duration, poster, year, director, rate, genre } = req.body;
    let errors = [];
    let regexDuration = /^\d+h\s\d{1,2}min$/;
    let regexImageUrl = /\.(jpg|png|webp)$/i;
    let regexYear = /^\d{4}$/;
   
    if (!title || title.length < 2) {
      errors.push("El titulo es requerido y debe tener mínimo 2 caracteres");
    }
    if (!regexYear.test(year)) {
      errors.push("El año debe ser un número de 4 dígitos.");
    }
    if (!regexDuration.test(duration)) {
      errors.push("Formato de duración no válido");
    }
     if (!regexImageUrl.test(poster)) {
      errors.push("La URL del poster debe terminar con .jpg, .png o .webp.");
    }
  
    if (errors.length > 0) {
      res.status(400).json({ message: "Error: Campos no válidos", errors: errors });
      return;
    }
  
    next();
  };
  


  module.exports = { validations };