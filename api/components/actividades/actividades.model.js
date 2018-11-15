'use strict';
let mongoose = require('mongoose');

let actividadSchema = new mongoose.Schema({
    //foto: { type: String },
    nombre: { type: String, required: true, unique: true },
    categoria: { type: String },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    costo: { type: String, required: true },
    cupos: { type: String, required: true },
    etiquetas: { type: String },
    patrocinadores: { type: String },
    descripcion: { type: String, required: true },
    provincia: { type: String }, //cambiar a true cuando este listo el select
    distrito: { type: String },
    canton: { type: String }
    //ubicacion: {type : String, required : true},

});

module.exports = mongoose.model('Actividad', actividadSchema);