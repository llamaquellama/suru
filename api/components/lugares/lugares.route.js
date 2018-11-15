'use strict';
const express = require('express');
const router = express.Router();
const lugaresApi = require('./lugares.api');

router.route('/registrarLugar')
    .post(function (req, res) {
        lugaresApi.registrar(req, res);
    });

router.route('/listarLugares')
    .get(function (req, res) {
        lugaresApi.listarTodos(req, res);
    });


module.exports = router;
