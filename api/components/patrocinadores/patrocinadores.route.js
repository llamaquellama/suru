'use strict';
const express = require('express');
const router = express.Router();
const patrocinadoresApi = require('./patrocinadores.api');

router.route('/registrarPatrocinadores')
    .post(function (req, res) {
        patrocinadoresApi.registrarPatrocinador(req, res);
    });

router.route('/listarPatrocinadores')
    .get(function(req, res){
        patrocinadoresApi.obtenerPatrocinador(req, res);
    });

    
    
module.exports = router;