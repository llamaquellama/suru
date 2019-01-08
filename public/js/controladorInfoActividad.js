
'use strict ';


let ratingsActividad = obtenerRatingActividad();

mostrarActividad();

let botonCalificar = document.querySelector('#btnCalificar');

let idActividad = localStorage.getItem('idActividad');
let nombreUsuario = sessionStorage.getItem('nombreUsuario');


$('.raty').raty();






function obtenerDatos() {

    var ratingActividad = document.querySelector('input[type=radio]:checked').value;



   let respuesta = registrarRating (idActividad, nombreUsuario, ratingActividad);

            if (respuesta.success) {

                swal({
                    type: 'success',
                    title: 'Calificado',
                    text: 'Calificaste esta actividad',
                }).then(function () {
                    window.location.href = "infoActividad.html";
                });
            }
            else {

                swal({
                    type: 'warning',
                    title: 'No se pudo procesar calificación',
                    text: respuesta.msg
                });
            }

};



function mostrarActividad() {

    let perfilActividad = obtenerPerfilActividad();

    let todosRating = 0;
    let ratingActividadActual = 0;
    for (let i = 0; i < ratingsActividad.length; i++) {
        let idActividad = localStorage.getItem('idActividad');
        if(ratingsActividad[i].idActividad == idActividad){
            ratingActividadActual ++;
            todosRating += ratingsActividad[i]['ratingActividad']; 
        }
    
    }
    let avg = todosRating / ratingActividadActual; 

    let rating = document.querySelector('#ratingAverage');
    rating.innerHTML = "("+ avg.toFixed(1) + ")" + " " + "(" +  ratingActividadActual + " Calificaciones)";

    let ratingActividad = document.querySelector('#ratingActividad');
    ratingActividad.setAttribute("data-score", avg);


    let  imagenActividad =  document.querySelector('#imagenActividad');
    imagenActividad.src = perfilActividad['foto'];

    let nombre = document.querySelector('#nombreActividad');
    nombre.innerHTML = perfilActividad.nombre;

    let descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = perfilActividad.descripcion;

    let fechaInicioDato = document.querySelector('#fechaInicio');

    let fechaInicio = new Date(perfilActividad.fechaInicio);
    let dia = fechaInicio.getDate();
    let mes = fechaInicio.getMonth() + 1;
    let anno = fechaInicio.getFullYear();

    if (dia < 10) {
        dia = "0" + dia;
    }

    if (mes < 10) {
        mes = "0" + mes;
    }
    fechaInicioDato.innerHTML = dia + "/" + mes + "/" + anno;


    let horaInicio = document.querySelector('#horaInicio');
    horaInicio.innerHTML = perfilActividad.horaInicio;

    let horaFin = document.querySelector('#horaFin');
    horaFin.innerHTML = perfilActividad.horaFin;


    let costo = document.querySelector('#costo');
    costo.innerHTML = "₡" + perfilActividad.costo;

    let lugarActividad = document.querySelector('#lugarActividad');
    lugarActividad.innerHTML = perfilActividad.nombreLugar;

    let direccionActividad = document.querySelector('#direccionActividad');
    direccionActividad.innerHTML = perfilActividad.direccion;

    let ubicacionActividad = document.querySelector('#ubicacionActividad');
    ubicacionActividad.innerHTML = perfilActividad.nombreCanton + ", " + perfilActividad.nombreDistrito;

    // Div Información Lugar
    let divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    let infoImportante = document.createElement('div');
    infoImportante.classList.add('list-group');
    infoImportante.classList.add('list-group-flush');



    // Div Botones
    let divCardFooter = document.createElement('div');
    divCardFooter.classList.add('card-footer');






};

botonCalificar.addEventListener('click', obtenerDatos);
