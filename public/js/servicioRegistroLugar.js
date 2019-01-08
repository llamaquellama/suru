'use strict';

function registrarLugar (pfoto, pNombre, pCategoria, pDescripcion, pFacebook, pTwitter, pInstagram, pYoutube, pnombreProvincia, pnombreCanton, pnombreDistrito, pDireccion, platitud, plongitud){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrarLugar',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            foto: pfoto,
            nombre: pNombre,
            categoria: pCategoria,
            descripcion: pDescripcion,
            facebook: pFacebook,
            twitter: pTwitter,
            instagram: pInstagram,
            youtube: pYoutube,
            nombreProvincia : pnombreProvincia,
            nombreCanton : pnombreCanton,
            nombreDistrito : pnombreDistrito,
            direccion: pDireccion,
            latitud: platitud,
            longitud: plongitud,
            nombreUsuario: sessionStorage.getItem('nombreUsuario')
        }
      });
    
      peticion.done(function(response){
        respuesta = response;
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

     return respuesta; 
};

function obtenerLugar(){
    let listaLugares = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listarLugares',
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


function buscar_lugar(pid_lugar){
  let lugar = [];
  $.ajax({
    url: 'http://localhost:4000/api/buscarLugar',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType : 'json',
    async: false,
    data:{
        id : pid_lugar
    },
    beforeSend: function beforeSend() {

    },
    success: function success(response) {
      lugar = response;
    },
    error: function error(_error) {
      console.log("Request fail error:" + _error);
    }
  });

  return lugar;

};

function actualizarLugar(pid_lugar,pfoto, plugar, pcategoria, pdescripcion, pfacebook, ptwitter, pinstagram, pyoutube, pnombreProvincia, pnombreCanton, pnombreDistrito, pdireccion, platitud, pLongitud) {
  let respuesta = '';
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/actualizarLugar',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
          id: pid_lugar,
          foto: pfoto,
          nombre: plugar,
          categoria: pcategoria,
          descripcion: pdescripcion,
          facebook: pfacebook,
          twitter:  ptwitter,
          instagram: pinstagram,
          youtube: pyoutube,
          nombreProvincia : pnombreProvincia,
          nombreCanton : pnombreCanton,
          nombreDistrito : pnombreDistrito,
          direccion: pdireccion,
          latitud: platitud,
          longitud: pLongitud
      }
    });
  
    peticion.done(function(response){
      respuesta = response;
    });
  
    peticion.fail(function(response){
      respuesta = response;
    });

   return respuesta; 

};

function obtenerLugaresPorUsuario(){
  let listaLugares = [];
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/listarLugares/' + sessionStorage.getItem('nombreUsuario'),
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
//probar con eliminar
function borrarLugar(pid_lugar){
  $.ajax({
    url: 'http://localhost:4000/api/borrarLugar',
    method: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType : 'json',
    async: false,
    data:{
        id : pid_lugar
    },
    beforeSend: function beforeSend() {

    },
    success: function success(response) {

    },
    error: function error(_error) {
      console.log("Request fail error:" + _error);
    }
  });
};

// function borrarLugar(pid_lugar){
//   $.ajax({   
//     url: 'http://localhost:4000/api/borrarLugar',
//     method: 'post',
//     contentType: 'application/x-www-form-urlencoded; charset=utf-8',

//     data:{
//         id : pid_lugar
//     },
//     beforeSend: function beforeSend() {

//     },
//     success: function success(response) {

//     },
//     error: function error(_error) {
//       console.log("Request fail error:" + _error);
//     }
//   });
// };

// Para el Muro del cliente
function obtenerUsuarioPorNombre(pNombreusuario){
  let Usuario = '';
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/obtener_usuario_nombre',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
        nombreUsuario : pNombreusuario
      }
    });
  
    peticion.done(function(response){
      Usuario = response;
    });
  
    peticion.fail(function(response){
      Usuario = response;
    });

  return Usuario;
};

///////agrgar 9 //////
function buscarLugarPorNombre(nombreLugar){
  let lugar = {};
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/lugaresPorNombre/'+nombreLugar,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
      }
    });
  
    peticion.done(function(response){
      lugar = response;
    });
  
    peticion.fail(function(){
     
    });

  return lugar;
};