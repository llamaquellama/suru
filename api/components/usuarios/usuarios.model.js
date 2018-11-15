'use strict';
let mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    rolUsuario : {type : String, required : false},
    tipoId : {type : String, unique : false, required : false},
    id : {type : String, unique : true, required : false},
    nombreUsuario : {type : String, unique : true, required : true},
    nombre1 : {type : String, required : false},
    nombre2 : {type : String, required : false},
    apellido1 : {type : String, required : false},
    apellido2 : {type : String, required : false},
    correo : {type : String, required : false},
    fechaNacimiento : {type : String, required : false},
    edad : {type : Number, required : false},
    contrasenna : {type : String, required : false},
    confirmarContrasenna : {type : String, required : false},


    /**empresario */
    razonSocial : {type : String, required : false},
    nombreComercial : {type : String, required : false},
    telEmpresa : {type : Number, required : false},
    correoEmpresa : {type : String, required : false},
    provincia : {type : String, required : false},
    canton : {type : String, required : false},
    distrito : {type : String, required : false},
    nombreAContacto : {type : String, required : false},
    nombreBContacto : {type : String, required : false},
    apellidoAContacto : {type : String, required : false},
    apellidoBContacto : {type : String, required : false},
    correoContacto : {type : String, required : false},
    telContacto : {type : String, required : false},
    contrasennaEmpresario : {type : String, required : false},
    confirmarContrasennaEmpresario : {type : String, required : false},

});

module.exports = mongoose.model('Usuario', usuarioSchema);