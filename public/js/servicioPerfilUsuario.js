'use strict ';
function obtenerPerfilUsuario() {
    let verPerfilUsuario = {};
    let nombreUsuario = sessionStorage.getItem('nombreUsuario');
    //let rolUsuario = sessionStorage.getItem('rolUsuario');

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/obtener_usuario/' + nombreUsuario,
        type: 'get',
        contentType: 'aapplication/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
    });
    peticion.done(function (response) {
        verPerfilUsuario = response;
    });
    peticion.fail(function () {

    });
    return verPerfilUsuario;
};

// (prolUsuario, ptipoID, pid, pnombreUsuario, pnombre1, pnombre2, papellido1, papellido2, pcorreo, pfechaNacimiento, pedad, pcontrasenna, pconfirmarContrasenna, pimgPerfil)

function actualizarUsuario(ptipoID, pid, pnombreUsuario, pnombre1, pnombre2, papellido1, papellido2, pcorreo, pfechaNacimiento, pedad, pimgPerfil) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizar_usuario',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            // rolUsuario: prolUsuario,
            tipoId: ptipoID,
            id: pid,
            nombreUsuario: pnombreUsuario,
            nombre1: pnombre1,
            nombre2: pnombre2,
            apellido1: papellido1,
            apellido2: papellido2,
            correo: pcorreo,
            fechaNacimiento: pfechaNacimiento,
            edad: pedad,
            imgPerfil: pimgPerfil
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};

function actualizarEmpresario(pIDJuridico, prazonSocial, pnombreComercial, ptelEmpresa, pcorreoEmpresa, pnombreAContacto, pnombreBContacto, papellidoAContacto, papellidoBContacto, pcorreoContacto, ptelContacto, pnombreUsuarioEmpresario, pnombreProvincia, pnombreCanton, pnombreDistrito, pdireccionExacta ) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizar_usuario',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            // rolUsuario: prolUsuario,
            id: pIDJuridico,
            razonSocial: prazonSocial,
            nombreComercial: pnombreComercial,
            telEmpresa: ptelEmpresa,
            correoEmpresa: pcorreoEmpresa,
            nombre1: pnombreAContacto,
            nombreBContacto: pnombreBContacto,
            apellidoAContacto: papellidoAContacto,
            apellidoBContacto: papellidoBContacto,
            correoContacto: pcorreoContacto,
            telContacto: ptelContacto,
            nombreUsuario: pnombreUsuarioEmpresario,
            nombreProvincia : pnombreProvincia,
            nombreCanton : pnombreCanton,
            nombreDistrito : pnombreDistrito,
            direccionExacta : pdireccionExacta

        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};


//Actualizar Lugares Seguidos ()

function actualizarLugares(pNombreUsuario, listaLugares) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizar_usuario',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            nombreUsuario: pNombreUsuario,
            lugares:listaLugares
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};

// Para el muro del cliente
function getListaActividadesPorNombreLugar(pNombreLugar) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/getListaActividadesPorNombreLugar',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            nombreLugar: pNombreLugar
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
       // respuesta = [];
       respuesta = response;
    });

    return respuesta;
};
