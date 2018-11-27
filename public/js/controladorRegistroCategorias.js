'use strict';

const btnRegistrar = document.querySelector('#btnRegistrar');
const btnIconoCategoria = document.querySelector('#btnSubirImagen');

const icono = document.querySelector('#imagenPrevista');
const nombre = document.querySelector('#txtNombreCategoria');
const descripcion = document.querySelector('#txtareaDescripcion');
const errorNombre = document.querySelector('#errorNombre');
const errorDescripcion = document.querySelector('#errorDescripcion');

btnRegistrar.addEventListener('click', obtenerDatoscategoria);
btnIconoCategoria.addEventListener('click', cargarIcono);

function cargarIcono(event) {
    event.returnValue = false;
    pasarImagen();
};
let listaCategorias = obtenerCategorias();

obtenerCategorias()
//mostrarListaCategorias()

function obtenerDatoscategoria(event) {

    let iconoCategoria = icono.src;
    let nombreCategoria = nombre.value;
    let descripcionCategoria = descripcion.value;
    

    let errorBlancos = validar(iconoCategoria, nombreCategoria, descripcionCategoria)
    event.returnValue = false;
    if (errorBlancos) {
        swal({
            type: 'warning',
            title: 'Registro incorrecto',
            text: 'No se pudo registrar la categoría, revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
    } else {
        let respuesta = registrarCategoria(iconoCategoria, nombreCategoria, descripcionCategoria);
        if (respuesta.success) {
            swal({
                type: 'success',
                title: 'Registro correcto',
                text: respuesta.msj,
                confirmButtonText: 'Entendido'
            });
            listaCategorias = obtenerCategorias();
        } else {
            swal({
                type: 'error',
                title: 'Registro incorrecto',
                text: respuesta.msj,
                confirmButtonText: 'Entendido'
            });
            icono.src = '';
            nombre.value = '';
            descripcion.value = '';
        }
        //mostrarListaCategorias();
    }
    
};

function validar(iconoSrc, nombreText, descripcionText) {
    let error = false;
    let regexNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÄËÜÖüñÑ ]+$/;
    if (iconoSrc == '') {
        error = true;
        icono.classList.add('error');
    } else {
        icono.classList.remove('error');
    }

    if (nombreText == '') {
        error = true;
        nombre.classList.add('error');
        errorNombre.innerText = 'El nombre no puede estar vacío.'
    } else if (!regexNombre.test(nombreText)) {
        errorNombre.innerText = 'El nombre incluye caracteres no válidos.'
        error = true;
        nombre.classList.add('error');
    } else {
        errorNombre.innerText = '';
        nombre.classList.remove('error');
    }
    if (descripcionText == '') {
        error = true;
        descripcion.classList.add('error');
        errorDescripcion.innerText = 'La descripción no puede estar vacía'
    } else {
        descripcion.classList.remove('error');
        errorDescripcion.innerText = '';
    }


    return error;
};
//mostrarListaCategorias();
