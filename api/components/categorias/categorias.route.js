'use strict';
const express = require('express');
const router = express.Router();
const categoriasApi = require('./categorias.api');

router.route('/registrarCategoria')
    .post(function (req, res) {
        categoriasApi.registrarCategoria(req, res);
    });

router.route('/listarCategorias')
    .get(function (req, res) {
        categoriasApi.listarCategorias(req, res);
    });

module.exports = router;