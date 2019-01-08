'use strict ';

obtenerUsuario();

let nav = document.querySelectorAll('#nav_principal a');
let conectado = sessionStorage.getItem('conectado');//como se estáconectando eso desde el inicio de sesión?
let usuario = sessionStorage.getItem('tipo_usuario');//como se estáconectando eso desde el inicio de sesión?    
const botonCerrarSesion = document.querySelector('#cerrarSesion');

if(conectado){
    switch(usuario){
        case 'administrador':

        break;

        case 'visitante':

        break;
    
        case 'cliente':

        break;

        case 'dueño o empresario':

        break;

        default:
    
        break;
    
    }
}else{
    window.location.href = 'inicio_sesion.html';
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.href = 'index.html';

}

function obtenerUsuario(){
    let usuario = obtenerPerfilUsuario();
    let inputNombre1FotoPerfil = document.querySelector('#txtnombre1');
    let inputNombre2FotoPerfil = document.querySelector('#txtnombre2');
    let inputApellido1FotoPerfil = document.querySelector('#txtapellido1');
    let inputApellido2FotoPerfil = document.querySelector('#txtapellido2');
    inputNombre1FotoPerfil.value = usuario.nombre1;
    inputNombre2FotoPerfil.value = usuario.nombre2;
    inputApellido1FotoPerfil.value = usuario.apellido1;
    inputApellido2FotoPerfil.value = usuario.apellido2;


    let inputNombre1 = document.querySelector('#txtNombre');
    inputNombre1.value = usuario.nombre1;
}
botonCerrarSesion.addEventListener('click', cerrarSesion);
