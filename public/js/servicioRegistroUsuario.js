'use strict';

function registrarUsuario(prolUsuario, ptipoID, pid, pnombreUsuario, pnombre1, pnombre2, papellido1, papellido2, pcorreo, pfechaNacimiento, pedad, pcontrasenna, pimgPerfil) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/registrarUsuario',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      rolUsuario: prolUsuario,
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
      contrasenna: pcontrasenna,
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


function registrarEmpresario(prolUsuario, pIDJuridico, prazonSocial, pnombreComercial, ptelEmpresa, pcorreoEmpresa, pnombreAContacto, pnombreBContacto, papellidoAContacto, papellidoBContacto, pcorreoContacto, ptelContacto, pcontrasennaEmpresario, pnombreUsuario, pnombreProvincia, pnombreCanton, pnombreDistrito, pdireccionExacta) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/registrarUsuario',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      rolUsuario: prolUsuario,
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
      contrasenna: pcontrasennaEmpresario,
      nombreUsuario: pnombreUsuario,
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