let botonRegistrar = document.querySelector('#btnRegistrar');
const btnSubirFotoPerfil =  document.querySelector('#btnSubirImagen');


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
let inputContrasenna = document.querySelector('#txtContrasenna');
let inputConfirmarContrasenna = document.querySelector('#txtConfirmarContrasenna');
const foto =  document.querySelector('#imagenPrevista');

//Subir foto perfil

btnSubirFotoPerfil.addEventListener('click', cargarImagen);

function cargarImagen(event) {
    event.returnValue = false;
    pasarImagen();
};



function obtenerDatos() {
    const rolUsuario = '1';
    let tipoID = inputTipoID.value;
    let id = inputId.value;
    let nombreUsuario = inputNombreUsuario.value;
    let nombre1 = inputNombre1.value;
    let nombre2 = inputNombre2.value;
    let apellido1 = inputApellido1.value;
    let apellido2 = inputApellido2.value;
    let correo = inputCorreo.value;
    let fechaNacimiento = new Date(inputNacimiento.value);
    let edad = Number(inputEdad.value);
    let contrasenna = inputContrasenna.value;
    let confirmarContrasenna = inputConfirmarContrasenna.value;
    let imgPerfil = foto.src;

    let error = validar(rolUsuario, tipoID, id, nombreUsuario, nombre1, nombre2, apellido1, apellido2, correo, fechaNacimiento, edad, contrasenna, confirmarContrasenna);


    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar los datos',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        let respuesta = registrarUsuario(rolUsuario, tipoID, id, nombreUsuario, nombre1, nombre2, apellido1, apellido2, correo, fechaNacimiento, edad, contrasenna, confirmarContrasenna, imgPerfil);
        if (respuesta.success)
            swal({
                type: 'success',
                title: 'Registrado',
                text: 'Se han enviado los datos'
            });
        else
            swal({
                type: 'warning',
                title: 'No se pudo registrar los datos',
                text: respuesta.msg
            });
    }

    let contrasenaIgual = igualdadContrasenas(contrasenna, confirmarContrasenna);

    if (!contrasenaIgual) {
        error = true;
        inputConfirmarContrasenna.classList.add('alerta_error');
        msgErrorConfirmacion.innerText = "Las contraseñas no coinciden";
    } else {
        inputConfirmarContrasenna.classList.remove('alerta_error');
        msgErrorConfirmacion.innerText = '';
    }

};


function validar(prolUsuario, ptipoID, pid, pnombreUsuario, pnombre1, pnombre2, papellido1, papellido2, pcorreo, pfechaNacimiento, pedad, pcontrasenna ){
    let error = false;
    let expLetras = /^[a-z A-Záéíóúñ@]+$/;
    let expCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let exprContrasenna =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])([A-Za-z\d$@$!%*?&#]|[^ ]){8,15}$/;


    if (ptipoID == ''){
        error = true;
        inputTipoID.classList.add('alerta_error');
    } else {
        inputTipoID.classList.remove('alerta_error');
    }

    if (pid == ''){
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


    if (papellido1 == '' || expLetras.test(papellido1) == false){
        error = true;
        inputApellido1.classList.add('alerta_error');
    } else {
        inputApellido1.classList.remove('alerta_error');
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

    if (pfechaNacimiento == 'Invalid Date' || pfechaNacimiento > new Date()){
        error = true;
        inputNacimiento.classList.add('alerta_error');
        msgErrorFecha.innerText = "Formato de fecha Inválida";
    } else {
        inputNacimiento.classList.remove('alerta_error');
        msgErrorFecha.innerText = '';
    }  

    if (inputEdad.value < 15){
        error = true;
        inputEdad.classList.add('alerta_error');
        msgErrorEdad.innerText = "Solo mayores de 15 años";
    } else {
        inputEdad.classList.remove('alerta_error');
        msgErrorEdad.innerText = '';
    }

    if (pcontrasenna == '') {
        error = true;
        inputContrasenna.classList.add('alerta_error');
        msgErrorContrasena.innerText = "La contraseña no puede estar vacia";
    } else if (exprContrasenna.test(pcontrasenna) == false) {
        error = true;
        inputContrasenna.classList.add('alerta_error');
        msgErrorContrasena.innerText = "Formato de contraseña inválido";
    } else {
        inputContrasenna.classList.remove('alerta_error');
        msgErrorContrasena.innerText = '';
    }
    

  return error;  
};



function igualdadContrasenas(contrasenna, confirmarContrasenna) {

    if (contrasenna == confirmarContrasenna) {
        return true;
    }
};


function calcularEdad() {
    let fechaActual = new Date();
    let fechaIngresada = new Date(inputNacimiento.value);
    let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();

    inputEdad.value = edad;
};

botonRegistrar.addEventListener('click', obtenerDatos);
btnSubirFotoPerfil.addEventListener('click', cargarImagen);
inputNacimiento.addEventListener('change', calcularEdad);