'use strict';

const botonRegistrar = document.querySelector('#btnRegistrar');

const btnSubirFoto = document.querySelector('#btnSubirImagen');
const foto = document.querySelector('#imagenPrevista');

let inputNombre = document.querySelector('#txtNombre');
let inputCategoria = document.querySelector('#slctCategoria');
let inputDescripcion = document.querySelector('#txtDescripcion');
let inputFacebook = document.querySelector('#txtFacebook');
let inputTwitter = document.querySelector('#txtTwitter');
let inputInstagram = document.querySelector('#txtInstagram');
let inputYoutube = document.querySelector('#txtYoutube');
let inputDireccion = document.querySelector('#txtDireccion');


btnSubirFoto.addEventListener('click', cargarIcono)

function cargarIcono(event) {
    event.returnValue = false;
    pasarImagen();
};

//let inputUbicación = document.querySelector('#slctUbicacion');

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let fotoActividad = foto.src;
    let nombre = inputNombre.value;
    let categoria = inputCategoria.value;
    let descripcion = inputDescripcion.value;
    let facebook = inputFacebook.value;
    let twitter = inputTwitter.value;
    let instagram = inputInstagram.value;
    let youtube = inputYoutube.value;
    let direccion = inputDireccion.value;
    let nombreProvincia = provincias.filter(provincia => provincia.idProvincia === parseInt(selectProvincias.value))[0].nombre;

    let nombreCanton = cantones.filter(canton => canton.idCanton === parseInt(selectCantones.value))[0].nombre;

    let nombreDistrito = distritos.filter(distrito => distrito.idDistrito === parseInt(selectDistritos.value))[0].nombre;

    var latitudLongitud = marker.getPosition().lat() + ',' + marker.getPosition().lng();

    // let nombreCanton = selectCantones.value;
    // console.log(cantones);

    // let nombreDistrito = selectDistritos.value;
    // console.log(distritos);

   // let ubicacion = inputUbicación.innerHTML;

    let respuesta = registrarLugar (fotoActividad, nombre, categoria, descripcion, facebook, twitter, instagram, youtube, nombreProvincia, nombreCanton, nombreDistrito, direccion, latitudLongitud);

    if(respuesta.success == true){
        alert('registrado');
    }else {
        alert('no registrado');
    }

    let error = validar(nombre,categoria, descripcion, facebook, twitter, instagram, youtube, direccion);

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


function validar(pnombre, pcategoria, pdescripcion, pdireccion) {

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

    if (pdireccion == '') {
        error = true;
        inputDireccion.classList.add('error_input');
    } else {
        inputDireccion.classList.remove('error_input');
    }
    

    return error;
};
