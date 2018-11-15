'use strict ';

function obtenerListaActividades(){
    let listaActividades = [];
    let peticion =  $.ajax({
        url: 'http://localhost:4000/api/listar_actividades',
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

