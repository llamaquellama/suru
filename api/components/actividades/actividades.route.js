'use strict';
const express = require('express');
const router = express.Router();
const actividadesApi = require('./actividades.api');

router.route('/registrarActividad')
    .post(function (req, res) {
        actividadesApi.registrar(req, res);
    });

router.route('/listarActividades')
    .get(function (req, res) {
        actividadesApi.obtenerActividad(req, res);
    });

    router.route('/ver_perfil_actividad/:id')
    .get(function (req, res) {
        actividadesApi.obtenerPerfilActividad(req, res);
    });
    
module.exports = router;
