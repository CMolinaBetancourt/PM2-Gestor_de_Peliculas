const dbCon = require ("./src/config/dbCon");
const app = require("./src/server");
const PORT = 3000;



dbCon()
.then((res) =>{
  //console.log("db connect")
    app.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  })
  .catch((err)=>{
    console.log("Error al conectar con la Base de Datos");
  });
  
 
  
