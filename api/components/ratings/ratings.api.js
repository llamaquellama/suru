'use strict';
const ratingModel = require('./ratings.model');

module.exports.registrar = function (req, res) {

    let nuevoRating = new ratingModel({

        idActividad: req.body.idActividad,
        nombreUsuario: req.body.nombreUsuario,
        ratingActividad: req.body.ratingActividad

    });

    nuevoRating.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar la calificación, ocurrió el siguiente error ' + error });
        } else {
            res.json({ success: true, msg: 'La calificiación se guardó con éxito' });
        }
    });
};


module.exports.listarTodos = function (req, res) {
    ratingModel.find().sort({ nombre: 'asc' }).then(
        function (ratings) {
            res.send(ratings);
        }
    );

};


