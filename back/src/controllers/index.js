const userController = (req, res) => {
    res
      .status(200)
      .send("Estamos recibiendo una solicitud para obtener movies");
  };
  
  const postController = (req, res) => {
    res.status(200).send("Estamos enviando información sobre posts");
  };
  
  module.exports = {
    userController,
    postController,
  };