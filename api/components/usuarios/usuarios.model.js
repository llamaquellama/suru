'use strict';
let mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    rolUsuario : {type : String, required : false},
    tipoId : {type : String, unique : false, required : false},
    id : {type : String, unique : true, required : true},
    nombreUsuario : {type : String, unique : true, required : true},
    nombre1 : {type : String, required : false},
    nombre2 : {type : String, required : false},
    apellido1 : {type : String, required : false},
    apellido2 : {type : String, required : false},
    correo : {type : String, required : false},
    fechaNacimiento : {type : String, required : false},
    edad : {type : Number, required : false},
    contrasenna : {type : String, required : true},
    imgPerfil : {type : String, required : false},
    lugares : {type : String, required : false},


    /**empresario */
    razonSocial : {type : String, required : false},
    nombreComercial : {type : String, required : false},
    telEmpresa : {type : Number, required : false},
    correoEmpresa : {type : String, required : false},
    provincia : {type : String, required : false},
    canton : {type : String, required : false},
    distrito : {type : String, required : false},
    nombreBContacto : {type : String, required : false},
    apellidoAContacto : {type : String, required : false},
    apellidoBContacto : {type : String, required : false},
    correoContacto : {type : String, required : false},
    telContacto : {type : String, required : false},
    nombreProvincia : {type : String, required : false},
    nombreCanton : {type : String, required : false},
    nombreDistrito : {type : String, required : false},
    direccionExacta : {type : String, required : false}

});

module.exports = mongoose.model('Usuario', usuarioSchema);