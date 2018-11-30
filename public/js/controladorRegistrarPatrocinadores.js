'use strict ';

const btnRegistrarPatrocinador =  document.querySelector('#btnRegistrar');
const btnSubirFotoPatrocinador =  document.querySelector('#btnSubirImagen');

const foto =  document.querySelector('#imagenPrevista');
const industria = document.querySelector('#sltIndustria');
const nombre = document.querySelector ('#txtNombrePatrocinador');
const errorNombre = document.querySelector('#errorNombre');

btnRegistrarPatrocinador.addEventListener('click', obtenerDatosPatrocinador);
btnSubirFotoPatrocinador.addEventListener('click', cargarImagen);

function cargarImagen(event) {
    event.returnValue = false;
    pasarImagen();
};

let listarPatrocinador = obtenerPatrocinador();

obtenerPatrocinador();

function obtenerDatosPatrocinador(event) {

    let fotoPatrocinador = foto.src;
    let tipoIndustria = industria.value;
    let nombrePatrocinador = nombre.value;

    switch(tipoIndustria){
        case '1':
        tipoIndustria = 'Agricultura'    
        break;
    
        case '2':
        tipoIndustria = 'Pesca'    
        break;
    
        case '3':
        tipoIndustria = 'Hoteles'    
        break;

        case '4':
        tipoIndustria = 'Restaurante'    
        break;

        case '5':
        tipoIndustria = 'Transporte'    
        break;

        case '6':
        tipoIndustria = 'Comunicaciones'    
        break;

        case '7':
        tipoIndustria = 'Internacional Financiera'    
        break;

        case '8':
        tipoIndustria = 'Manufactureras'    
        break;

        case '9':
        tipoIndustria = 'Explotación de minas'    
        break;
    
        case '10':
        tipoIndustria = 'Ganadería'    
        break;

        default:
        break;
    
    };

    let errorBlancos = validar(fotoPatrocinador, tipoIndustria, nombrePatrocinador)
    event.returnValue = false;
    if (errorBlancos) {
        swal({
            type: 'warning',
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el patrocinador, revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
    } else {
        let respuesta = registrarPatrocinador(fotoPatrocinador, tipoIndustria, nombrePatrocinador);
        if (respuesta.success) {
            swal({
                type: 'success',
                title: 'Registro correcto',
                text: respuesta.msj,
                confirmButtonText: 'Entendido'
            });
            listarPatrocinador = obtenerPatrocinador();
        } else {
            swal({
                type: 'error',
                title: 'Registro incorrecto',
                text: respuesta.msj,
                confirmButtonText: 'Entendido'
            });
        }
        //mostrarListaCategorias();
    }
};

function validar(imagenSrc, industriaText, nombreText){
    let error = false;
    let regexNombre = /^[0-9a-zA-ZÁÉÍÓÚáéíóúÄËÜÖüñÑ ]+$/;
    if (imagenSrc == '') {
        error = true;
        foto.classList.add('error');
    } else {
        foto.classList.remove('error');
    }
    if (industriaText == '') {
        error = true;
        industria.classList.add('error');
    } else {
        industria.classList.remove('error');
    }

    if (nombreText == '') {
        error = true;
        nombre.classList.add('error');
        errorNombre.innerText = 'El nombre no puede estar vacío'
    } else if (!regexNombre.test(nombreText)) {
        errorNombre.innerText = 'El nombre incluye caracteres no válidos.'
        error = true;
        nombre.classList.add('error');
    } else {
        errorNombre.innerText = '';
        nombre.classList.remove('error'); 
        errorNombre.innerText = '';
    }
    


    return error;
};