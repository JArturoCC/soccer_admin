const { Schema, model } = require('mongoose');

//Es el modelo de usuarios que es lo que debe tener un usuario
const  UsuarioSchema = Schema({
    user_name: {
        type: String,
        require: true,
        unique: true
    },
    password : {
        type: String,
        require: true
    }
});

module.exports = model('Usuario', UsuarioSchema);