'use strict';
const actividadModel = require('./actividades.model');

module.exports.registrar = function (req, res) {

    let nuevaActividad = new actividadModel({
        foto: req.body.foto,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        fecha: req.body.fecha,
        hora: req.body.hora,
        costo: req.body.costo,
        cupos: req.body.cupos,
        etiquetas: req.body.etiquetas,
        patrocinadores: req.body.patrocinadores,
        descripcion: req.body.descripcion,
        nombreProvincia : req.body.nombreProvincia,
        nombreCanton : req.body.nombreCanton,
        nombreDistrito : req.body.nombreDistrito,
        direccion: req.body.direccion,
        ubicacion: req.body.ubicacion

    });

    nuevaActividad.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar la actividad, ocurrió el siguiente error ' + error });
        } else {
            res.json({ success: true, msg: 'La actividad se registró con éxito' });
        }
    });
};


// module.exports.listarTodos = function (req, res) {
//     actividadModel.find().sort({ nombre: 'asc' }).then(
//         function (actividades) {
//             res.send(actividades);
//         }
//     );

// };

module.exports.obtenerActividad = function (req, res) {
    actividadModel.find().sort({ nombre: 'asc' }).then(
        function (actividades) {
            res.send(actividades);
        }
    );

};
module.exports.listarActividad = function (req, res) {
    actividadModel.find().then(
        function (perfilactividades) {
            res.send(perfilactividades);
        }
    );

};
module.exports.obtenerPerfilActividad = function (req, res) {
    actividadModel.findOne({_id: req.params.id}).then(
        function (perfilactividades) {
            res.send(perfilactividades);
        }
    );

};
