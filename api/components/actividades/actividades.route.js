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

/// modofique este para actividades.html////
router.route('/listar_actividad')
    .get(function (req, res) {
        actividadesApi.obtenerListaActividades(req, res);
    });
/// modifique este para actividades.html////

/// modifique este para actividades.html////
router.route('/editarActividad')
    .post(function (req, res) {
        actividadesApi.actualizarActividad(req, res);
    });
/// modifique este para actividades.html////

/// modifique este para actividades.html////
router.route('/borrar_actividad')
    .post(function (req, res) {
        actividadesApi.eliminar_actividad(req, res);
    });

//Obtener las actividades que se realizan en un mismo lugar
router.route('/getListaActividadesPorNombreLugar')
    .get(function (req, res) {
        actividadesApi.obtener_actividad_nombre_lugar(req, res);
    });
////*agregar 9 ////////

router.route('/listarActividades/:nombreUsuario')
    .get(function (req, res) {
        actividadesApi.listarPorNombreUsuario(req, res);
    });

module.exports = router;
