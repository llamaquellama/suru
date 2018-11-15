'use strict ';

let mongoose = require('mongoose');

let categoriaSchame = new mongoose.Schema({

    iconoCategoria: {type: String, unique: true, required: true},
    nombreCategoria: {type: String, unique: true, required: true},
    descripcionCategoria: {type: String, unique: false, required: true}
});

module.exports = mongoose.model('Categoria', categoriaSchame);