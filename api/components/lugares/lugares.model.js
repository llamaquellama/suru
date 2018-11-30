'use strict';
let mongoose = require('mongoose');

let lugarSchema = new mongoose.Schema({
    
    foto: { type: String },
    nombre: { type: String, required: true, unique: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    youtube: { type: String },
    nombreProvincia: { type: String },
    nombreCanton: { type: String },
    nombreDistrito: { type: String },
    direccion: {type : String },
    latitudLongitud: {type : String }

});

module.exports = mongoose.model('Lugar', lugarSchema);