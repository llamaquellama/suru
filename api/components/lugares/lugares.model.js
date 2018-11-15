'use strict';
let mongoose = require('mongoose');

let lugarSchema = new mongoose.Schema({

    nombre: { type: String, required: true, unique: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    google: { type: String },
    provincia: { type: String, required: true },
    distrito: { type: String, required: true },
    canton: { type: String, required: true },
    //ubicacion: {type : String, required : true},

});

module.exports = mongoose.model('Lugar', lugarSchema);