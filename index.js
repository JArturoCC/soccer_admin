//Para importar express
const express = require('express');
require('dotenv').config();
const { dbConnection }  = require('./database/config');

//Creando servidor de express
const app = express();

//Base de datos
dbConnection();

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/liga', require('./routes/liga'));
app.use('/api/team', require('./routes/team'));
app.use('/api/player', require('./routes/player'));

//Escuchar peticiones listen(puerto, callback cuando se ejecuta el proyecto)
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});