'use strict';

const nodeMailer = require('nodemailer');
const usuarioModel = require('./usuarios.model');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mantiscenfo@gmail.com',
        pass: 'surumantis2018'
    }

});

module.exports.registrar = function (req, res) {

    let nuevoUsuario = new usuarioModel({
        rolUsuario: req.body.rolUsuario,
        tipoId: req.body.tipoId,
        id: req.body.id,
        nombreUsuario: req.body.nombreUsuario,
        nombre1: req.body.nombre1,
        nombre2: req.body.nombre2,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        correo: req.body.correo,
        fechaNacimiento: req.body.fechaNacimiento,
        edad: req.body.edad,
        contrasenna: req.body.contrasenna,
        confirmarContrasenna: req.body.confirmarContrasenna,
        imgPerfil: req.body.imgPerfil,


        /** Empresario */
        IDJuridico: req.body.IDJuridico,
        razonSocial: req.body.razonSocial,
        nombreComercial: req.body.nombreComercial,
        telEmpresa: req.body.telEmpresa,
        correoEmpresa: req.body.correoEmpresa,
        nombreAContacto: req.body.nombreAContacto,
        nombreBContacto: req.body.nombreBContacto,
        apellidoAContacto: req.body.apellidoAContacto,
        apellidoBContacto: req.body.apellidoBContacto,
        correoContacto: req.body.correoContacto,
        telContacto: req.body.telContacto,
        nombreProvincia: req.body.nombreProvincia,
        nombreCanton: req.body.nombreCanton,
        nombreDistrito: req.body.nombreDistrito
    });

    nuevoUsuario.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error ' + error });
        } else {
            let mailOptions = {
                from: 'mantiscenfo@gmail.com',
                to: nuevoUsuario.correo,
                subject: 'Bienvenido a Suru',
                html: `<!DOCTYPE html>
                <html>
                
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i"
                        rel="stylesheet">
                </head>
                <body>
                    <main>
                        <p>
                        <style> 
                        body {
                            font-family: 'Montserrat', sans-serif;
                            text-align: center;
                        }
                         </style>
                            Saludos ${nuevoUsuario.nombre} 
                        </p>
                            <a href="https:index.html">
                                <img alt="bienvenida suru" src="https://res.cloudinary.com/mantiscenfo/image/upload/v1543272141/bienvenidaSuru.jpg"
                                    width="600" height="900">
                            </a>
                    
                    </main>
                </body>
                </html>`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else{
                    console.log('Correo enviado' + info.response);
                }

            })
            res.json({ success: true, msg: 'El usuario se registró con éxito' });
        }
    }
    );
};

module.exports.listarTodos = function (req, res) {
    usuarioModel.find({ rolUsuario: req.params.rol }).sort({ nombreUsuario: 'asc' }).then(
        function (usuarios) {
            res.send(usuarios);
        }
    );

};


/*inicio sesion*/

module.exports.validarCredenciales = function (req, res) {
    usuarioModel.findOne({ nombreUsuario: req.body.nombreUsuario, contrasenna: req.body.contrasenna }).then(
        function (usuario) {

            if (usuario !== null) {
                res.json(
                    {
                        success: true,
                        tipo: usuario.rolUsuario,
                        nombre: usuario.nombreUsuario
                    }
                );
            } else {
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
//muestra perfil de usuario al empresario
module.exports.buscar_usuario = function (req, res) {
    usuarioModel.findOne({ _id: req.body.id }).then(
        function (usuario) {
            if (usuario) {
                res.send(usuario);
            } else {
                res.send('No se encontró el usuario');
            }
        }
    )
};
