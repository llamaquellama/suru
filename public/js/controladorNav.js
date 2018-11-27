let conectado = sessionStorage.getItem('conectado');//como se estáconectando eso desde el inicio de sesión?
const botonCerrarSesion = document.querySelector('#btnCerrarSesion');

function cerrarSesion(){
    sessionStorage.clear();
    window.location = 'index.html';
}

document.querySelector('#btnCerrarSesion').addEventListener('click', cerrarSesion)