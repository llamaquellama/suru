'use strict ';

function obtenerListaActividades(){
    let listaActividades = [];
    let peticion =  $.ajax({
        url: 'http://localhost:4000/api/listar_actividad',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
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

function listarActividad(){
    let listaActividad = [];
    let nombreActividad = sessionStorage.getItem('nombre');
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_actividades',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
        listaActividad = response;
      });
    
      peticion.fail(function(){
       
      });
  
    return listaActividad;
  };

 function eliminar_actividad(id_actividad){
        $.ajax({
        url: 'http://localhost:4000/api/borrar_actividad',
        method: 'post',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async:false,
        data: {
            id: id_actividad,
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
