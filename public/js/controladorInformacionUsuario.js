'use strict'
const foto = document.querySelector('#imagenPrevista')
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
//innerHTML agrega dinamicamente propieadades a las etiquetas de html y maneja el contenido de clases, id etc

foto.src = usuario['imgPerfil']; // foto.src link que queremos agregar a la imagen
username.innerHTML = usuario['nombreUsuario'];
nombreUsuario.innerHTML = usuario['nombre1'];
apellidoUsuario.innerHTML = usuario['apellido1'];
apellido2.innerHTML = usuario['apellido2'];
correoUsuario.innerHTML = usuario['correo'];
let fecha = new Date(usuario.fechaNacimiento); //Se crea variable,  la fecha que viene como string desde la bd se convierte en un objeto fecha.
fechaNacimiento.innerHTML = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear(); // por secciones fecha, mes y el año para mostrarlos en el html
edad.innerHTML = usuario['edad'];
contrasenna.innerHTML = usuario['contrasenna'];

