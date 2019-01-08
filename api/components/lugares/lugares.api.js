'use strict';
const lugarModel = require('./lugares.model');

module.exports.registrar = function (req, res) {

    let nuevoLugar = new lugarModel({
        foto: req.body.foto,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        youtube: req.body.youtube,
        nombreProvincia: req.body.nombreProvincia,
        nombreCanton: req.body.nombreCanton,
        nombreDistrito: req.body.nombreDistrito,
        direccion: req.body.direccion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        nombreUsuario: req.body.nombreUsuario

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

module.exports.buscarLugar = function (req, res) {
    lugarModel.findOne({ _id: req.body.id }).then(
        function (lugar) {
            if (lugar) {
                res.send(lugar);
            } else {
                res.send('No se encontró el lugar');
            }
        }
    )
};

module.exports.actualizarLugar = function (req, res) {
    lugarModel.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar el lugar' });
            } else {
                res.json({ success: true, msg: 'El lugar se actualizó con éxito' });

            }
        }
    )
};

//guarda el nombre del usuario en el lugar

module.exports.listarPorNombreUsuario = function (req, res) {
    lugarModel.find({ nombreUsuario: req.params.nombreUsuario}).then(
        function (lugares) {
            res.send(lugares);
        }
    );

};

module.exports.borrar = function (req, res) {
    lugarModel.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo borrar el lugar' });
            } else {
                res.json({ success: true, msg: 'El lugar se borró con éxito' });

            }
        }
    )
};
///////agregar 9/////////
module.exports.buscarLugarPorNombre = function (req, res) {
    lugarModel.findOne({ nombre: req.params.nombre}).then(
        function (lugar) {
            res.send(lugar);
        }
    );

};
