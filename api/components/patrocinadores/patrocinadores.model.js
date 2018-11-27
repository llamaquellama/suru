'use strict ';

let mongoose = require('mongoose');

let patrocinadorSchema = new mongoose.Schema({
    fotoPatrocinador: {type : String, required : true},
    tipoIndustria: {type : String, required: true},
    nombrePatrocinador: {type: String, unique: true, required: true}
});
module.exports = mongoose.model('Patrocinador', patrocinadorSchema);