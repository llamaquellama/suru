'use strict';
const express = require('express');
const router = express.Router();
const usuarioApi = require('./usuarios.api');

router.route('/registrarUsuario')
    .post(function (req, res) {
        usuarioApi.registrar(req, res);
    });


router.route('/listarUsuarios/:rol')
.get(function (req, res) {
    usuarioApi.listarTodos(req, res);
});


module.exports = router;


router.route('/validar_credenciales')
    .post(function (req, res) {
        usuarioApi.validarCredenciales(req, res);

    });

router.route('/obtener_usuario/:nombreUsuario')
    .get(function (req, res) {
        usuarioApi.obtenerUsuario(req, res);
    });