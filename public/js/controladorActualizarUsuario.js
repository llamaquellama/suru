'use strict'
// capturamos el nombre de usuario del sessionStorage
let nombreUsuarioSession = sessionStorage.getItem('nombreUsuario');

const btnSubirFotoPerfil = document.querySelector('#btnSubirImagen');
const btnActualizarUsuario = document.querySelector('#btnActualizarUsuario');

let inputTipoID = document.querySelector('#slctTipoID');
let inputId = document.querySelector('#txtID');
let inputNombreUsuario = document.querySelector('#txtnombreUsuario');
let inputNombre1 = document.querySelector('#txtNombre1');
let inputNombre2 = document.querySelector('#txtNombre2');
let inputApellido1 = document.querySelector('#txtApellido1');
let inputApellido2 = document.querySelector('#txtApellido2');
let inputCorreo = document.querySelector('#txtEmail');
let inputNacimiento = document.querySelector('#txtNacimiento');
let inputEdad = document.querySelector('#txtEdad');
const foto = document.querySelector('#imagenPrevista');
const opciones = document.querySelectorAll('#slctTipoID option');


// Ver informacion de Perfil
const fotoDato = document.querySelector('#imagenPrevistaDato')
const username = document.querySelector('#nombreUsuarioDato');
const nombreDato = document.querySelector('#nombre1Dato');
const correoUsuarioDato = document.querySelector('#correoDato');
const fechaNacimientoDato = document.querySelector('#fechaNacimientoDato');
const edadDato = document.querySelector('#edadDato');


if (nombreUsuarioSession) {
    mostrarDatos();
} else {
    alert('Debe seleccionar un usuario para poder actualizar');
}

//Subir foto perfil

btnSubirFotoPerfil.addEventListener('click', cargarImagen);

function cargarImagen(event) {
    event.returnValue = false;
    pasarImagen();
};

function mostrarDatos() {
    let usuario = obtenerPerfilUsuario(nombreUsuarioSession)

    for (let i = 0; i < opciones.length; i++) {
        if (usuario['tipoId'] == opciones[i].textContent) {
            inputTipoID.selectedIndex = i;
        }
    }

    inputId.value = usuario['id'];
    inputNombreUsuario.value = usuario['nombreUsuario'];
    inputNombre1.value = usuario['nombre1'];
    inputNombre2.value = usuario['nombre2'];
    inputApellido1.value = usuario['apellido1'];
    inputApellido2.value = usuario['apellido2'];
    inputCorreo.value = usuario['correo'];

    let fechaHoy = new Date(usuario.fechaNacimiento);
    let dia = fechaHoy.getDate();
    let mes = fechaHoy.getMonth() + 1;
    let anno = fechaHoy.getFullYear();

    if (dia < 10 ) {
        dia = "0"+ dia;
    }   
    
    if (mes < 10) {
        mes = "0" + mes;
    }

    inputNacimiento.value = anno+"-"+mes+"-"+dia;
    inputEdad.value = usuario['edad'];
    foto.src = usuario.imgPerfil;

    //Mostrar Datos en el perfil
    fotoDato.src = usuario['imgPerfil'];
    nombreDato.innerHTML = usuario['nombre1'] + " " + usuario['nombre2'] + " " + usuario['apellido1'] + " " + usuario['apellido2'];
    username.innerHTML = usuario['nombreUsuario'];
    correoUsuarioDato.innerHTML = usuario['correo'];

    let fechaUsuario= new Date(usuario.fechaNacimiento);
    let diaP = fechaUsuario.getDate();
    let mesP = fechaUsuario.getMonth() + 1;
    let annoP = fechaUsuario.getFullYear();

    if (diaP < 10 ) {
        diaP = "0"+ diaP;
    }   
    
    if (mesP < 10) {
        mesP = "0" + mesP;
    }
    fechaNacimientoDato.innerHTML = diaP + "/" + mesP + "/" + annoP;
    edadDato.innerHTML = usuario['edad'];

};

function obtenerDatosFormulario() {

    let tipoID = inputTipoID.value;
    let id = inputId.value;
    let nombreUsuario = inputNombreUsuario.value;
    let nombre1 = inputNombre1.value;
    let nombre2 = inputNombre2.value;
    let apellido1 = inputApellido1.value;
    let apellido2 = inputApellido2.value;
    let correo = inputCorreo.value;
    let fechaCapturada =new Date(inputNacimiento.value);
    let fechaCorregida = fechaCapturada.getFullYear() + "/" + (fechaCapturada.getMonth() + 1) + "/" + (fechaCapturada.getDate() + 1); 
    let fechaNacimiento = new Date(fechaCorregida);
    let edad = inputEdad.value;
    let imgPerfil = foto.src;

    let error = validar(tipoID, id, nombreUsuario, nombre1, nombre2, apellido1, apellido2, correo, edad);


    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar los datos',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        let respuesta = actualizarUsuario(tipoID, id, nombreUsuario, nombre1, nombre2, apellido1, apellido2, correo, fechaNacimiento, edad, imgPerfil);
        if (respuesta.success)
            swal({
                type: 'success',
                title: 'Registrado',
                text: 'Se han enviado los datos'
            }).then(function () {
                window.location.href = "perfilCliente.html";
            });
        else
            swal({
                type: 'warning',
                title: 'No se pudo registrar los datos',
                text: respuesta.msg
            });
    }

}



function validar(ptipoID, pid, pnombreUsuario, pnombre1, pnombre2, papellido1, papellido2, pcorreo, pfechaNacimiento, pedad) {
    let error = false;
    let expLetras = /^[a-z A-Záéíóúñ@]+$/;
    let expCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


    if (ptipoID == '') {
        error = true;
        inputTipoID.classList.add('alerta_error');
    } else {
        inputTipoID.classList.remove('alerta_error');
    }

    if (pid == '') {
        error = true;
        inputId.classList.add('alerta_error');
    } else {
        inputId.classList.remove('alerta_error');
    }

    if (pnombreUsuario == '') {
        error = true;
        inputNombreUsuario.classList.add('alerta_error');
        msgErrorNombreUsuario.innerText = "El nombre de usuario no puede estar vacio";
    } else {
        inputNombreUsuario.classList.remove('alerta_error');
        msgErrorNombreUsuario.innerText = '';
    }


    if (pnombre1 == '') {
        error = true;
        inputNombre1.classList.add('alerta_error');
        msgErrorNombre.innerText = "El nombre no puede estar vacio";
    } else if (expLetras.test(pnombre1) == false) {
        error = true;
        inputNombre1.classList.add('alerta_error');
        msgErrorNombre.innerText = "El nombre tiene caracteres no válidos";
    } else {
        inputNombre1.classList.remove('alerta_error');
        msgErrorNombre.innerText = '';
    }

    if (papellido1 == '') {
        error = true;
        inputApellido1.classList.add('alerta_error');
        msgErrorApellido1.innerText = "El apellido no puede estar vacio";
    } else if (expLetras.test(papellido1) == false) {
        error = true;
        inputApellido1.classList.add('alerta_error');
        msgErrorApellido1.innerText = "El apellido tiene caracteres no válidos";
    } else {
        inputApellido1.classList.remove('alerta_error');
        msgErrorApellido1.innerText = '';
    }

    if (pcorreo == '') {
        error = true;
        inputCorreo.classList.add('alerta_error');
        msgErrorCorreo.innerText = "El correo no puede estar vacio";
    } else if (expCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('alerta_error');
        msgErrorCorreo.innerText = "Formato de correo inválido";
    } else {
        inputCorreo.classList.remove('alerta_error');
        msgErrorCorreo.innerText = '';
    }

    if (pfechaNacimiento == 'Invalid Date' || pfechaNacimiento > new Date()) {
        error = true;
        inputNacimiento.classList.add('alerta_error');
        msgErrorFecha.innerText = "Formato de fecha Inválida";
    } else {
        inputNacimiento.classList.remove('alerta_error');
        msgErrorFecha.innerText = '';
    }

    if (inputEdad.value < 15) {
        error = true;
        inputEdad.classList.add('alerta_error');
        msgErrorEdad.innerText = "Solo mayores de 15 años";
    } else {
        inputEdad.classList.remove('alerta_error');
        msgErrorEdad.innerText = '';
    }


    return error;
};

function calcularEdad() {
    let fechaActual = new Date();
    let fechaIngresada = new Date(inputNacimiento.value);
    let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();

    inputEdad.value = edad;
};

btnSubirFotoPerfil.addEventListener('click', cargarImagen);
btnActualizarUsuario.addEventListener('click', obtenerDatosFormulario);
inputNacimiento.addEventListener('change', calcularEdad);