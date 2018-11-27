'use strict';
//agregar pUbicacion cuando funcione// 
function registrarActividad (pfoto,pNombre, pCategoria, pFecha, pHora, pCosto, pCupos, pEtiquetas, pPatrocinadores, pDescripcion, pnombreProvincia, pnombreCanton, pnombreDistrito, pDireccion, pUbicacion){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrarActividad',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            foto: pfoto,
            nombre: pNombre,
            categoria: pCategoria,
            fecha: pFecha,
            hora: pHora,
            costo: pCosto,
            cupos: pCupos,
            etiquetas: pEtiquetas,
            patrocinadores: pPatrocinadores,
            descripcion: pDescripcion,
            nombreProvincia : pnombreProvincia,
            nombreCanton : pnombreCanton,
            nombreDistrito : pnombreDistrito,
            direccion: pDireccion,
            ubicacion: pUbicacion
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

function obtenerActividad(){
    let listaActividades = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listarActividades',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
        listaActividades = response;
      });
    
      peticion.fail(function(){
       
      });

    return listaActividades;
};