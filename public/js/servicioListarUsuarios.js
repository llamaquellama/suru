'use strict';

function obtenerUsuarios(rol){
    let listaUsuarios = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listarUsuarios/'+rol,
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
        listaUsuarios = response;
      });
    
      peticion.fail(function(){
       
      });

    return listaUsuarios;
};