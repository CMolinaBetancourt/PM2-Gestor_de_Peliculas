require("dotenv").config();

const mongoose = require ("mongoose");


const dbCon = async () => {
    
    const uri = process.env.DATABASE;

    try {
                await mongoose.connect(uri);
        console.log("🎉 Conexión a MongoDB exitosa.");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = dbCon;