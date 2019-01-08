'use strict';

function registrarRating(pidActividad, pnombreUsuario, pratingActividad) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/registrarRating',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {

      idActividad : pidActividad,
      nombreUsuario : pnombreUsuario,
      ratingActividad : pratingActividad
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



function obtenerRatingActividad() {
  let listaRatings = [];
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/listarRatings',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
    }
  });

  peticion.done(function (response) {
    listaRatings = response;
  });

  peticion.fail(function () {

  });

  return listaRatings;
};

