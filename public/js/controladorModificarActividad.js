'use strict';
let id_actividad = localStorage.getItem('idActividad');

let btnSubirFoto = document.querySelector('#btnSubirImagen');
let imgFoto = document.querySelector('#imagenPrevista');
btnSubirFoto.addEventListener('click', cargarIcono)

function cargarIcono(event) {
    event.returnValue = false;
    pasarImagen();
};

mostrarPatrocinadores();
mostrarCategorias();

let inputLugar = document.querySelector('#Lugares');
let inputNombre = document.querySelector('#txtNombre');

let selectCategoria = document.querySelector('#slctCategoria');
// let opcionesCategoria = document.querySelectorAll('#slctCategoria option');

let inputFechaInicio = document.querySelector('#txtFechaInicio');
let inputFechaFin = document.querySelector('#txtFechaFin');
let inputHoraInicio = document.querySelector('#txtHoraInicio');
let inputHoraFin = document.querySelector('#txtHoraFin');
let inputCosto = document.querySelector('#txtCosto');
let inputCupos = document.querySelector('#txtCupos');
let inputEtiquetas = document.querySelector('#slcEtiqueta');
// let opcionesEtiquetas = document.querySelectorAll('#slcEtiqueta option');

let selectPatrocinador = document.querySelector('#patrocinador');

let inputDescripcion = document.querySelector('#txtDescripcion');

let selectProvincia = document.querySelector('#sltProvincias');
let opcionesProvincia = document.querySelectorAll('#sltProvincias option');

let selectCanton = document.querySelector('#sltCantones');
let opcionesCanton = document.querySelectorAll('#sltCantones option');

let selectDistrito = document.querySelector('#sltDistritos');
let opcionesDistrito = document.querySelectorAll('#sltDistritos option');

let inputDireccionEspecifica = document.querySelector('#txtDireccion');

const botonActualizar = document.querySelector('#btnActualizar');
botonActualizar.addEventListener('click', obtenerNuevosDatosFormulario);

if (id_actividad) {
    mostrarDatos();
} else {
    swal({
        type: 'error',
        text: 'Debe realizar el inicio de sesión',
        confirmButtonText: '<a href="registroVisitantes.html" >Ir a inicio de sesión</a>'
    });
}

function mostrarDatos() {
    let actividad = obtenerPerfilActividad(id_actividad);

    imgFoto.src = actividad['foto'];

    inputNombre.value = actividad['nombre'];
    inputLugar.value = actividad.nombreLugar;
    selectCategoria.value = actividad.categoria;
    inputFechaInicio.value = parseDate(actividad['fechaInicio']);
    inputFechaFin.value = parseDate(actividad['fechaFin']);
    inputHoraInicio.value = parseTime(actividad['horaInicio']);
    inputHoraFin.value = parseTime(actividad['horaFin']);
    inputCosto.value = actividad['costo'];
    inputCupos.value = actividad['cupos'];

    inputEtiquetas.value = actividad.etiquetas;
    let patrocinadoresNombre = "";
    let cajaPatrocinadores = document.querySelector('#aportePatrocinador');
    JSON.parse(actividad.patrocinadores).forEach(patrocinador => {
        //$('#slctPatrocinador').flexdatalist('add', patrocinador.nombrePatrocinador)
        patrocinadoresNombre += patrocinador.nombrePatrocinador + ",";
        /* */
        let div = document.createElement("div")
        div.id = "div-aportes-" + patrocinador.nombrePatrocinador;
        let label = document.createElement("label");
        label.innerText = 'Aportes de ' + patrocinador.nombrePatrocinador;
        let textarea = document.createElement("textarea");
        textarea.id = 'aportes-' + patrocinador.nombrePatrocinador;
        textarea.value = patrocinador.aportePatrocinador
        textarea.className = "col-md-12 form-control form-control-sm aportes";
        div.appendChild(label);
        div.appendChild(textarea);
        cajaPatrocinadores.appendChild(div);
    });
    selectPatrocinador.value = patrocinadoresNombre;

    inputDescripcion.value = actividad['descripcion'];

    for (let i = 0; i < opcionesProvincia.length; i++) {
        if (actividad['nombreProvincia'] == opcionesProvincia[i].text) {
            selectProvincia.selectedIndex = i;
            llenarCantones(opcionesProvincia[i].value);
            opcionesCanton = document.querySelectorAll('#sltCantones option');
        }
    }

    for (let i = 0; i < opcionesCanton.length; i++) {
        if (actividad['nombreCanton'] == opcionesCanton[i].text) {
            selectCanton.selectedIndex = i;
            llenarDistritos(opcionesCanton[i].value);
            opcionesDistrito = document.querySelectorAll('#sltDistritos option');
        }
    }

    for (let i = 0; i < opcionesDistrito.length; i++) {
        if (actividad['nombreDistrito'] == opcionesDistrito[i].text) {
            selectDistrito.selectedIndex = i;
        }
    }

    inputDireccionEspecifica.value = actividad['direccion'];

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
function obtenerNuevosDatosFormulario() {

    let inputAporte = document.querySelectorAll('.aportes');

    let foto = imgFoto.src;
    let nombre = inputNombre.value;

    let categoria = selectCategoria.value;

    let fechaI = inputFechaInicio.value;
    let fechaF = inputFechaFin.value;
    let horaI = inputHoraInicio.value;
    let horaF = inputHoraFin.value;

    let costo = inputCosto.value;
    let cupo = inputCupos.value;
    let etiquetas = inputEtiquetas.value;

    let patrocinadores = selectPatrocinador.value;
    patrocinadores = patrocinadores.split(",");
    let objPatrocinadores = [];
    inputAporte.forEach((aporte, i) => {
        patrocinadores[i] = patrocinadores[i].trim()
        let patrocinador = {
            nombrePatrocinador: patrocinadores[i],
            aportePatrocinador: aporte.value
        }
        objPatrocinadores.push(patrocinador);
    });


    let descripcion = inputDescripcion.value;

    let nombreProvincia = provincias.filter(provincia => provincia.idProvincia === parseInt(selectProvincias.value))[0].nombre;

    let nombreCanton = cantones.filter(canton => canton.idCanton === parseInt(selectCantones.value))[0].nombre;

    let nombreDistrito = distritos.filter(distrito => distrito.idDistrito === parseInt(selectDistritos.value))[0].nombre;
    

    let direccionEspecifica = inputDireccionEspecifica.value;


let error = validar(nombre, categoria, fechaI, fechaF, horaI, horaF, costo, cupo, etiquetas, patrocinadores, descripcion, nombreProvincia, nombreCanton, nombreDistrito, direccionEspecifica);
    event.returnValue = false;

    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar la actividad',
            text: 'Por favor revise los campos en rojo'
        });
    } else {
        let respuesta = actualizarActividad(id_actividad, foto, nombre, categoria, fechaI, fechaF, horaI, horaF, costo, cupo, etiquetas, JSON.stringify(objPatrocinadores), descripcion, nombreProvincia, nombreCanton, nombreDistrito,  direccionEspecifica, latitud, longitud);
        if (respuesta.success) {

            swal({
                type: 'success',
                title: 'Su actividad ha sido registrada',
                text: 'Felicidades'
            }) .then((value) => {
                window.location.href = 'actividades.html';
            });
    }else {
        swal({
            type: 'error',
            title: 'Registro incorrecto',
        });

        }  
    }
   
};
function validar(pnombre, pcategoria, pfechaI, pfechaF, phoraI, phoraF, pcosto, pcupo, petiquetas, ppatrocinador, pdescripcion, nombreProvincia, nombreCanton, nombreDistrito, pdireccionEspecifica) {

    let error = false;
    let expNumeros = /^[0-9]$/;
    let expLetras = /^[a-zA-Z áéíóúñÜüÉÁ]+$/;
    let regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])([A-Za-z\d$@$!%?&]|[^ ]){8,15}$/;

    if (pnombre == '') {
        error = true;
        inputNombre.classList.add('error_input');
    } else {
        inputNombre.classList.remove('error_input');
    }

    if (pcategoria == '') {
        error = true;
        selectCategoria.classList.add('error_input');
    } else {
        selectCategoria.classList.remove('error_input');
    }

    if (pfechaI == 'Invalid Date' || pfechaI < new Date()) {
        error = true;
        inputFechaInicio.classList.add('error_input');
    } else {
        inputFechaInicio.classList.remove('error_input');
    }

    if (pfechaF == 'Invalid Date' || pfechaF < new Date()) {
        error = true;
        inputFechaFin.classList.add('error_input');
    } else {
        inputFechaFin.classList.remove('error_input');
    }

    if (phoraI == '') {
        error = true;
        inputHoraInicio.classList.add('error_input');
    } else {
        inputHoraInicio.classList.remove('error_input');
    }

    if (phoraF == '') {
        error = true;
        inputHoraFin.classList.add('error_input');
    } else {
        inputHoraFin.classList.remove('error_input');
    }

    if (pcosto == '') {
        error = true;
        inputCosto.classList.add('error_input');
    } else {
        inputCosto.classList.remove('error_input');
    }

    if (pcupo == '') {
        error = true;
        inputCupo.classList.add('error_input');
    } else {
        inputCupos.classList.remove('error_input');
    }

    if (petiquetas == '') {
        error = true;
        inputEtiquetas.classList.add('error_input');
    } else {
        inputEtiquetas.classList.remove('error_input');
    }

    if (ppatrocinador == '') {
        error = true;
        selectPatrocinador.classList.add('error_input');
    } else {
        selectPatrocinador.classList.remove('error_input');
    }

    if (pdescripcion == '') {
        error = true;
        inputDescripcion.classList.add('error_input');
    } else {
        inputDescripcion.classList.remove('error_input');
    }

    if (nombreProvincia == '') {
        error = true;
        selectProvincia.classList.add('error_input');
    } else {
        selectProvincia.classList.remove('error_input');
    }

    if (nombreCanton == '') {
        error = true;
        selectCanton.classList.add('error_input');
    } else {
        selectCanton.classList.remove('error_input');
    }
    if (nombreDistrito == '') {
        error = true;
        selectDistrito.classList.add('error_input');
    } else {
        selectDistrito.classList.remove('error_input');
    }
    if (pdireccionEspecifica == '') {
        error = true;
        inputDireccionEspecifica.classList.add('error_input');
    } else {
        inputDireccionEspecifica.classList.remove('error_input');
    }
    return error;
};

$('#patrocinador').on('change:flexdatalist', function (event, set, options) {
    if (set.text !== undefined) {
        let caja = document.querySelector('#aportePatrocinador');
        //caja.innerHTML='';
        let div = document.createElement("div")
        div.id = "div-aportes-" + set.text;
        let label = document.createElement("label");
        label.innerText = 'Aportes de ' + set.value;
        let textarea = document.createElement("textarea");
        textarea.id = 'aportes-' + set.value;
        textarea.className = "col-md-12 form-control form-control-sm aportes";
        div.appendChild(label);
        div.appendChild(textarea);
        caja.appendChild(div);
    }
    else {
        let caja = document.querySelector('#div-aportes-' + set[0].text);
        caja.remove();
    }
});

function mostrarPatrocinadores() {
    let listarPatrocindores = obtenerPatrocinador();
    let patrocinador = "";
    let selectPatrocinadores = document.querySelector('#slctPatrocinador');
    for (let i = 0; i < listarPatrocindores.length; i++) {
        let nuevaOpcion = new Option(listarPatrocindores[i]['nombrePatrocinador']);
        nuevaOpcion.value = listarPatrocindores[i]['nombrePatrocinador'];
        selectPatrocinadores.appendChild(nuevaOpcion);
        patrocinador += listarPatrocindores[i]['nombrePatrocinador'];
        if (i < listarPatrocindores.length - 1)
            patrocinador += ", ";
    }
    $('#patrocinadorLabel').tooltip({ "title": patrocinador });
};

function mostrarCategorias() {
    let listarCategoria = listarCategorias();
    let categorias = "";
    let selectCategorias = document.querySelector('#slctCategoria');
    for (let i = 0; i < listarCategoria.length; i++) {
        let nuevaOpcion = new Option(listarCategoria[i]['nombreCategoria']);
        nuevaOpcion.value = listarCategoria[i]['nombreCategoria'];
        selectCategorias.appendChild(nuevaOpcion);
        categorias += listarCategoria[i]['nombreCategoria'];
        if (i < listarCategoria.length - 1)
            categorias += ", ";
    }

    $('#categoriaLabel').tooltip({ "title": categorias });
};

// let lugar = obtenerActividad(id_actividad);
// let map ;
// let marcador ;
// let latitud = lugar['latitud'];
// let longitud = lugar['longitud'];



// function initMap() {
//     let sitio = new google.maps.LatLng(latitud, longitud);
//     let opcionesMapa = {
//         zoom: 11,
//         center: sitio
//     }
//     map = new google.maps.Map(document.getElementById("map"), opcionesMapa);

//     marcador = new google.maps.Marker({
//         position: sitio,
//         draggable: false,
//     });

//     marcador.setMap(map);
// }