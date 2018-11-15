'use strict';
const actividadModel = require('./actividades.model');

module.exports.registrar = function (req, res) {

    let nuevaActividad = new actividadModel({
        //foto: req.body.foto,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        fecha: req.body.fecha,
        hora: req.body.hora,
        costo: req.body.costo,
        cupos: req.body.cupos,
        etiquetas: req.body.etiquetas,
        patrocinadores: req.body.patrocinadores,
        descripcion: req.body.descripcion,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        canton: req.body.canton,

        //ubicacion: req.body.ubicacion

    });

    nuevaActividad.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar la actividad, ocurrió el siguiente error ' + error });
        } else {
            res.json({ success: true, msg: 'La actividad se registró con éxito' });
        }
    });
};


module.exports.listarTodos = function (req, res) {
    actividadModel.find().sort({ nombre: 'asc' }).then(
        function (actividades) {
            res.send(actividades);
        }
    );

};
