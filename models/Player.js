const { Schema, model } = require('mongoose');

const  PlayerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    surnames: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    jersey_number: {
        type: String
    },
    image: {
        type: String
    },
    id_team: {
        type: String,
        required: true
    }
});

module.exports = model('Player', PlayerSchema);