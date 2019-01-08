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
let inputProvincia = document.querySelector('#sltProvincias');
let inputCanton = document.querySelector('#sltCantones');
let inputDistrito = document.querySelector('#sltDistritos');
let inputDireccionExacta = document.querySelector('#textDireccionExacta');


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
    let nombreProvincia = provincias.filter(provincia => provincia.idProvincia === parseInt(selectProvincias.value))[0].nombre;
    let nombreCanton = cantones.filter(canton => canton.idCanton === parseInt(selectCantones.value))[0].nombre;
    let nombreDistrito = distritos.filter(distrito => distrito.idDistrito === parseInt(selectDistritos.value))[0].nombre;
    let direccionExacta = inputDireccionExacta.value;


    let error = validarEmpresario(IDJuridico, razonSocial, nombreComercial, telEmpresa, correoEmpresa, nombreAContacto, nombreBContacto, apellidoAContacto, apellidoBContacto, correoContacto, telContacto, contrasennaEmpresario, confirmarContrasennaEmpresario, nombreUsuarioEmpresario);


    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar los datos',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        let respuesta = registrarEmpresario(rolUsuario, IDJuridico, razonSocial, nombreComercial, telEmpresa, correoEmpresa, nombreAContacto, nombreBContacto, apellidoAContacto, apellidoBContacto, correoContacto, telContacto, contrasennaEmpresario, nombreUsuarioEmpresario, nombreProvincia, nombreCanton, nombreDistrito, direccionExacta);
        if (respuesta.success) {
            swal({
                type: 'success',
                title: 'Registrado',
                text: 'Se han enviado los datos',
            }).then(function () {
                window.location.href = "listarEmpresarios.html";
            });
        }
        else
            swal({
                type: 'warning',
                title: 'No se pudo registrar los datos',
                text: respuesta.msg
            });
    }

    let contrasenaIgual = igualdadContrasenas(contrasennaEmpresario, confirmarContrasennaEmpresario);

    if (!contrasenaIgual) {
        error = true;
        inputConfirmarContrasennaEmpresario.classList.add('alerta_error');
        msgErrorConfirmacionEmpresario.innerText = "Las contraseñas no coinciden";
    } else {
        inputConfirmarContrasennaEmpresario.classList.remove('alerta_error');
        msgErrorConfirmacionEmpresario.innerText = '';
    }


};

function validarEmpresario(pIDJuridico, prazonSocial, pnombreComercial, ptelEmpresa, pcorreoEmpresa, pnombreAContacto, pnombreBContacto, papellidoAContacto, papellidoBContacto, pcorreoContacto, ptelContacto, pcontrasennaEmpresario, pconfirmarContrasennaEmpresario, pnombreUsuarioEmpresario) {
    let error = false;
    let expLetras = /^[a-z A-Záéíóúñ@]+$/;
    let expCorreo = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let exprContrasenna = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])([A-Za-z\d$@$!%*?&#]|[^ ]){8,15}$/;

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



    if (pnombreComercial == '') {
        error = true;
        inputNombreComercial.classList.add('alerta_error');
        msgErrorNombreComercial.innerText = "El nombre comercial no puede estar vacio";
    } else {
        inputNombreComercial.classList.remove('alerta_error');
        msgErrorNombreComercial.innerText = '';
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


    if (pcorreoEmpresa == '') {
        error = true;
        inputCorreoEmpresa.classList.add('alerta_error');
        msgErrorCorreoEmpresa.innerText = "El correo no puede estar vacio";
    } else if (expCorreo.test(inputCorreoEmpresa.value) == false) {
        error = true;
        inputCorreoEmpresa.classList.add('alerta_error');
        msgErrorCorreoEmpresa.innerText = "Formato de correo inválido";
    } else {
        inputCorreoEmpresa.classList.remove('alerta_error');
        msgErrorCorreoEmpresa.innerText = '';
    }

    if (pnombreAContacto == '') {
        error = true;
        inputNombreAContacto.classList.add('alerta_error');
        msgErrorNombreAContacto.innerText = "El nombre no puede estar vacio";
    } else if (expLetras.test(pnombreAContacto) == false) {
        error = true;
        inputNombreAContacto.classList.add('alerta_error');
        msgErrorNombreAContacto.innerText = "El nombre tiene caracteres no válidos";
    } else {
        inputNombreAContacto.classList.remove('alerta_error');
        msgErrorNombreAContacto.innerText = '';
    }

    if (papellidoAContacto == '') {
        error = true;
        inputApellidoAContacto.classList.add('alerta_error');
        msgErrorApellidoAContacto.innerText = "El apellido no puede estar vacio";
    } else if (expLetras.test(papellidoAContacto) == false) {
        error = true;
        inputApellidoAContacto.classList.add('alerta_error');
        msgErrorApellidoAContacto.innerText = "El apellido tiene caracteres no validos";
    } else {
        inputApellidoAContacto.classList.remove('alerta_error');
        msgErrorApellidoAContacto.innerText = '';
    }


    if (pcorreoContacto == '') {
        error = true;
        inputCorreoContacto.classList.add('alerta_error');
        msgErrorCorreoEmpresario.innerText = "El correo no puede estar vacio";
    } else if (expCorreo.test(inputCorreoContacto.value) == false) {
        error = true;
        inputCorreoContacto.classList.add('alerta_error');
        msgErrorCorreoEmpresario.innerText = "Formato de correo inválido";
    } else {
        inputCorreoContacto.classList.remove('alerta_error');
        msgErrorCorreoEmpresario.innerText = '';
    }




    if (ptelContacto == '') {
        error = true;
        inputTelContacto.classList.add('alerta_error');
    } else {
        inputTelContacto.classList.remove('alerta_error');
    }

    if (pnombreUsuarioEmpresario == '') {
        error = true;
        inputNombreUsuarioEmpresario.classList.add('alerta_error');
    } else {
        inputNombreUsuarioEmpresario.classList.remove('alerta_error');
    }

    if (pcontrasennaEmpresario == '') {
        error = true;
        inputContrasennaEmpresario.classList.add('alerta_error');
        msgErrorContrasenaEmpresario.innerText = "La contraseña no puede estar vacia";
    } else if (exprContrasenna.test(pcontrasennaEmpresario) == false) {
        error = true;
        inputContrasennaEmpresario.classList.add('alerta_error');
        msgErrorContrasenaEmpresario.innerText = "Formato de contraseña inválido";
    } else {
        inputContrasennaEmpresario.classList.remove('alerta_error');
        msgErrorContrasenaEmpresario.innerText = '';
    }


    return error;
};

function igualdadContrasenas(contrasennaEmpresario, confirmarContrasennaEmpresario) {

    if (contrasennaEmpresario == confirmarContrasennaEmpresario) {
        return true;
    }
};

function limpiarFormulario() {
    document.getElementById("formularioEmpresario").reset();
};

botonRegistrarEmpresario.addEventListener('click', obtenerDatosEmpresario);