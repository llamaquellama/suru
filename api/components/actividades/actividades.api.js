'use strict';
const actividadModel = require('./actividades.model');

module.exports.registrar = function (req, res) {
    console.log(req.body);
    let nuevaActividad = new actividadModel({
        foto: req.body.foto,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        horaInicio: req.body.horaInicio,
        horaFin: req.body.horaFin,
        costo: req.body.costo,
        cupos: req.body.cupos,
        etiquetas: req.body.etiquetas,
        patrocinadores: req.body.patrocinadores,
        descripcion: req.body.descripcion,
        nombreProvincia : req.body.nombreProvincia,
        nombreCanton : req.body.nombreCanton,
        nombreDistrito : req.body.nombreDistrito,
        direccion: req.body.direccion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        nombreLugar: req.body.nombreLugar,
        nombreUsuario: req.body.nombreUsuario

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

/// agregue este modulo para actividades.html//////
module.exports.obtenerListaActividades = function (req, res) {
    actividadModel.find().sort({ nombre: 'asc' }).then(
        function (perfilactividades) {
            res.send(perfilactividades);
        }
    );

};
/// agregue este modulo para actividades.html//////

/// agregue este modulo para actualizarActividades//////
module.exports.actualizarActividad = function (req, res) {
    actividadModel.findByIdAndUpdate(req.body.idActividad, {$set: req.body},
        function(error){
            if(error){
                res.json({
                    success: false,
                    msj: 'No se pudo actualizar la actividad'})
            }else{
                res.json({
                    success: true,
                    msj: 'La actividad se actualizó con éxito'}) 
            }
        })
};
/// agregue este modulo para actualizarActividades//////

/// agregue este modulo para borrar//////

module.exports.eliminar_actividad = function(req, res){
    actividadModel.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la actividad'});
            }else{
                res.json({success: true ,msg: 'La actividad se eliminó con éxito'}); 
            }
        }
    )
};
/// agregue este modulo para borrar//////

// Obtener Actividad por Nombre de lugar (Para el muro del cliente)
module.exports.obtener_actividad_nombre_lugar = function (req, res) {
    console.log('actividad:' + req.query.nombreLugar );
    actividadModel.find({ 'nombreLugar': req.query.nombreLugar }).then(
        function (actividades) {
            res.send(actividades);
        });
};

////agregar9/////

module.exports.listarPorNombreUsuario = function (req, res) {
    actividadModel.find({ nombreUsuario: req.params.nombreUsuario}).then(
        function (actividades) {
            res.send(actividades);
        }
    );

};