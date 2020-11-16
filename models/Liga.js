const { Schema, model } = require('mongoose');

/*
category: 
1 - Infantil
2 - Juvenil
3 - Femenil
4 - Libre
5 - Mixta

age: 
1 - 8-12
2 - 15-18
3 - 18-30
4 - 18-25
*/

const  LigaSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    start_date : {
        type: Date,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    age : {
        type: String,
        required: true
    },
    points_for_winning : {
        type: Number,
        required: true
    },
    points_for_tie : {
        type: Number,
        required: true
    },
    points_for_loss : {
        type: Number,
        required: true
    }
});

module.exports = model('Liga', LigaSchema);