'use strict';

const foto =  document.querySelector('#foto');
const nombreLugar = document.querySelector('#nombreLugar');
const categoriaLugar = document.querySelector('#categoriaLugar');
const descripcionLugar = document.querySelector('#descripcionLugar');
const facebookLugar = document.querySelector('#facebookLugar');
const twitterLugar = document.querySelector('#twitterLugar');
const instagramLugar = document.querySelector('#instagramLugar');
const youtubeLugar = document.querySelector('#youtubeLugar');
const provinciaLugar = document.querySelector('#provinciaLugar');
const cantonLugar = document.querySelector('#cantonLugar');
const distritoLugar = document.querySelector('#distritoLugar');
const direccionLugar = document.querySelector('#direccionLugar');


let id_lugar = localStorage.getItem('lugar');

let lugar = buscar_lugar(id_lugar);

foto.src = lugar['foto'];
nombreLugar.innerHTML = lugar['nombre'];
categoriaLugar.innerHTML = lugar['categoria'];
descripcionLugar.innerHTML = lugar['descripcion'];
facebookLugar.innerHTML = lugar['facebook'];
twitterLugar.innerHTML = lugar['twitter'];
instagramLugar.innerHTML = lugar['instagram'];
youtubeLugar.innerHTML = lugar['youtube'];
provinciaLugar.innerHTML = lugar['nombreProvincia'];
cantonLugar.innerHTML = lugar['nombreCanton'];
distritoLugar .innerHTML = lugar['nombreDistrito'];
direccionLugar.innerHTML = lugar['direccion'];



