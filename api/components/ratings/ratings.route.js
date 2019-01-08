'use strict';
const express = require('express');
const router = express.Router();
const ratingsApi = require('./ratings.api');

router.route('/registrarRating')
    .post(function (req, res) {
        ratingsApi.registrar(req, res);
    });

router.route('/listarRatings')
    .get(function (req, res) {
        ratingsApi.listarTodos(req, res);
    });

module.exports = router;
