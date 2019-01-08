'use strict';
const express = require('express');
const router = express.Router();
const lugaresApi = require('./lugares.api');

router.route('/registrarLugar')
    .post(function (req, res) {
        lugaresApi.registrar(req, res);
    });
//melo cambio para que funcionara el borrar

router.route('/listarLugares')
    .get(function (req, res) {
        lugaresApi.listarTodos(req, res);
    });

    // router.route('/listarLugares')
    // .get(function (req, res) {
    //     lugaresApi.obtenerLugar(req, res);
    // });

    router.route('/obtenerLugares')
    .get(function (req, res) {
        lugaresApi.obtenerLugar(req, res);
    }); 
    
router.route('/buscarLugar')
    .post(function (req, res) {
        lugaresApi.buscarLugar(req, res);
    });

router.route('/actualizarLugar')
.post(function (req, res) {
    lugaresApi.actualizarLugar(req, res);
});

router.route('/listarLugares/:nombreUsuario')
.get(function (req, res) {
    lugaresApi.listarPorNombreUsuario(req, res);
});

router.route('/borrarLugar')
.post(function (req, res) {
    lugaresApi.borrar(req, res);
});


////////agregar9/////////

router.route('/lugaresPorNombre/:nombre')
.get(function (req, res) {
    lugaresApi.buscarLugarPorNombre(req, res);
});
module.exports = router;
