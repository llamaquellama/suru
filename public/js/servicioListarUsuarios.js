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

function buscar_usuario(pid_usuario){
  let usuario = [];
    $.ajax({
    url: 'http://localhost:4000/api/buscar_usuario',
    type: 'POST',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    async: false,
    data: {
      id: pid_usuario
    },
    beforeSend: function beforeSend(){
    },
    success: function success(response){
      usuario = response;
      
    },
    error: function error (_error){
      console.log("Request fail error" + _error);
    }
  });
    return usuario;

};