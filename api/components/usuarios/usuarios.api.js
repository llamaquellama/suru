'use strict';
const usuarioModel = require('./usuarios.model');

module.exports.registrar = function(req, res) {
   
    let nuevoUsuario = new usuarioModel({
        rolUsuario : req.body.rolUsuario,
        tipoId : req.body.tipoId,
        id : req.body.id,
        nombreUsuario : req.body.nombreUsuario,
        nombre1 : req.body.nombre1,
        nombre2 : req.body.nombre2,
        apellido1 : req.body.apellido1,
        apellido2 : req.body.apellido2,
        correo : req.body.correo,
        fechaNacimiento : req.body.fechaNacimiento,
        edad : req.body.edad,
        contrasenna : req.body.contrasenna,
        confirmarContrasenna : req.body.confirmarContrasenna,

        /** Empresario */
        IDJuridico : req.body.IDJuridico,
        razonSocial : req.body.razonSocial,
        nombreComercial : req.body.nombreComercial,
        telEmpresa : req.body.telEmpresa,
        correoEmpresa : req.body.correoEmpresa,
        nombreAContacto : req.body.nombreAContacto,
        nombreBContacto : req.body.nombreBContacto,
        apellidoAContacto : req.body.apellidoAContacto,
        apellidoBContacto : req.body.apellidoBContacto,
        correoContacto : req.body.correoContacto,
        telContacto : req.body.telContacto,
        contrasennaEmpresario : req.body.contrasennaEmpresario,
        confirmarContrasennaEmpresario : req.body.confirmarContrasennaEmpresario
    });

    nuevoUsuario.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'El usuario se registró con éxito'}); 
        }
    });
};

module.exports.listarTodos = function(req , res){
    usuarioModel.find({rolUsuario: req.params.rol}).sort({nombreUsuario: 'asc'}).then(
        function(usuarios){
            res.send(usuarios);
        }
    );

};


/*inicio sesion*/

module.exports.validarCredenciales = function(req, res){
    usuarioModel.findOne({nombreUsuario : req.body.nombreUsuario, contrasenna: req.body.contrasenna}).then(
        function(usuario){
            
            if(usuario !== null){
                res.json(
                    {
                        success : true, 
                        tipo: usuario.rolUsuario,
                        nombre: usuario.nombreUsuario
                    }
                );
            }else{
                res.sendStatus(401);
            }          
        }
    );
};
module.exports.obtenerUsuarios = function (req, res) {
    usuarioModel.findOne({ "nombreUsuario": req.body.nombreUsuario }).then(
        function (usuario) {
            res.send(usuario);
        });
};
module.exports.obtenerUsuario = function (req, res) {
    usuarioModel.findOne({ "nombreUsuario": req.params.nombreUsuario }).then(function (usuario) {
        console.log('Usuario: ', usuario)
        if (usuario !== null)
            res.send(usuario);
        else
            res.sendStatus(404);
    })
};
