'use strict';
let mongoose = require('mongoose');

let ratingSchema = new mongoose.Schema({

    idActividad : {type : String, required : false},       
    nombreUsuario : {type : String, required : true},
    ratingActividad : {type : Number, required : false}

});

module.exports = mongoose.model('Rating', ratingSchema);