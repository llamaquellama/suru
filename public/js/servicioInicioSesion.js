
'use strict';
function validarCredenciales(usuario, contrasenna){
    let respuesta = false;
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/validar_credenciales',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            nombreUsuario :usuario,
            contrasenna : contrasenna
        }
      });
    
      peticion.done(function(response){
        respuesta =  response;
        sessionStorage.setItem('conectado' , response.success);
        sessionStorage.setItem('tipo' , response.tipo);
        sessionStorage.setItem('nombreUsuario' , response.nombre);
        
      });
    
      peticion.fail(function(){
       
      });

      return respuesta;

};

