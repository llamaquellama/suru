'use strict ';
function obtenerPerfilActividad(){
    let verPerfilActividad = [];
    let peticion = $.ajax({
        url:'http://localhost:4000/api/ver_perfil_actividad',
        type: 'get',
        contentType: 'aapplication/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
    });
    peticion.done(function(response){
        verPerfilActividad = response; 
    });
    peticion.fail(function(){

    });
    return verPerfilActividad;
};