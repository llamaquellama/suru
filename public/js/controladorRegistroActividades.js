'use strict';

const botonRegistrar = document.querySelector('#btnRegistrar');
const btnSubirFoto = document.querySelector('#btnSubirImagen');

const foto = document.querySelector('#imagenPrevista');

let inputLugar = document.querySelector('#Lugares');
let inputNombre = document.querySelector('#txtNombre');
let inputCategoria = document.querySelector('#slctCategoria');
let inputFechaInicio = document.querySelector('#txtFechaInicio');
let inputFechaFin = document.querySelector('#txtFechaFin');
let inputHoraInicio = document.querySelector('#txtHoraInicio');
let inputHoraFin = document.querySelector('#txtHoraFin');
let inputCosto = document.querySelector('#txtCosto');
let inputCupos = document.querySelector('#txtCupos');
let inputEtiquetas = document.querySelector('#txtEtiquetas');
let inputPatrocinadores = document.querySelector('#patrocinador');
let inputDescripcion = document.querySelector('#txtDescripcion');
let inputDireccion = document.querySelector('#txtDireccion');

btnSubirFoto.addEventListener('click', cargarIcono)

function cargarIcono(event) {
    event.returnValue = false;
    pasarImagen();
};


botonRegistrar.addEventListener('click', obtenerDatos);

mostrarLugaresPorUsuario();
mostrarPatrocinadores();
mostrarCategorias();

inputLugar.value = '';
inputNombre.value = '';
inputCategoria.value = '';
inputFechaInicio.value = '';
inputFechaFin.value = '';
inputHoraInicio.value = '';
inputHoraFin.value = '';
inputCosto.value = '';
inputCupos.value = '';
inputEtiquetas.value = '';
inputPatrocinadores.value = '';
inputDescripcion.value = '';
inputDireccion.value = '';
// nombreProvincia.value = '';
// nombreCanton.value = '';
// nombreDistrito.value = '';
// aporte.value = '';

function obtenerDatos(event) {
    let inputAporte = document.querySelectorAll('.aportes');
    let fotoActividad = foto.src;
    let lugares = inputLugar.value;
    let nombre = inputNombre.value;
    let categoria = inputCategoria.value;
    let fechaInicio = new Date(inputFechaInicio.value);
    let fechaFin = new Date(inputFechaFin.value);
    let horaInicio = inputHoraInicio.value;
    let horaFin = inputHoraFin.value;
    let costo = inputCosto.value;
    let cupos = inputCupos.value;
    let etiquetas = inputEtiquetas.value;
    let patrocinadores = inputPatrocinadores.value;
    let descripcion = inputDescripcion.value;
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

    let nombreProvincia = provincias.filter(provincia => provincia.idProvincia === parseInt(selectProvincias.value))[0].nombre;
    let nombreCanton = cantones.filter(canton => canton.idCanton === parseInt(selectCantones.value))[0].nombre;
    let nombreDistrito = distritos.filter(distrito => distrito.idDistrito === parseInt(selectDistritos.value))[0].nombre;
    let direccion = inputDireccion.value;

    var latitud = marker.getPosition().lat();
    var longitud =  marker.getPosition().lng();


    costo = costo.replace(/[\D\s\._\-]+/g, "");
    costo = costo ? parseInt(costo, 10) : 0;

    let error = validar(nombre, categoria, fechaInicio, fechaFin, horaInicio, horaFin, costo, cupos, etiquetas, patrocinadores, descripcion, direccion);
    event.returnValue = false;

    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar la actividad',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        let respuesta = registrarActividad(fotoActividad, lugares, nombre, categoria, fechaInicio, fechaFin, horaInicio, horaFin, costo, cupos, etiquetas, JSON.stringify(objPatrocinadores), descripcion, nombreProvincia, nombreCanton, nombreDistrito, direccion,latitud, longitud);
        if (respuesta.success) {
            swal({
                type: 'success',
                title: 'Su actividad ha sido registrada',
                text: 'Felicidades'
            }).then((value) => {
                window.location.href = 'actividades.html';
              });
            inputLugar.value = '';
            inputNombre.value = '';
            inputCategoria.value = '';
            inputFechaInicio.value = '';
            inputFechaFin.value = '';
            inputHoraInicio.value = '';
            inputHoraFin.value = '';
            inputCosto.value = '';
            inputCupos.value = '';
            inputEtiquetas.value = '';
            inputPatrocinadores.value = '';
            inputDescripcion.value = '';
            inputDireccion.value = '';
            nombreProvincia.value = '';
            nombreCanton.value = '';
            nombreDistrito.value = '';
            aporte.value = '';
        } else {
            swal({
                type: 'error',
                title: 'Registro incorrecto',
            });
        }

    }
};



function validar(pnombre, pcategoria, pfechaInicio, pfechaFin, phoraInicio, phoraFin, pcosto, pcupos, petiquetas, ppatrocinadores, pdescripcion, pdireccion) {

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
        inputCategoria.classList.add('error_input');
    } else {
        inputCategoria.classList.remove('error_input');
    }

    if (pfechaInicio == 'Invalid Date' || pfechaInicio < new Date()) {
        error = true;
        inputFechaInicio.classList.add('error_input');
    } else {
        inputFechaInicio.classList.remove('error_input');
    }

    if (pfechaFin == 'Invalid Date' || pfechaFin < new Date()) {
        error = true;
        inputFechaFin.classList.add('error_input');
    } else {
        inputFechaFin.classList.remove('error_input');
    }

    if (phoraInicio == '') {
        error = true;
        inputHoraInicio.classList.add('error_input');
    } else {
        inputHoraInicio.classList.remove('error_input');
    }

    if (phoraFin == '') {
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

    if (pcupos == '') {
        error = true;
        inputCupos.classList.add('error_input');
    } else {
        inputCupos.classList.remove('error_input');
    }

    if (petiquetas == '') {
        error = true;
        inputEtiquetas.classList.add('error_input');
    } else {
        inputEtiquetas.classList.remove('error_input');
    }

    if (ppatrocinadores == '') {
        error = true;
        inputPatrocinadores.classList.add('error_input');
    } else {
        inputPatrocinadores.classList.remove('error_input');
    }

    if (pdescripcion == '') {
        error = true;
        inputDescripcion.classList.add('error_input');
    } else {
        inputDescripcion.classList.remove('error_input');
    }

    if (pdireccion == '') {
        error = true;
        inputDireccion.classList.add('error_input');
    } else {
        inputDireccion.classList.remove('error_input');
    }
    return error;
};
// agregar////////////////////////////////////////////////

$('.flexdatalist').flexdatalist({
    selectionRequired: 1,
    minLength: 1
});

$('.flexdatalist').flexdatalist({
    minLength: 1
});

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

function parseDate(isodate) {
    let fecha = new Date(isodate)
    let year = fecha.getFullYear()
    let month = (fecha.getMonth() + 1) < 10 ? '0' + (fecha.getMonth() + 1) : '' + (fecha.getMonth() + 1);
    let day = (fecha.getDay() + 1) < 10 ? '0' + (fecha.getDay() + 1) : '' + (fecha.getDay() + 1);
    return (year + '-' + month + '-' + day)
};

function parseTime(hora) {
    let hour = hora.split(':')[0];
    let minute = hora.split(':')[1].slice(0, 2)
    return (hour + ':' + minute);

};
//////////////////////agregar, es los selects dinamicos//////////

// (new Intl.NumberFormat('es-CRC', { style: 'currency', currency: 'CRC' }).format(1000));

$('#txtCosto').on("keyup", function (event) {

    // 1.
    var selection = window.getSelection().toString();
    if (selection !== '') {
        return;
    }

    // 2.
    if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
        return;
    }

    // 1
    var $this = $(this);
    var input = $this.val();

    // 2
    var input = input.replace(/[\D\s\._\-]+/g, "");

    // 3
    input = input ? parseInt(input, 10) : 0;

    // 4
    $this.val(function () {
        return (input === 0) ? "" : input.toLocaleString("es-CRC");
    });

});

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

function mostrarLugaresPorUsuario() {
    let listarLugares = obtenerLugaresPorUsuario();
    let selectLugares = document.querySelector('#slctLugar');
    for (let i = 0; i < listarLugares.length; i++) {
        let nuevaOpcion = new Option(listarLugares[i]['nombre']);
        nuevaOpcion.value = listarLugares[i]['nombre'];
        selectLugares.appendChild(nuevaOpcion);
    }
};


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

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})