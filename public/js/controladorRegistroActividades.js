'use strict';

const botonRegistrar = document.querySelector('#btnRegistrar');

let inputNombre = document.querySelector('#txtNombre');
let inputCategoria = document.querySelector('#slctCategoria');
let inputFecha = document.querySelector('#txtFecha');
let inputHora = document.querySelector('#txtHora');
let inputCosto = document.querySelector('#txtCosto');
let inputCupos = document.querySelector('#txtCupos');
let inputEtiquetas = document.querySelector('#txtEtiquetas');
let inputPatrocinadores = document.querySelector('#slctPatrocinador');
let inputDescripcion = document.querySelector('#txtDescripcion');
let inputProvincia = document.querySelector('#slctProvincia');
let inputDistrito = document.querySelector('#slctDistrito');
let inputCanton = document.querySelector('#slctCanton');

//let inputUbicación = document.querySelector('#slctUbicacion');

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    let nombre = inputNombre.value;
    let categoria = inputCategoria.value;
    let fecha = new Date(inputFecha.value);
    let hora = inputHora.value;
    let costo = inputCosto.value;
    let cupos = inputCupos.value;
    let etiquetas = inputEtiquetas.value;
    let patrocinadores = inputPatrocinadores.value;
    let descripcion = inputDescripcion.value;
    let provincia = inputProvincia.value;
    let distrito = inputDistrito.value;
    let canton = inputCanton.value;

    let respuesta = registrarActividad(nombre, categoria, fecha, hora, costo, cupos, etiquetas, patrocinadores, descripcion, provincia, distrito, canton);

    if (respuesta.success == true) {
        alert('registrado');//aca sweet alert correcto
    } else {
        alert('no registrado');//aca swwet alert incorreto
    }

    let error = validar(nombre, categoria, fecha, hora, costo, cupos, etiquetas, patrocinadores, descripcion, provincia, distrito, canton);

    if (error == true) {

        swal({
            type: 'warning',
            title: 'No se pudo registrar la actividad',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        swal({
            type: 'success',
            title: 'Su actividad ha sido registrada',
            text: 'Felicidades'
        });
    }

};

function validar(pnombre, pcategoria, pfecha, phora, pcosto, pcupos, petiquetas, ppatrocinadores, pdescripcion, pprovincia, pdistrito, pcanton) {

    let error = false;
    let expNumeros = /^[0-9]$/;
    let expLetras = /^[a-zA-Z áéíóúñÜüÉÁ]+$/;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


    if (pnombre == '' || expLetras.test(pnombre) == false) {
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

    if (pfecha == 'Invalid Date' || pfecha > new Date()) {
        error = true;
        inputFecha.classList.add('error_input');
    } else {
        inputFecha.classList.remove('error_input');
    }

    if (phora == '') {
        error = true;
        inputHora.classList.add('error_input');
    } else {
        inputHora.classList.remove('error_input');
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

    if (petiquetas== '') {
        error = true;
        inputEtiquetas.classList.add('error_input');
    } else {
        inputEtiquetas.classList.remove('error_input');
    }

    if (ppatrocinadores== '') {
        error = true;
        inputPatrocinadores.classList.add('error_input');
    } else {
        inputPatrocinadores.classList.remove('error_input');
    }

    if (pdescripcion== '') {
        error = true;
        inputDescripcion.classList.add('error_input');
    } else {
        inputDescripcion.classList.remove('error_input');
    }

    if (pprovincia== '') {
        error = true;
        inputProvincia.classList.add('error_input');
    } else {
        inputProvincia.classList.remove('error_input');
    }

    if (pdistrito== '') {
        error = true;
        inputDistrito.classList.add('error_input');
    } else {
        inputDistrito.classList.remove('error_input');
    }

    if (pcanton== '') {
        error = true;
        inputCanton.classList.add('error_input');
    } else {
        inputCanton.classList.remove('error_input');
    }
    

    return error;
};
