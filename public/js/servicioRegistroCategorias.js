'use strict';
function registrarCategoria(iconoCategoria, nombreCategoria, descripcionCategoria){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrarCategoria',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            iconoCategoria : iconoCategoria,
            nombreCategoria : nombreCategoria,
            descripcionCategoria: descripcionCategoria
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

function listarCategorias(){
    let listarCategorias = [];
    let  peticion = $.ajax({
        url: 'http://localhost:4000/api/listarCategorias',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data:{

        }
    });
    peticion.done(function(response){
        listarCategorias = response;
    });

    peticion.fail(function(){

    });
    return listarCategorias;
};