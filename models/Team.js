const { Schema, model } = require('mongoose');

const  TeamSchema = Schema({
    name: {
        type: String,
        required: true
    },
    id_liga : {
        type: String,
        required: true
    },
    responsable_name: {
        type: String
    },
    phone : {
        type: String
    },
    image : {
        type: String
    }
});

module.exports = model('Team', TeamSchema);