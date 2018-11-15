'use strict';
const lugarModel = require('./lugares.model');

module.exports.registrar = function (req, res) {

    let nuevoLugar = new lugarModel({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        google: req.body.google,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        canton: req.body.canton,

    });

    nuevoLugar.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el lugar, ocurrió el siguiente error ' + error });
        } else {
            res.json({ success: true, msg: 'El usuario se registró con éxito' });
        }
    });
};


module.exports.listarTodos = function (req, res) {
    lugarModel.find().sort({ nombre: 'asc' }).then(
        function (lugares) {
            res.send(lugares);
        }
    );

};
