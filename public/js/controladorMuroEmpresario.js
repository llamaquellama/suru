
'use strict';
const inputBuscarLugar = document.querySelector('#buscarLugar');

let nombreUsuarioSession = sessionStorage.getItem('nombreUsuario');



mostrarListaActividades();
mostrarListaLugares();

function obtenerListaActividades() {
    let listaActividadesBuscar = getListarLugaresSeguidos();
    let listaActividades = [];

    for (let index = 0; index < listaActividadesBuscar.length; index++) {
        var listaActividadesPorLugar = getListaActividadesPorNombreLugar(listaActividadesBuscar[index].nombre);
        for (let j = 0; j < listaActividadesPorLugar.length; j++) {
            listaActividades.push(listaActividadesPorLugar[j]);
            
        }
    }
    return listaActividades;
}

function getListarLugaresSeguidos() {

    let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));

    if(usuarioInfo.lugares == undefined) {
        usuarioInfo.lugares = [];
    } else {
        usuarioInfo.lugares = JSON.parse(usuarioInfo.lugares);
    }
    return usuarioInfo.lugares;
}
//Búsqueda Lugares
inputBuscarLugar.addEventListener('keyup', mostrarListaLugares);

function mostrarListaActividades() {
    let cardContainer = document.querySelector('#card-container');
    let listaActividades = obtenerListaActividades();


    for (let i = 0; i < listaActividades.length; i++) {

        // creación del card 
        let cardActividad = document.createElement('div');
        cardActividad.classList.add('card');


        let imagenActividad = document.createElement('img');
        imagenActividad.src = listaActividades[i]['foto'];
        imagenActividad.classList.add('card-img-top');
        cardActividad.appendChild(imagenActividad);

        // Div Información Lugar
        let divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        // Fecha de la actividad
        let divCalendario = document.createElement('div');
        divCalendario.classList.add('divCalendario');
        divCardBody.appendChild(divCalendario);

        let iconoCalendario = document.createElement('i');
        iconoCalendario.classList.add('far');
        iconoCalendario.classList.add('fa-calendar-alt');
        divCalendario.appendChild(iconoCalendario);

        let fechaActividadMostrar = document.createElement('p');
        fechaActividadMostrar.classList.add('txt-small');

        let fechaActividad = new Date(listaActividades[i]['fechaInicio']);
        let dia = fechaActividad.getDate();
        let mes = fechaActividad.getMonth() + 1;
        let anno = fechaActividad.getFullYear();
    
        if (dia < 10 ) {
            dia = "0"+ dia;
        }   
        
        if (mes < 10) {
            mes = "0" + mes;
        }
        fechaActividadMostrar.innerText = dia + "/" + mes + "/" + anno;

        divCalendario.appendChild(fechaActividadMostrar);

        // Hora actividad
        let divHora = document.createElement('div');
        divHora.classList.add('divFecha');
        divCardBody.appendChild(divHora);

        let iconoHora = document.createElement('i');
        iconoHora.classList.add('far');
        iconoHora.classList.add('fa-clock');
        divHora.appendChild(iconoHora);

        let horaActividadMostrar = document.createElement('p');
        horaActividadMostrar.classList.add('txt-small');
        horaActividadMostrar.innerText = "Inicia:" + " " + listaActividades[i]['horaInicio']+ " " + "Finaliza:" + " " + listaActividades[i]['horaFin'];
        divHora.appendChild(horaActividadMostrar);



        let nombreActividad = document.createElement('h5');
        nombreActividad.classList.add('card-title');
        nombreActividad.innerText = listaActividades[i]['nombre'];
        divCardBody.appendChild(nombreActividad);

        let lugarActividad = document.createElement('small');
        lugarActividad.classList.add('text-muted');
        lugarActividad.innerText = listaActividades[i]['nombreLugar'];
        divCardBody.appendChild(lugarActividad);

        let descripcionActividad = document.createElement('p');
        descripcionActividad.classList.add('mt-3');
        descripcionActividad.classList.add('card-text');
        descripcionActividad.innerText = listaActividades[i]['descripcion'];
        divCardBody.appendChild(descripcionActividad);


        // Div Botones
        let divCardFooter = document.createElement('div');
        divCardFooter.classList.add('card-footer');


        let botonReservar = document.createElement('a');
        botonReservar.classList.add('btnsuru');
        botonReservar.innerText = 'Reservar';
        divCardFooter.appendChild(botonReservar);


        cardActividad.appendChild(divCardBody);
        cardActividad.appendChild(divCardFooter);
        cardContainer.appendChild(cardActividad);


    }
};

function mostrarListaLugares() {

    // let filtro = inputBuscarLugar.value;
    let boxContainerLugar = document.querySelector('#boxContainerLugar');
    let listaLugares = getListarLugaresSeguidos();


    for (let i = 0; i < listaLugares.length; i++) {
        if(listaLugares[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){

        // creación del div
        let boxLugar = document.createElement('div');
        boxLugar.classList.add('box-lugar');

        // Creación de la imagen
        let thumbContenedor = document.createElement('div');
        thumbContenedor.classList.add('thumbContainer');
        boxLugar.appendChild(thumbContenedor);

        let imagenLugar = document.createElement('img');
        imagenLugar.src = listaLugares[i]['foto'];
        imagenLugar.classList.add('img-fluid');
        imagenLugar.classList.add('rounded-circle');
        imagenLugar.classList.add('thumbnail-img');
        thumbContenedor.appendChild(imagenLugar);
        boxLugar.appendChild(thumbContenedor);

        // Div Información Lugar
        let divInfoLugar = document.createElement('div');
        divInfoLugar.classList.add('lugarContainer');

        let nombreLugar = document.createElement('h6');
        nombreLugar.innerText = listaLugares[i]['nombre'];
        divInfoLugar.appendChild(nombreLugar);

        let UbicacionLugar = document.createElement('small');
        UbicacionLugar.innerText = listaLugares[i]['nombreCanton'] + "," + " " + listaLugares[i]['nombreDistrito'];
        divInfoLugar.appendChild(UbicacionLugar);


        boxLugar.appendChild(divInfoLugar);
        boxContainerLugar.appendChild(boxLugar);


    }
   }
};
