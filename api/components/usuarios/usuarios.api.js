'use strict';

const nodeMailer = require('nodemailer');
const usuarioModel = require('./usuarios.model');
const actividadesModel = require('../actividades/actividades.model');

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
        imgPerfil: req.body.imgPerfil,
        lugares : "[]",


        /** Empresario */
        IDJuridico: req.body.IDJuridico,
        razonSocial: req.body.razonSocial,
        nombreComercial: req.body.nombreComercial,
        telEmpresa: req.body.telEmpresa,
        correoEmpresa: req.body.correoEmpresa,
        nombreBContacto: req.body.nombreBContacto,
        apellidoAContacto: req.body.apellidoAContacto,
        apellidoBContacto: req.body.apellidoBContacto,
        correoContacto: req.body.correoContacto,
        telContacto: req.body.telContacto,
        nombreProvincia: req.body.nombreProvincia,
        nombreCanton: req.body.nombreCanton,
        nombreDistrito: req.body.nombreDistrito,
        direccionExacta: req.body.direccionExacta

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
                            Saludos ${nuevoUsuario.nombre1}
                        </p>
                            <a href="http://localhost:3000/public/index.html">
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
                        nombre: usuario.nombreUsuario,
                        nombre1: usuario.nombre1
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
//muestra perfil de usuario al administrador
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

//Busca usuario por nombre de usuario (Actualizar Usuario)
module.exports.actualizar_usuario = (req, res) => {
    usuarioModel.update({ nombreUsuario: req.body.nombreUsuario }, req.body, (error, user) => {
        if (error) {
            res.json({ success: false, msg: 'No se ha actualizado.' + handleError(error) });

        } else {
            res.json({ success: true, msg: 'Se ha actualizado correctamente el usuario.' + res });
        }
    });
};


//Seguir o dejar de seguir Lugares

module.exports.modificarListaLugares = function (req, res) {
    const lugarAModificar = req.body.id_lugar;
    if (!lugarAModificar) {
        res.json({ success: false, msg: 'ID del lugar es null ' });
        return;
    }
    usuarioModel.findOne({ "nombreUsuario": req.params.nombreUsuario }).then(
        function (usuario) {
            let lugar = usuario.lugares.filter(lugar => lugar == lugarAModificar);
            if (lugar.length == 0) {
                usuario.lugares.push(actividadAModificar);
            } else {
                usuario.lugares.splice(usuario.lugares.indexOf(lugarAModificar), 1);
            }
            usuario.save(function (error) {
                if (error) {
                    res.json({ success: false, msg: 'No se pudo agregar el lugar, ocurrió el siguiente error ' + error });
                } else {
                    res.json({ success: true, msg: 'El lugar se agregó con éxito' });
                }
            });

        }
    )
};

//Mostrar Lugares seguidos
module.exports.mostrarLugaresUsuario = function (req, res) {
    usuarioModel.findOne({ "nombreUsuario": req.params.nombreUsuario }).then(function (usuario) {
        if (usuario !== null) {
            lugaresModel.find({
                '_id': { $in: usuario.lugares }
            }).then(function (lugares) {
                res.send(lugares);
            })
        } else
            res.sendStatus(404);
    })
};


// Para el muro del cliente
module.exports.obtener_usuario_nombre = function (req, res) {
    usuarioModel.findOne({ 'nombreUsuario': req.query.nombreUsuario }).then(
        function (usuario) {
            if (usuario) {
                res.send(usuario);
            } else {
                res.send('No se encontró el usuario');
            }
        }
    )
};