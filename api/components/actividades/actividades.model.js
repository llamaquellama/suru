'use strict';
let mongoose = require('mongoose');

let actividadSchema = new mongoose.Schema({
    foto: { type: String },
    nombre: { type: String, required: true, unique: true },
    categoria: { type: String },
    fechaInicio: { type: String, required: true },
    fechaFin: { type: String, required: true },
    horaInicio: { type: String, required: true },
    horaFin: { type: String, required: true },
    costo: { type: String, required: true },
    cupos: { type: String, required: true },
    etiquetas: { type: String },
    patrocinadores: {type: String},
    descripcion: { type: String, required: true },
    nombreProvincia: { type: String }, //cambiar a true cuando este listo el select
    nombreCanton: { type: String },
    nombreDistrito: { type: String },
    direccion: { type: String },
    latitud: {type : String },
    longitud: {type : String },
    nombreLugar: {type : String, required : false},
    nombreUsuario: {type : String, required : false}

});

module.exports = mongoose.model('Actividad', actividadSchema);