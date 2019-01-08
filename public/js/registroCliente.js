let botonRegistrar = document.querySelector('#btnRegistrar');

let inputTipoID = document.querySelector('#slctTipoID');
let inputId = document.querySelector('#txtID');
let inputUsuario = document.querySelector('#txtUsuario');
let inputNombre1 = document.querySelector('#txtNombre1');
let inputApellido1 = document.querySelector('#txtApellido1');
let inputCorreo = document.querySelector('#txtEmail');
let inputNacimiento = document.querySelector('#txtNacimiento');
let inputEdad = document.querySelector('#txtEdad');

function obtenerDatos(){
    let tipoID = inputTipoID.value;
    let id = inputId.value;
    let usuario = inputUsuario.value;
    let nombre1 = inputNombre1.value;
    let apellido1 = inputApellido1.value;
    let correo = inputCorreo.value;
    let fechaNacimiento = new Date(inputNacimiento.value);
    let edad = Number(inputEdad.value);
    let sexo = '';

    let error = validar(tipoID, id, usuario, nombre1, apellido1, correo, fechaNacimiento, edad, sexo,);
  

    if (error == true){
        swal ({
            type: 'warning',
            title: 'No se pudo registrar los datos',
            text: 'Por favor revise los campos en rojo' 
        });
        
    } else {
        swal ({
            type: 'success',
            title: 'Registrado',
            text: 'Se han enviado los datos' 
        });
    }
};

function validar(ptipoID, pid, pusuario, pnombre1, papellido1, pcorreo, pfechaNacimiento, pedad, psexo){
    let error = false;
    let expLetras = /^[a-z A-Záéíóúñ@]+$/;
    let expCorreo = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(document.querySelector('#inputsSexo input[type=radio]:checked') == null){
        document.querySelector('#inputsSexo').classList.add('alerta_error');
        error = false;
      }else{
        document.querySelector('#inputsSexo').classList.remove('alerta_error');
    }

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
    if (pusuario == '' || expLetras.test(pusuario) == false){
        error = true;
        inputUsuario.classList.add('alerta_error');
    } else {
        inputUsuario.classList.remove('alerta_error');
    }

    if (pnombre1 == '' || expLetras.test(pnombre1) == false){
        error = true;
        inputNombre1.classList.add('alerta_error');
    } else {
        inputNombre1.classList.remove('alerta_error');
    }

    if (papellido1 == '' || expLetras.test(pnombre1) == false){
        error = true;
        inputApellido1.classList.add('alerta_error');
    } else {
        inputApellido1.classList.remove('alerta_error');
    }

    if (pcorreo == '' || expCorreo.test(inputCorreo.value) == false){
        error = true;
        inputCorreo.classList.add('alerta_error');
    } else {
        inputCorreo.classList.remove('alerta_error');
    }

    if (pfechaNacimiento == 'Invalid Date' || pfechaNacimiento > new Date()){
        error = true;
        inputNacimiento.classList.add('alerta_error');
    } else {
        inputNacimiento.classList.remove('alerta_error');
    }  

  return error;  
};

function calcularEdad(){
    let fechaActual = new Date();
    let fechaIngresada = new Date(inputNacimiento.value);
    let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();
    
    inputEdad.value = edad;
};

botonRegistrar.addEventListener('click', obtenerDatos);
inputNacimiento.addEventListener('change', calcularEdad);