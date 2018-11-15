'use strict';
const patrocinadorModel = require('./patrocinadores.model');

module.exports.registrarPatrocinador = function(req, res){

    let nuevoPatrocinador = new patrocinadorModel({
        fotoPatrocinador:  req.body.fotoPatrocinador,
        tipoIndustria: req.body.tipoIndustria,
        nombrePatrocinador: req.body.tipoIndustria

    });

    nuevoPatrocinador.save(function(error){
        if(error == true){
            res.json({success : false, msg: 'No se pudo registrar el patrocinador, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'El patrocinador se registró con éxito'});
        }
    });
}

module.exports.obtenerPatrocinador = function(req , res){
    patrocinadorModel.find().then(
        function(patrocinador){
            res.send(patrocinador);
        }
    );

};
