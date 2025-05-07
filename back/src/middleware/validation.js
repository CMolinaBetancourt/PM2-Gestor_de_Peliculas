const validations = (req, res, next) => {
    const { title, duration, poster, year, director, rate, genre } = req.body;
    let errors = [];
    let regexDuration = /^\d+h\s\d{1,2}min$/;
    let regexImageUrl = /\.(jpg|png|webp)$/i;
  
    if (!title || title.length < 3) {
      errors.push("El titulo es requerido y debe tener mínimo 3 caracteres");
    }
  
    if (!regexDuration.test(duration)) {
      errors.push("Formato de duración no válido");
    }
  
    if (errors.length > 0) {
      res.status(400).json({ message: "Error: Campos no válidos", errors: errors });
      return;
    }
  
    next();
  };
  
  module.exports = { validations };