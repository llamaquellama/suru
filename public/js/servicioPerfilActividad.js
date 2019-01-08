'use strict ';
function obtenerPerfilActividad(){
    let verPerfilActividad = {};
    let peticion = $.ajax({
        url:'http://localhost:4000/api/ver_perfil_actividad/'+localStorage.getItem('idActividad'),
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

function actualizarActividad(id_actividad, foto, nombre, categoria, fechaI, fechaF, horaI, horaF, costo, cupo, etiquetas, patrocinador, descripcion, provincia, canton, distrito, direccionEspecifica, platitud, pLongitud){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/editarActividad',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            idActividad: id_actividad,
            foto: foto,
            nombre: nombre,
            categoria: categoria,
            fechaInicio: fechaI,
            fechaFin: fechaF,
            horaInicio: horaI,
            horaFin: horaF,
            costo: costo,
            cupos: cupo,
            etiquetas: etiquetas,
            patrocinadores: patrocinador,
            descripcion: descripcion,
            nombreProvincia : provincia,
            nombreCanton : canton,
            nombreDistrito : distrito,
            direccion: direccionEspecifica,
            latitud: platitud,
            longitud: pLongitud
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

