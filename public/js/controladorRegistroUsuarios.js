let botonRegistrar = document.querySelector('#btnRegistrar');
let elementosInput = document.querySelectorAll('.formularioCliente input[type=text]:required, .formularioCliente input[type=password]:required, .formularioCliente input[type=date]:required, .formularioCliente input[type=email]:required, .formularioCliente input[type=number]:required, .formularioCliente select:required');

/**.formulaCliente es la clase que encierra todos los input que queremos evaluar, por lo tanto podemos referirnos a los input
 * formularioCliente de la siguiente manera .formularioCliente input[type=text]  especificando el tipo
 * de igual manera los select pero como estos no tienen tipo se omiten los corchetes cuadrados
* basicamente la el llamado seria asi: .clase input[tipo de input]
 */

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
let msgErrorNombre = document.querySelector('#errorNombre1');
let msgErrorContrasennaConfirm = document.querySelector('#msgErrorContrasennaConfirm');

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

    let error = false;
    let errorEspacio = validarEspaciosVacios(elementosInput);
    if (errorEspacio == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar los datos',
            text: 'Hay espacios vacios en el formulario'
        });
        error = true;

    }

    let errorNombres = validarNombres(nombre1, inputNombre1);
    if (errorNombres == true) {
        error = true;
    }
    errorNombres = validarNombres(apellido1, inputApellido1);
    if (errorNombres == true) {
        error = true;
    }

    let correoCorrecto = validarCorreo(correo);
    if (correoCorrecto == true) {
        error = true;

    }
    let contrasenaIgual = igualdadContrasenas(contrasenna, confirmarContrasenna);
    if (!contrasenaIgual) {
        msgErrorContrasennaConfirm.innerText="Contraseñas no son iguales.";
        error = true;
    }
    else{
        msgErrorContrasennaConfirm.innerText="";
    }
    if (error) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar los datos',
            text: 'Hay espacios vacios en el formulario'
        });
    } else {
        registrarUsuario(rolUsuario, tipoID, id, nombreUsuario, nombre1, nombre2, apellido1, apellido2, correo, fechaNacimiento, edad, contrasenna, confirmarContrasenna);
        swal({
            type: 'success',
            title: 'Registrado',
            text: 'Se han enviado los datos'
        });
    }
}


/** 
 *    
*/


function validarEspaciosVacios(pElementosInput) {

    let bCampoVacio = false;

    for (var i = 0; i < pElementosInput.length; i++) {
        if (pElementosInput[i].value == '') {
            pElementosInput[i].classList.add('alerta_error');
            pElementosInput[i].focus();
            bCampoVacio = true;
        } else {
            pElementosInput[i].classList.remove('alerta_error');
        }
    }
    return bCampoVacio;
};

function validarNombres(valor, elemento) {
    let errorNombres = false;
    let expLetras = /^[a-z A-Záéíóúñ@]+$/;


    if (expLetras.test(valor) == false) {
        errorNombres = true;
        elemento.classList.add('alerta_error');
    } else {
        elemento.classList.remove('alerta_error');
    }

    return errorNombres;
};

function validarCorreo(pcorreo) {
    let errorCorreo = false;
    let expCorreo = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (expCorreo.test(inputCorreo.value) == false) {
        errorCorreo = true;
        inputCorreo.classList.add('alerta_error');
    } else {
        inputCorreo.classList.remove('alerta_error');
    }
    return errorCorreo;
}

function validarFecha(pfechaNacimiento) {
    let errorFecha = false;

    if (pfechaNacimiento == 'Invalid Date' || pfechaNacimiento > new Date()) {
        error = true;
        inputNacimiento.classList.add('alerta_error');
    } else {
        inputNacimiento.classList.remove('alerta_error');
    }

    return errorFecha;
}


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
inputNacimiento.addEventListener('change', calcularEdad);