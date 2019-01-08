'use strict'
// capturamos el nombre de usuario del sessionStorage
let nombreUsuarioSession = sessionStorage.getItem('nombreUsuario');

const btnActualizarEmpresario = document.querySelector('#btnActualizarEmpresario');

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
let inputNombreUsuarioEmpresario = document.querySelector('#nombreUsuarioEmpresario');

const selectProvincia = document.querySelector('#sltProvincias');
const opcionesProvincia = document.querySelectorAll('#sltProvincias option');
const selectCanton = document.querySelector('#sltCantones');
let opcionesCanton= document.querySelectorAll('#sltCantones option');
const selectDistrito = document.querySelector('#sltDistritos')
let opcionesDistrito = document.querySelectorAll('#sltDistritos option');


let inputDireccionExacta = document.querySelector('#textDireccionExacta');

// Ver informacion de Perfil
const username = document.querySelector('#nombreUsuarioDato');
const nombreDato = document.querySelector('#nombre1Dato');
const correoUsuarioDato = document.querySelector('#correoDato');
const razonsocialDato = document.querySelector('#razonsocialDato');
const telDato = document.querySelector('#telDato');
const idJurudicoDato = document.querySelector('#idJurudicoDato');
const nombreContactoDato = document.querySelector('#nombreContactoDato');
const correoContactoDato = document.querySelector('#correoContactoDato');
const telefonoContactoDato = document.querySelector('#telefonoContactoDato');


if(nombreUsuarioSession){
    mostrarDatos();
}else{
    alert('Debe seleccionar un usuario para poder actualizar');
}


function mostrarDatos(){
    let usuario = obtenerPerfilUsuario (nombreUsuarioSession);

    for(let i = 0; i < opcionesProvincia.length; i++){
        if(usuario['nombreProvincia'] == opcionesProvincia[i].text){
            selectProvincia.selectedIndex = i;
            llenarCantones(opcionesProvincia[i].value);
            opcionesCanton = document.querySelectorAll('#sltCantones option');
        }
    };

    for(let i = 0; i < opcionesCanton.length; i++){
        if(usuario['nombreCanton'] == opcionesCanton[i].text){
            selectCanton.selectedIndex = i;
            llenarDistritos(opcionesCanton[i].value);
            opcionesDistrito = document.querySelectorAll('#sltDistritos option');
        }
    };

    for(let i = 0; i < opcionesDistrito.length; i++){
        if(usuario['nombreDistrito'] == opcionesDistrito[i].text){
            selectDistrito.selectedIndex = i;
        }
    };

    inputIDjuridico.value = usuario['id'];
    inputRazonSocial.value = usuario['razonSocial'];
    inputNombreComercial.value = usuario['nombreComercial'];
    inputTelEmpresa.value = usuario['telEmpresa'];
    inputCorreoEmpresa.value = usuario['correoEmpresa'];
    inputNombreAContacto.value = usuario['nombre1'];
    inputNombreBContacto.value = usuario['nombreBContacto'];
    inputApellidoAContacto.value = usuario['apellidoAContacto'];
    inputApellidoBContacto.value = usuario['apellidoBContacto'];
    inputCorreoContacto.value = usuario['correoContacto'];
    inputTelContacto.value = usuario['telContacto'];
    inputNombreUsuarioEmpresario.value = usuario['nombreUsuario'];
    inputDireccionExacta.value = usuario['direccionExacta'];


    //Mostrar Datos en el perfil
    nombreDato.innerHTML = usuario['nombreComercial'];
    username.innerHTML = usuario['nombreUsuario'];
    correoUsuarioDato.innerHTML = usuario['correoEmpresa']; 
    razonsocialDato.innerHTML = usuario['razonSocial'];
    telDato.innerHTML = usuario['telEmpresa'];
    idJurudicoDato.innerHTML = usuario['id'];
    nombreContactoDato.innerHTML = usuario['nombre1'] + " " + usuario['nombreBContacto'] + " " + usuario['apellidoAContacto'] + " " + usuario['apellidoBContacto'];
    correoContactoDato.innerHTML = usuario['correoContacto'];
    telefonoContactoDato.innerHTML = usuario['telContacto'];
};

function obtenerDatosFormulario(){
    
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
    let nombreUsuarioEmpresario = inputNombreUsuarioEmpresario.value;
    let nombreProvincia = provincias.filter(provincia => provincia.idProvincia === parseInt(selectProvincias.value))[0].nombre;
    let nombreCanton = cantones.filter(canton => canton.idCanton === parseInt(selectCantones.value))[0].nombre;
    let nombreDistrito = distritos.filter(distrito => distrito.idDistrito === parseInt(selectDistritos.value))[0].nombre;
    let direccionExacta = inputDireccionExacta.value;


    let error = validarEmpresario(IDJuridico, razonSocial, nombreComercial, telEmpresa, correoEmpresa, nombreAContacto, nombreBContacto, apellidoAContacto, apellidoBContacto, correoContacto, telContacto, nombreUsuarioEmpresario, direccionExacta);


  if (error == true) {
    swal({
        type: 'warning',
        title: 'No se pudo modificar los datos',
        text: 'Por favor revise los campos en rojo'
    });

} else {
    let respuesta = actualizarEmpresario (IDJuridico, razonSocial, nombreComercial, telEmpresa, correoEmpresa, nombreAContacto, nombreBContacto, apellidoAContacto, apellidoBContacto, correoContacto, telContacto, nombreUsuarioEmpresario, nombreProvincia, nombreCanton, nombreDistrito, direccionExacta);
    if (respuesta.success)
        swal({
            type: 'success',
            title: 'Actualizado',
            text: 'Se han actualizado los datos'
        }).then(function(){
            window.location.href = "perfilEmpresario.html"; 
        });
    else
        swal({
            type: 'warning',
            title: 'No se pudo actualizar los datos',
            text: respuesta.msg
        });
}
   
    }


    function validarEmpresario(pIDJuridico, prazonSocial, pnombreComercial, ptelEmpresa, pcorreoEmpresa, pnombreAContacto, pnombreBContacto, papellidoAContacto, papellidoBContacto, pcorreoContacto, ptelContacto, pnombreUsuarioEmpresario, pdireccionExacta) {
        let error = false;
        let expLetras = /^[a-z A-Záéíóúñ@]+$/;
        let expCorreo = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
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

        if (pdireccionExacta == '') {
            error = true;
            inputDireccionExacta.classList.add('alerta_error');
            msgErrorDireccion.innerText = "La dirección no puede estar vacía";
        } else {
            inputDireccionExacta.classList.remove('alerta_error');
            msgErrorDireccion.innerText = '';
        }
    
    
        return error;
    };


btnActualizarEmpresario.addEventListener('click', obtenerDatosFormulario);