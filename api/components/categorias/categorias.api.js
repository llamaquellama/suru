'use strict ';

const categoriasModel = require('./categorias.model');

 module.exports.registrarCategoria = function(req, res){

    let nuevaCategoria = new categoriasModel({
        iconoCategoria: req.body.iconoCategoria,
        nombreCategoria: req.body.nombreCategoria,
        descripcionCategoria: req.body.descripcionCategoria

    });

    nuevaCategoria.save(function(error){
        if(error){
            res.json({success: false, msj:'No se pudo registrar la categoría, ocurrió el siguiente error ' + error});
        }else{
            res.json({success: true, msj:'La categoría se registró con éxito'});
        }
    });

 };
 module.exports.listarTodasCategorias = function(req , res){
    categoriasModel.find().then(
        function(categorias){
            res.send(categorias);
        }
    );

};

