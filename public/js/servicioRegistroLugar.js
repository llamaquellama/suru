'use strict';
//agregar pUbicacion cuando funcione// 
function registrarLugar (pfoto, pNombre, pCategoria, pDescripcion, pFacebook, pTwitter, pInstagram, pYoutube, pnombreProvincia, pnombreCanton, pnombreDistrito, pDireccion, platitudLongitud){
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
            latitudLongitud: platitudLongitud
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