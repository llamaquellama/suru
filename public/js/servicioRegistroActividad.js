'use strict';
//agregar pUbicacion cuando funcione// 
function registrarActividad(pfoto, pNombreLugar, pNombre, pCategoria, pFechaInicio, pFechaFin, pHorainicio, pHoraFin, pCosto, pCupos, pEtiquetas, pPatrocinadores, pDescripcion, pnombreProvincia, pnombreCanton, pnombreDistrito, pDireccion, platitud, plongitud) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/registrarActividad',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      foto: pfoto,
      nombre: pNombre,
      nombreLugar: pNombreLugar,
      categoria: pCategoria,
      fechaInicio: pFechaInicio,
      fechaFin: pFechaFin,
      horaInicio: pHorainicio,
      horaFin: pHoraFin,
      costo: pCosto,
      cupos: pCupos,
      etiquetas: pEtiquetas,
      patrocinadores: pPatrocinadores,
      descripcion: pDescripcion,
      nombreProvincia: pnombreProvincia,
      nombreCanton: pnombreCanton,
      nombreDistrito: pnombreDistrito,
      direccion: pDireccion,
      latitud: platitud,
      longitud: plongitud,
      nombreUsuario: sessionStorage.getItem('nombreUsuario')
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

function obtenerActividad() {
  let listaActividades = [];
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/listarActividades',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
    }
  });

  peticion.done(function (response) {
    listaActividades = response;
  });

  peticion.fail(function () {

  });

  return listaActividades;
};

function obtenerActividadPorUsuario(){
  let listaLugares = [];
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/listarActividades/' + sessionStorage.getItem('nombreUsuario'),
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
      }
    });
  
    peticion.done(function(response){
      listaLugares = response;
    });
  
    peticion.fail(function(){
     
    });

  return listaLugares;
};
