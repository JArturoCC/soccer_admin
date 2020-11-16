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
        require: true,
    },
    start_date : {
        type: Date,
        require: true
    },
    category : {
        type: String,
        require: true
    },
    age : {
        type: String,
        require: true
    },
    points_for_winning : {
        type: Number,
        require: true
    },
    points_for_tie : {
        type: Number,
        require: true
    },
    points_for_loss : {
        type: Number,
        require: true
    }
});

module.exports = model('Liga', LigaSchema);