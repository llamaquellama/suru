'use strict';

const botonRegistrar = document.querySelector('#btnRegistrar');

const btnSubirFoto = document.querySelector('#btnSubirImagen');

const foto = document.querySelector('#imagenPrevista');

let inputNombre = document.querySelector('#txtNombre');
let inputCategoria = document.querySelector('#slctCategoria');
let inputFecha = document.querySelector('#txtFecha');
let inputHora = document.querySelector('#txtHora');
let inputCosto = document.querySelector('#txtCosto');
let inputCupos = document.querySelector('#txtCupos');
let inputEtiquetas = document.querySelector('#txtEtiquetas');
let inputPatrocinadores = document.querySelector('#slctPatrocinador');
let inputDescripcion = document.querySelector('#txtDescripcion');
let inputProvincia = document.querySelector('#sltProvincias');
let inputCanton = document.querySelector('#sltCantones');
let inputDistrito = document.querySelector('#sltDistritos');
let inputDireccion = document.querySelector('#txtDireccion');
let inputUbicación = document.querySelector('#map');

btnSubirFoto.addEventListener('click', cargarIcono)

function cargarIcono(event) {
    event.returnValue = false;
    pasarImagen();
};

//let inputUbicación = document.querySelector('#slctUbicacion');p

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos(event) {

    let fotoActividad = foto.src;
    let nombre = inputNombre.value;
    let categoria = inputCategoria.value;
    let fecha = new Date(inputFecha.value);
    let hora = inputHora.value;
    let costo = inputCosto.value;
    let cupos = inputCupos.value;
    let etiquetas = inputEtiquetas.value;
    let patrocinadores = inputPatrocinadores.value;
    let descripcion = inputDescripcion.value;
    let nombreProvincia = inputProvincia.value;
    let nombreCanton = inputCanton.value;
    let nombreDistrito = inputDistrito.value;
    let direccion = inputDireccion.value;

    

    let error = validar(nombre, categoria, fecha, hora, costo, cupos, etiquetas, patrocinadores, descripcion, nombreProvincia, nombreCanton, nombreDistrito, direccion);
    event.returnValue = false;

    if (error == true) {

        swal({
            type: 'warning',
            title: 'No se pudo registrar la actividad',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        let respuesta = registrarActividad(fotoActividad, nombre, categoria, fecha, hora, costo, cupos, etiquetas, patrocinadores, descripcion, nombreProvincia, nombreCanton, nombreDistrito, direccion);
        if(respuesta.success){
            swal({
                type: 'success',
                title: 'Su actividad ha sido registrada',
                text: 'Felicidades'
            });
        }else{
            swal({
                type: 'error',
                title: 'Registro incorrecto',
            }); 
        }
        
    }

    

    // if (respuesta.success == true) {
    //     alert('registrado');//aca sweet alert correcto
    // } else {
    //     alert('no registrado');//aca swwet alert incorreto
    // }

};

function validar(pnombre, pcategoria, pfecha, phora, pcosto, pcupos, petiquetas, ppatrocinadores, pdescripcion) {

    let error = false;
    let expNumeros = /^[0-9]$/;
    let expLetras = /^[a-zA-Z áéíóúñÜüÉÁ]+$/;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

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

    if (ppatrocinadores == '') {
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

    // if (pprovincia== '') {
    //     error = true;
    //     inputProvincia.classList.add('error_input');
    // } else {
    //     inputProvincia.classList.remove('error_input');
    // }

    // if (pdistrito== '') {
    //     error = true;
    //     inputDistrito.classList.add('error_input');
    // } else {
    //     inputDistrito.classList.remove('error_input');
    // }

    // if (pcanton== '') {
    //     error = true;
    //     inputCanton.classList.add('error_input');
    // } else {
    //     inputCanton.classList.remove('error_input');
    // }
    

    return error;
};