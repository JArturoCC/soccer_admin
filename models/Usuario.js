const { Schema, model } = require('mongoose');

//Es el modelo de usuarios que es lo que debe tener un usuario
const  UsuarioSchema = Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
});

module.exports = model('Usuario', UsuarioSchema);