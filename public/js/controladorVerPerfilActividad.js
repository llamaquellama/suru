'use strict';

let inputFiltro = document.querySelector('#txtFiltro');
let perfilLugar = obtenerLugaresPorUsuario();

let listaActividades = obtenerActividad();
//let mostrarPerfilActivdad = obtenerListaActividades();
let mostrarPerfilActivdad = obtenerActividadPorUsuario();


inputFiltro.addEventListener('keyup', mostrarListaActvidades);
mostrarListaActvidades();
function mostrarListaActvidades() {
    let cardContainer = document.querySelector('#deck-lugares ');
    let filtro = inputFiltro.value;
    cardContainer.innerHTML = '';
    for (let i = 0; i < mostrarPerfilActivdad.length; i++) {
        if (mostrarPerfilActivdad[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
            // console.log(mostrarPerfilActivdad[i])
            // creación del card 
            let colLugar = document.createElement('div');
            colLugar.classList.add('col-md-6');

            let cardLugar = document.createElement('div');
            cardLugar.classList.add('card');
            colLugar.appendChild(cardLugar);

            let imagenLugar = document.createElement('img');
            imagenLugar.src = mostrarPerfilActivdad[i]['foto'];
            imagenLugar.classList.add('card-img-top');
            cardLugar.appendChild(imagenLugar);

            // Div Información Lugar
            let divCardBody = document.createElement('div');
            divCardBody.classList.add('card-body');

            let calendario = document.createElement("a");
            calendario.href = '#';
            calendario.classList.add('far');
            calendario.classList.add('fa-calendar-alt');
            calendario.classList.add('estiloFas');
            divCardBody.appendChild(calendario);
            let pFechaInicio = document.createElement("a");
            pFechaInicio.innerHTML = parseDate(mostrarPerfilActivdad[i]['fechaInicio']) + ' ' + 'al';
            pFechaInicio.classList.add('pl-3');
            pFechaInicio.classList.add('colorGris');
            divCardBody.appendChild(pFechaInicio);
            let pFechaFin = document.createElement("a");
            pFechaFin.innerHTML = parseDate(mostrarPerfilActivdad[i]['fechaFin']);
            pFechaFin.classList.add('pl-2');
            pFechaFin.classList.add('pr-3');
            pFechaFin.classList.add('mr-5');
            pFechaFin.classList.add('colorGris');
            divCardBody.appendChild(pFechaFin);
            let reloj = document.createElement("a");
            reloj.href = '#';
            reloj.classList.add('far');
            reloj.classList.add('fa-clock');
            reloj.classList.add('estiloFas');
            divCardBody.appendChild(reloj);
            let pHoraInicio = document.createElement("a");
            pHoraInicio.innerHTML = mostrarPerfilActivdad[i]['horaInicio'] + ' ' + 'a' + ' ';
            pHoraInicio.classList.add('pl-3');
            pHoraInicio.classList.add('colorGris');
            divCardBody.appendChild(pHoraInicio);
            let pHoraFin = document.createElement("a");
            pHoraFin.innerHTML = mostrarPerfilActivdad[i]['horaFin'];
            pHoraFin.classList.add('pl-2');
            pHoraFin.classList.add('colorGris');
            divCardBody.appendChild(pHoraFin);

            let nombreLugar = document.createElement('h5');
            nombreLugar.classList.add('card-title');
            nombreLugar.classList.add('mt-3');
            nombreLugar.innerText = mostrarPerfilActivdad[i]['nombre'];
            divCardBody.appendChild(nombreLugar);

            let descripcionLugar = document.createElement('p');
            descripcionLugar.classList.add('mt-3');
            descripcionLugar.classList.add('card-text');
            descripcionLugar.innerText = mostrarPerfilActivdad[i]['descripcion'];
            divCardBody.appendChild(descripcionLugar);

            let pCosto = document.createElement('a');
            pCosto.innerHTML = ' <i class="fas fa-coins estiloFas"></i>'+ ' '+'₡' + ' ' + mostrarPerfilActivdad[i]['costo'];
            pCosto.classList.add('estiloFas');
            divCardBody.appendChild(pCosto);

            let pCupos = document.createElement('a');
            pCupos.innerHTML = 'Cupos:' + ' ' + mostrarPerfilActivdad[i]['cupos'];
            pCupos.classList.add("pl-3");
            pCosto.classList.add('estiloFas');
            divCardBody.appendChild(pCupos);

            let direccio = document.createElement('p');
            direccio.innerHTML = '<i class="fas fa-map-marker-alt estiloFas"></i>' + ' ' + mostrarPerfilActivdad[i]['direccion'];

            direccio.classList.add('mt-3');
            direccio.classList.add('font-weight-light');
            divCardBody.appendChild(direccio);

            let mapa = document.createElement('div');
            mapa.id = "mapa-"+i;
            divCardBody.appendChild(mapa);
            

            // Card footer boton
            let divCardFooter = document.createElement('div');
            divCardFooter.classList.add('card-footer');

            let botonEliminar = document.createElement('a');
            botonEliminar.href = '#';
            botonEliminar.classList.add('far');
            botonEliminar.classList.add('fa-trash-alt');
            botonEliminar.classList.add('estiloFas');
            botonEliminar.classList.add('mr-4');
            botonEliminar.classList.add('float-right');
            botonEliminar.dataset.id_actividad = mostrarPerfilActivdad[i]['_id'];
            botonEliminar.addEventListener('click', confirmarBorrado);

            let botonEditar = document.createElement('a');
            botonEditar.href = '#';
            botonEditar.classList.add('far');
            botonEditar.classList.add('fa-edit');
            botonEditar.classList.add('estiloFas');
            botonEditar.classList.add('float-right');
            botonEditar.dataset.id_actividad = mostrarPerfilActivdad[i]['_id'];
            botonEditar.addEventListener('click', editarActividad);


            divCardFooter.appendChild(botonEditar);
            divCardFooter.appendChild(botonEliminar);
            cardLugar.appendChild(divCardBody);
            cardLugar.appendChild(divCardFooter);
            cardContainer.appendChild(colLugar);

            // let map = new google.maps.Map(document.getElementById('#mapa-'+i), {
            //     center: { lat: -34.397, lng: 150.644 },
            //     zoom: 8
            // });
        }
    }
};

function parseDate(isodate) {
    let fecha = new Date(isodate)
    let year = fecha.getFullYear()
    let month = (fecha.getMonth() + 1) < 10 ? '0' + (fecha.getMonth() + 1) : '' + (fecha.getMonth() + 1);
    let day = (fecha.getDay() + 1) < 10 ? '0' + (fecha.getDay() + 1) : '' + (fecha.getDay() + 1);
    return (year + '-' + month + '-' + day);
};
function parseTime(hora) {
    let hour = hora.split(':')[0];
    let minute = hora.split(':')[1].slice(0, 2)
    return (hour + ':' + minute);

};
// function parseTime(hora) {
//     let hour = hora.split(':')[0] < 10 ? '0' + hora.split(':')[0] : '' + hora.split(':')[0];;
//     let minute = hora.split(':')[1].slice(0, 2)
//     return (hour + ':' + minute);
// };

function editarActividad() {
    let id_actividad = this.dataset.id_actividad;
    localStorage.setItem('idActividad', id_actividad);
    window.location.href = 'editarActividad.html';
};


function confirmarBorrado() {
    let id_actividad = this.dataset.id_actividad;
    swal({
        title: 'Está seguro que desea eliminar la actividad?',
        text: "Este proceso no se puede revertir",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro!'
    }).then((result) => {
        if (result.value) {
            eliminar_actividad(id_actividad);
            mostrarPerfilActivdad = obtenerActividadPorUsuario();
            mostrarListaActvidades();
            swal({
                title: 'Actividad eliminada!',
                text: 'La Actividad fue eliminada con éxito',
                type: 'success'
            });
        }
    })
};


function mostrarActividadPorUsuario() {
    let listarActividad = obtenerActividadPorUsuario();
    let selectLugares = document.querySelector('#slctLugar');
    for (let i = 0; i < listarActividad.length; i++) {
        let nuevaOpcion = new Option(listarActividad[i]['nombre']);
        nuevaOpcion.value = listarActividad[i]['nombre'];
        selectLugares.appendChild(nuevaOpcion);
    }
};