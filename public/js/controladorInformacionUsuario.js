'use strict'

const username = document.querySelector('#nombreUsuario');
const nombreUsuario = document.querySelector('#nombre1');
const apellidoUsuario = document.querySelector('#apellido1');
const apellido2 = document.querySelector('#apellido2');
const correoUsuario = document.querySelector('#correo');
const fechaNacimiento = document.querySelector('#fechaNacimiento');
const edad = document.querySelector('#edad');
const contrasenna = document.querySelector('#contrasenna');


let id_usuario = localStorage.getItem('usuario');

let usuario = buscar_usuario(id_usuario);


username.innerHTML = usuario['nombreUsuario'];
nombreUsuario.innerHTML = usuario['nombre1'];
apellidoUsuario.innerHTML = usuario['apellido1'];
apellido2.innerHTML = usuario['apellido2'];
correoUsuario.innerHTML = usuario['correo'];
fechaNacimiento.innerHTML = usuario['fechaNacimiento'];
edad.innerHTML = usuario['edad'];
contrasenna.innerHTML = usuario['contrasenna'];