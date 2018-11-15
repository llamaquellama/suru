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
        actividadesApi.listarTodos(req, res);
    });

module.exports = router;
