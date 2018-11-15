'use strict';

const botonRegistrar = document.querySelector('#btnRegistrar');

let inputNombre = document.querySelector('#txtNombre');
let inputCategoria = document.querySelector('#slctCategoria');
let inputDescripcion = document.querySelector('#txtDescripcion');
let inputFacebook = document.querySelector('#txtFacebook');
let inputTwitter = document.querySelector('#txtTwitter');
let inputInstagram = document.querySelector('#txtInstagram');
let inputGoogle = document.querySelector('#txtGoogle');
let inputProvincia = document.querySelector('#slctProvincia');
let inputDistrito = document.querySelector('#slctDistrito');
let inputCanton = document.querySelector('#slctCanton');

//let inputUbicación = document.querySelector('#slctUbicacion');

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    let nombre = inputNombre.value;
    let categoria = inputCategoria.value;
    let descripcion = inputDescripcion.value;
    let facebook = inputFacebook.value;
    let twitter = inputTwitter.value;
    let instagram = inputInstagram.value;
    let google = inputGoogle.value;
    let provincia = inputProvincia.value;
    let distrito = inputDistrito.value;
    let canton = inputCanton.value;

    let respuesta = registrarLugar (nombre,categoria, descripcion, facebook, twitter, instagram, google, provincia, distrito, canton);

    if(respuesta.success == true){
        alert('registrado');
    }else {
        alert('no registrado');
    }

    let error = validar(nombre,categoria, descripcion, facebook, twitter, instagram, google, provincia, distrito, canton);

    if (error == true) {

        swal({
            type: 'warning',
            title: 'No se pudo registrar el lugar',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        swal({
            type: 'success',
            title: 'Su lugar ha sido registrado',
            text: 'Felicidades'
        });
    }

};


function validar(pnombre, pcategoria, pdescripcion, pfacebook, ptwitter, pinstagram, pgoogle, pprovincia, pdistrito, pcanton) {

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

    if (pdescripcion == '') {
        error = true;
        inputDescripcion.classList.add('error_input');
    } else {
        inputDescripcion.classList.remove('error_input');
    }

    if (pfacebook == '') {
        error = true;
        inputFacebook.classList.add('error_input');
    } else {
        inputFacebook.classList.remove('error_input');
    }

    if (ptwitter == '') {
        error = true;
        inputTwitter.classList.add('error_input');
    } else {
        inputTwitter.classList.remove('error_input');
    }

    if (pinstagram == '') {
        error = true;
        inputInstagram.classList.add('error_input');
    } else {
        inputInstagram.classList.remove('error_input');
    }

    if (pgoogle == '') {
        error = true;
        inputGoogle.classList.add('error_input');
    } else {
        inputGoogle.classList.remove('error_input');
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
