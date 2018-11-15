let botonRegistrarEmpresario = document.querySelector('#btnRegistrarEmpresario');

let inputIDjuridico = document.querySelector('#txtIDJuridico');
let inputRazonSocial = document.querySelector('#txtRazonSocial');
let inputNombreComercial = document.querySelector('#txtNombreComercial');
let inputTelEmpresa = document.querySelector('#txtTelEmpresa');
let inputCorreoEmpresa = document.querySelector('#txtCorreoEmpresa');
let inputNombreAContacto = document.querySelector('#txtNombreAContacto');
let inputNombreBContacto = document.querySelector('#txtNombreBContacto');
let inputApellidoAContacto = document.querySelector('#txtApellidoAContacto');
let inputApellidoBContacto = document.querySelector('#txtApellidoBContacto');
let inputCorreoContacto = document.querySelector('#txtCorreoContacto');
let inputTelContacto = document.querySelector('#txtTelContacto');
let inputContrasennaEmpresario = document.querySelector('#contrasennaEmpresario');
let inputConfirmarContrasennaEmpresario = document.querySelector('#confirmarContrasennaEmpresario');
let inputNombreUsuarioEmpresario = document.querySelector('#nombreUsuarioEmpresario');
const msgErrorNombreAContacto = document.querySelector('#msgErrorNombreAContacto');


function obtenerDatosEmpresario() {
    const rolUsuario = '2';
    let IDJuridico = inputIDjuridico.value;
    let razonSocial = inputRazonSocial.value;
    let nombreComercial = inputNombreComercial.value;
    let telEmpresa = inputTelEmpresa.value;
    let correoEmpresa = inputCorreoEmpresa.value;
    let nombreAContacto = inputNombreAContacto.value;
    let nombreBContacto = inputNombreBContacto.value;
    let apellidoAContacto = inputApellidoAContacto.value;
    let apellidoBContacto = inputApellidoBContacto.value;
    let correoContacto = inputCorreoContacto.value;
    let telContacto = inputTelContacto.value;
    let contrasennaEmpresario = inputContrasennaEmpresario.value;
    let confirmarContrasennaEmpresario = inputConfirmarContrasennaEmpresario.value;
    let nombreUsuarioEmpresario = inputNombreUsuarioEmpresario.value;


    let error = validarEmpresario(rolUsuario, IDJuridico, razonSocial, nombreComercial, telEmpresa, correoEmpresa, nombreAContacto, nombreBContacto, apellidoAContacto, apellidoBContacto, correoContacto, telContacto, contrasennaEmpresario, confirmarContrasennaEmpresario, nombreUsuarioEmpresario);


    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar los datos',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        let respuesta = registrarEmpresario(rolUsuario, IDJuridico, razonSocial, nombreComercial, telEmpresa, correoEmpresa, nombreAContacto, nombreBContacto, apellidoAContacto, apellidoBContacto, correoContacto, telContacto, contrasennaEmpresario, confirmarContrasennaEmpresario, nombreUsuarioEmpresario);
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

    let contrasenaIgual = igualdadContrasenas(contrasennaEmpresario, confirmarContrasennaEmpresario);

    if (!contrasenaIgual) {
        swal({
            type: 'warning',
            title: 'Las contraseñas no coinciden',
            text: 'Intentelo de nuevo'
        });
    }
};

function validarEmpresario(prolUsuario, pIDJuridico, prazonSocial, pnombreComercial, ptelEmpresa, pcorreoEmpresa, pnombreAContacto, pnombreBContacto, papellidoAContacto, papellidoBContacto, pcorreoContacto, ptelContacto, pcontrasennaEmpresario, pconfirmarContrasennaEmpresario, pnombreUsuarioEmpresario) {
    let error = false;
    let expLetras = /^[a-z A-Záéíóúñ@]+$/;
    let expCorreo = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (prolUsuario == '') {
        error = true;
        inputIDjuridico.classList.add('alerta_error');
    } else {
        inputIDjuridico.classList.remove('alerta_error');
    }

    if (pIDJuridico == '') {
        error = true;
        inputIDjuridico.classList.add('alerta_error');
    } else {
        inputIDjuridico.classList.remove('alerta_error');
    }

    if (prazonSocial == '' || expLetras.test(prazonSocial) == false) {
        error = true;
        inputRazonSocial.classList.add('alerta_error');
    } else {
        inputRazonSocial.classList.remove('alerta_error');
    }

    if (pnombreComercial == '' || expLetras.test(pnombreComercial) == false) {
        error = true;
        inputNombreComercial.classList.add('alerta_error');
    } else {
        inputNombreComercial.classList.remove('alerta_error');
    }

    if (pIDJuridico == '') {
        error = true;
        inputIDjuridico.classList.add('alerta_error');
    } else {
        inputIDjuridico.classList.remove('alerta_error');
    }

    if (ptelEmpresa == '') {
        error = true;
        inputTelEmpresa.classList.add('alerta_error');
    } else {
        inputTelEmpresa.classList.remove('alerta_error');
    }

    if (pcorreoEmpresa == '' || expCorreo.test(inputCorreoEmpresa.value) == false) {
        error = true;
        inputCorreoEmpresa.classList.add('alerta_error');
    } else {
        inputCorreoEmpresa.classList.remove('alerta_error');
    }



    if (pnombreAContacto == '') {
        error = true;
        inputNombreAContacto.classList.add('alerta_error');
        msgErrorNombreAContacto.innerText = "El nombre no puede estar vacio";
    } else if (expLetras.test(pnombreAContacto) == false) {
        error = true;
        inputNombreAContacto.classList.add('alerta_error');
        msgErrorNombreAContacto.innerText = "El nombre tiene caracteres no validos";
    } else {
        inputNombreAContacto.classList.remove('alerta_error');
        msgErrorNombreAContacto.innerText = '';
    }

    

    if (papellidoAContacto == '' || expLetras.test(papellidoAContacto) == false) {
        error = true;
        inputApellidoAContacto.classList.add('alerta_error');
    } else {
        inputApellidoAContacto.classList.remove('alerta_error');
    }

    if (pcorreoContacto == '' || expCorreo.test(inputCorreoContacto.value) == false) {
        error = true;
        inputCorreoContacto.classList.add('alerta_error');
    } else {
        inputCorreoContacto.classList.remove('alerta_error');
    }

    if (ptelContacto == '') {
        error = true;
        inputTelContacto.classList.add('alerta_error');
    } else {
        inputTelContacto.classList.remove('alerta_error');
    }
    if (pcontrasennaEmpresario == '') {
        error = true;
        inputContrasennaEmpresario.classList.add('alerta_error');
    } else {
        inputContrasennaEmpresario.classList.remove('alerta_error');
    }
    if (pconfirmarContrasennaEmpresario == '') {
        error = true;
        inputConfirmarContrasennaEmpresario.classList.add('alerta_error');
    } else {
        inputConfirmarContrasennaEmpresario.classList.remove('alerta_error');
    }
    if (pnombreUsuarioEmpresario == '') {
        error = true;
        inputNombreUsuarioEmpresario.classList.add('alerta_error');
    } else {
        inputNombreUsuarioEmpresario.classList.remove('alerta_error');
    }


    return error;
};

function igualdadContrasenas(contrasennaEmpresario, confirmarContrasennaEmpresario) {

    if (contrasennaEmpresario == confirmarContrasennaEmpresario) {
        return true;
    }
};

botonRegistrarEmpresario.addEventListener('click', obtenerDatosEmpresario);