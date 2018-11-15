'use strict ';

function registrarPatrocinador(fotoPatrocinador, tipoIndustria, nombrePatrocinador){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrarPatrocinadores',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            fotoPatrocinador : fotoPatrocinador,
            tipoIndustria : tipoIndustria,
            nombrePatrocinador : nombrePatrocinador,
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

function obtenerPatrocinador(){
  let listarPatrocinador = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listarPatrocinadores',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{

        }
      });
    
      peticion.done(function(response){
        listarPatrocinador = response;
      });
    
      peticion.fail(function(){

      });

     return listarPatrocinador; 
};