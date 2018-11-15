'use strict ';
function obtenerPerfilUsuario(){
    let verPerfilUsuario = {};
    let nombreUsuario = sessionStorage.getItem('nombreUsuario');
    //let rolUsuario = sessionStorage.getItem('rolUsuario');

    let peticion = $.ajax({
        url:'http://localhost:4000/api/obtener_usuario/'+ nombreUsuario,
        type: 'get',
        contentType: 'aapplication/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
    });
    peticion.done(function(response){
        verPerfilUsuario = response; 
    });
    peticion.fail(function(){

    });
    return verPerfilUsuario;
};